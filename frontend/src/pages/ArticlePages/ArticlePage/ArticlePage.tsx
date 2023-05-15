import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { Layout } from '../../../components/Layout/Layout';
import { ArticleSourcesMenu } from '../../../components/ToolComponents/Article/ArticleSourcesMenu/ArticleSourcesMenu'
import { useAppSelector } from '../../../hooks/redux'
import {CardVerticalList} from "../../../components/CardVerticalList/CardVerticalList";
import Button from "@mui/material/Button";
import { useFetchAllArticles } from "../../../hooks/useFetchAllArticles";
import Grid from '@mui/material/Grid';
import {getKeyByValue, pageRedirect} from "../../pageRedirect";
import {useGetArticleById} from "../../../hooks/useGetArticleById";


export const ArticlePage = () => {
  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);
  const navigate = useNavigate()
  const { time, id } = useParams()

  const { isLoadingArticle, dataArticle } = useGetArticleById(+id, timeState)

  useEffect(() => {
        if (dataArticle == undefined && !isLoadingArticle) {
            navigate('/*')
        }
  }, [dataArticle])

  const { isLoadingArticles, fetchedArticles } = useFetchAllArticles(10, timeState, 10)


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
                    <div className="article-grid__right--cardVerticalList">
                        { isLoadingArticles ? <span>Loading...</span> :
                            <CardVerticalList cards={fetchedArticles[0] ?? []}
                                              numberOfCards={fetchedArticles[0]?.length ?? 0} />}
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
