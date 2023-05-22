import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { Layout } from '../../../components/Layout/Layout';
import { ArticleSourcesMenu } from '../../../components/ToolComponents/Article/ArticleSourcesMenu/ArticleSourcesMenu'
import { useAppSelector } from '../../../hooks/redux'
import {CardVerticalList} from "../../../components/CardVerticalList/CardVerticalList";
import { useFetchAllArticles } from "../../../hooks/useFetchAllArticles";
import Grid from '@mui/material/Grid';
import {useGetArticleById} from "../../../hooks/useGetArticleById";
import './ArticlePage.scss'

export const ArticlePage = () => {
  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);
  const navigate = useNavigate()
  const { id } = useParams()

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
    <Layout time={timeState} instrument={instrumentState} headerDisplayStyle={'default'} footerDisplayStyle={'back'}>
        <div className="article">
            <div className="leftContainer">
                <div className="subtitle">
                    <h4>{dataArticle?.time_ago}</h4>
                </div>
                <div className="title">
                    <h1>{dataArticle?.title}</h1>
                </div>
                <div className="sources">
                    <ArticleSourcesMenu reference={dataArticle?.src_article} magazine={dataArticle?.src_magazine}/>
                </div>
                <div className="content">
                    {dataArticle?.text?.replace(/\r/g, '')?.split(/\n/)?.map((paragraph, index) => {
                        return (
                            <p key={index}>
                                {paragraph}
                            </p>
                        )
                    })}
                </div>
            </div>
            <div className="rightContainer">
                { isLoadingArticles ? <span>Загрузка...</span> :
                    <CardVerticalList cards={fetchedArticles[0] ?? []}
                                      numberOfCards={fetchedArticles[0]?.length ?? 0}
                                      height={660}
                                      width={360}/>
                }
            </div>
        </div>
      {/*<Grid className="article" container spacing={0}>*/}
      {/*  <Grid className="leftContainer" item xs={9}>*/}
      {/*      <div className="subtitle">*/}
      {/*          <h4>{dataArticle?.time_ago}</h4>*/}
      {/*      </div>*/}
      {/*      <div className="title">*/}
      {/*          <h1>{dataArticle?.title}</h1>*/}
      {/*      </div>*/}
      {/*      <div className="sources">*/}
      {/*          <ArticleSourcesMenu reference={dataArticle?.src_article} magazine={dataArticle?.src_magazine}/>*/}
      {/*      </div>*/}
      {/*      <div className="content">*/}
      {/*          {dataArticle?.text?.replace(/\r/g, '')?.split(/\n/)?.map((paragraph, index) => {*/}
      {/*              return (*/}
      {/*                  <p key={index}>*/}
      {/*                      {paragraph}*/}
      {/*                  </p>*/}
      {/*              )*/}
      {/*          })}*/}
      {/*      </div>*/}
      {/*  </Grid>*/}
      {/*  <Grid className="rightContainer" item xs={3}>*/}
      {/*       { isLoadingArticles ? <span>Загрузка...</span> :*/}
      {/*          <CardVerticalList cards={fetchedArticles[0] ?? []}*/}
      {/*                            numberOfCards={fetchedArticles[0]?.length ?? 0} />*/}
      {/*       }*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}
    </Layout>
  );
};
