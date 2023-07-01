import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { Layout } from '../../../components/Layout/Layout';
import { ArticleSourcesMenu } from '../../../components/ToolComponents/Article/ArticleSourcesMenu/ArticleSourcesMenu'
import {useAppDispatch, useAppSelector} from '../../../hooks/redux'
import {CardVerticalList} from "../../../components/CardVerticalList/CardVerticalList";
import { useFetchAllArticles } from "../../../hooks/useFetchAllArticles";
import {useGetArticleById} from "../../../hooks/useGetArticleById";
import {cardVerticalListResponsiveStyle} from "../../../utils/cardVerticalListResponsiveStyle";
import {timeLineSlice} from "../../../store/reducers/timeLineSlice";
import {instrumentTypes, timeTypes} from "../../../types/timeline";

export const ArticlePage = () => {
  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);
  const navigate = useNavigate()
  const { time: timeParam, id } = useParams()
    const [contentSize, setContentSize] =
        useState<{width: number, height: number} | null>(null)
    const [verticalListResponsiveStyle, setVerticalListResponsiveStyle] =
        useState<{verticalListWidth: number, verticalListItemSize: number}>({verticalListWidth: 330,
            verticalListItemSize: 280})

    const { changeTime, changeInstrument } = timeLineSlice.actions;
    const dispatch = useAppDispatch()

  const { isLoadingArticle, dataArticle } = useGetArticleById(+id, timeState)

  useEffect(() => {
      if (dataArticle == undefined && !isLoadingArticle) {
        navigate('/*')
      }

      dispatch(changeTime(timeTypes[timeParam]))
      dispatch(changeInstrument(instrumentTypes.articles))
  }, [dataArticle])
    useEffect(() => {
        const contentContainer = document.querySelector('.content')
        setContentSize({width: contentContainer?.clientWidth, height: contentContainer?.clientHeight})
        setVerticalListResponsiveStyle(cardVerticalListResponsiveStyle(window.innerWidth))


        const handleContentResize = () => {
            setContentSize({width: contentContainer?.clientWidth, height: contentContainer?.clientHeight})
            setVerticalListResponsiveStyle(cardVerticalListResponsiveStyle(window.innerWidth))
        }
        window.addEventListener('resize', handleContentResize)

        return () => {
            window?.removeEventListener('resize', handleContentResize)
        }
    }, [])

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
                    <h1 title={dataArticle?.title}>{dataArticle?.title}</h1>
                </div>
                <div className="sources">
                    <ArticleSourcesMenu reference={dataArticle?.src_article} magazine={dataArticle?.src_magazine}/>
                </div>
                <div className="content" style={{maxHeight: isNaN(contentSize?.height) || contentSize?.width <= 830 ?
                                                            '80vh' :
                                                            contentSize?.height}}>
                    {dataArticle?.text?.replace(/\r/g, '')?.split(/\n/)?.map((paragraph, index) => {
                        return (
                            <p key={index} dangerouslySetInnerHTML={{__html: paragraph}} />
                        )
                    })}
                </div>
            </div>
            <div className="rightContainer">
                {
                    isLoadingArticles ?
                        <div>Загрузка...</div> :
                        fetchedArticles[0]?.length != 0 ?
                            <div className='cardVerticalListContainer'>
                                <CardVerticalList cards={fetchedArticles[0] ?? []}
                                                  numberOfCards={fetchedArticles[0]?.length ?? 0}
                                                  height={isNaN(contentSize?.height) || contentSize?.width <= 830 ?
                                                      560 :
                                                      contentSize?.height}
                                                  width={verticalListResponsiveStyle.verticalListWidth}
                                                  itemSize={verticalListResponsiveStyle.verticalListItemSize}/>
                            </div> :
                            <></>
                }
            </div>
        </div>
    </Layout>
  );
};
