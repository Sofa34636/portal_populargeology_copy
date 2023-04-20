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

export const Article = () => {
  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);
  const navigate = useNavigate()
  const { id } = useParams()

  // Check for valid article ID
  if (isNaN(+id) || +id < 0) {
      navigate('/*')
  }

  const {isLoading, fetchedArticles } = useFetchAllArticlesGroupByHook(10, 10, timeState)
  const dataArticle = useGetArticleByIdQuery(+id)

  // Placeholder article
  let thisArticle: IArticle = {
      id: 9999999,
      title: 'undefined',
      time_ago: 'undefined',
      image: 'undefined',
      text: 'undefined',
      src_article: 'undefined',
      src_magazine: 'undefined',
  }
  if (dataArticle['data'] != undefined) {
      thisArticle = dataArticle['data']
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
        <div className='article--main'>
            <div className="article--main__subtitle">
                <h4>{thisArticle.time_ago}</h4>
            </div>
            <div className="article--main__title">
                <h1>{thisArticle.title}</h1>
            </div>
            <div className="article--main__sources">
                <ArticleSourcesMenu reference={thisArticle.src_article} magazine={thisArticle.src_magazine}/>
            </div>
            <div className="article--main__content">
                {thisArticle.text}
            </div>
        </div>
        <div className="article--articleVerticalList">
            { isLoading ? <span>Loading...</span> : <ArticleVerticalList fetchedArticles={fetchedArticles[0] ?? []}
                                                                         numberOfArticles={fetchedArticles[0].length ?? 0} />}
        </div>
        <div className='article--goBackButton'>
          <Button onClick={() => navigate('/article')} variant="outlined">
              НАЗАД
          </Button>
        </div>
      </div>
    </Layout>
  );
};
