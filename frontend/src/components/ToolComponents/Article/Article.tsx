import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { Layout } from '../../Layout/Layout';
import { ArticleSourcesMenu } from '../../ArticleSourcesMenu/ArticleSourcesMenu'
import { useAppSelector } from '../../../hooks/redux'
import {ArticleVerticalList} from "../../ArticleVerticalList/ArticleVerticalList";
import Button from "@mui/material/Button";
import { useFetchAllArticlesGroupByHook } from "../../../hooks/useFetchAllArticlesGroupByHook";
import {useGetArticleByIdQuery} from "../../../store/services/ArticleService";
import {IArticle} from "../../../types/models/IArticle";
import Grid from '@mui/material/Grid';
import {getKeyByValue, pageRedirect} from "../../../pages/pageRedirect";
import {useGetArticleByIdHook} from "../../../hooks/useGetArticleByIdHook";


export const Article = () => {
  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);
  const navigate = useNavigate()
  const { time, id } = useParams()

  // Check for valid article ID
  if (isNaN(+id) || +id < 0) {
      navigate('/*')
  }

  const { isLoadingArticle, dataArticle } = useGetArticleByIdHook(+id)

  const { isLoadingArticles, fetchedArticles } = useFetchAllArticlesGroupByHook(10, 10, timeState)


  // Placeholder article
  let thisArticle: IArticle = {
      id: 9999999,
      title: 'undefined',
      time_ago: 'undefined',
      image: 'undefined',
      text: 'undefined',
      src_article: 'undefined',
      src_magazine: 'undefined',
      time: 'большой взрыв'
  }
  if (dataArticle != undefined) {
      thisArticle = dataArticle
  }

  if (fetchedArticles[0] != undefined) {
      const indexOfThisArticle = fetchedArticles[0].findIndex(article => article.id === +id)
      if (indexOfThisArticle > -1) {
          fetchedArticles[0].splice(indexOfThisArticle, 1)
      }
  }

  return (
    <Layout layoutProps={{ time: timeState, instrument: instrumentState, isFooterDisplayed: false}}>
      <div className="article">
          {isLoadingArticle ? <span>Loading...</span> :
          <Grid container spacing={10} className="article-grid">
              <Grid item xs={8} className='article-grid__left'>
                    <div className='article-grid__left--main'>
                        <div className="article-grid__left--main__subtitle">
                            <h4>{thisArticle.time_ago}</h4>
                        </div>
                        <div className="article-grid__left--main__title">
                            <h1>{thisArticle.title}</h1>
                        </div>
                        <div className="article-grid__left--main__sources">
                            <ArticleSourcesMenu reference={thisArticle.src_article} magazine={thisArticle.src_magazine}/>
                        </div>
                        <div className="article-grid__left--main__content">
                            {thisArticle.text.split('\r\n').map((paragraph, index) => {
                                return (
                                    <p key={index}>
                                        {paragraph}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
              </Grid>
              <Grid item xs={4} className='article-grid__right'>
                    <div className="article-grid__right--articleVerticalList">
                        { isLoadingArticles ? <span>Loading...</span> : <ArticleVerticalList fetchedArticles={fetchedArticles[0] ?? []}
                                                                                     numberOfArticles={fetchedArticles[0].length ?? 0} />}
                    </div>
              </Grid>
          </Grid>}
        <div className='article--goBackButton'>
          <Button onClick={() => navigate(`/${pageRedirect(thisArticle.time, instrumentState)}`)} variant="outlined">
              НАЗАД
          </Button>
        </div>
      </div>
    </Layout>
  );
};
