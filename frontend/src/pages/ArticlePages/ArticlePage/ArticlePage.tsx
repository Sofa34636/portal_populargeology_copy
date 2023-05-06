import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { Layout } from '../../../components/Layout/Layout';
import { ArticleSourcesMenu } from '../../../components/ToolComponents/Article/ArticleSourcesMenu/ArticleSourcesMenu'
import { useAppSelector } from '../../../hooks/redux'
import {ArticleVerticalList} from "../../../components/ToolComponents/Article/ArticleVerticalList/ArticleVerticalList";
import Button from "@mui/material/Button";
import { useFetchAllArticlesHook } from "../../../hooks/useFetchAllArticlesHook";
import Grid from '@mui/material/Grid';
import {getKeyByValue, pageRedirect} from "../../pageRedirect";
import {useGetArticleByIdHook} from "../../../hooks/useGetArticleByIdHook";


export const ArticlePage = () => {
  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);
  const navigate = useNavigate()
  const { time, id } = useParams()

  const { isLoadingArticle, dataArticle } = useGetArticleByIdHook(+id, timeState)

  useEffect(() => {
        if (dataArticle == undefined && !isLoadingArticle) {
            navigate('/*')
        }
  }, [dataArticle])

  const { isLoadingArticles, fetchedArticles } = useFetchAllArticlesHook(10, timeState, 10)


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
                            <h4>{dataArticle?.time_ago}</h4>
                        </div>
                        <div className="article-grid__left--main__title">
                            <h1>{dataArticle?.title}</h1>
                        </div>
                        <div className="article-grid__left--main__sources">
                            <ArticleSourcesMenu reference={dataArticle?.src_article} magazine={dataArticle?.src_magazine}/>
                        </div>
                        <div className="article-grid__left--main__content">
                            {dataArticle?.text.split('\r\n').map((paragraph, index) => {
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
          <Button onClick={() => navigate(`/${pageRedirect(dataArticle?.time, instrumentState)}`)} variant="outlined">
              НАЗАД
          </Button>
        </div>
      </div>
    </Layout>
  );
};
