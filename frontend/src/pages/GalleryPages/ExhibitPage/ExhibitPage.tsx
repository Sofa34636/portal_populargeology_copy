import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { Layout } from '../../../components/Layout/Layout';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux'
import { CardVerticalList } from "../../../components/CardVerticalList/CardVerticalList";
import { useGetExhibitById } from "../../../hooks/useGetExhibitById";
import { useFetchAllExhibits } from "../../../hooks/useFetchAllExhibits";
import { cardVerticalListResponsiveStyle } from "../../../utils/cardVerticalListResponsiveStyle";
import {timeLineSlice} from "../../../store/reducers/timeLineSlice";
import {instrumentTypes, timeTypes} from "../../../types/timeline";


export const ExhibitPage = () => {
    const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);
    const navigate = useNavigate()
    const { time: timeParam, id } = useParams()
    const [contentSize, setContentSize] =
        useState<{width: number, height: number} | null>(null)
    const [verticalListResponsiveStyle, setVerticalListResponsiveStyle] =
        useState<{verticalListWidth: number, verticalListItemSize: number}>({verticalListWidth: 330,
                                                                                      verticalListItemSize: 80})
    const { isLoadingExhibit, dataExhibit } = useGetExhibitById(+id, timeState)
    const { changeTime, changeInstrument } = timeLineSlice.actions;
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (dataExhibit == undefined && !isLoadingExhibit) {
            navigate('/*')
        }

        dispatch(changeTime(timeTypes[timeParam]))
        dispatch(changeInstrument(instrumentTypes.exhibits))


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

    }, [dataExhibit])


    const { isLoadingExhibits, fetchedExhibits } = useFetchAllExhibits(10, timeState, 10)


    if (fetchedExhibits[0] != undefined) {
        const indexOfThisExhibit = fetchedExhibits[0].findIndex(exhibit => exhibit.id === +id)
        if (indexOfThisExhibit > -1) {
            fetchedExhibits[0].splice(indexOfThisExhibit, 1)
        }
    }


    return (
        <Layout time={timeState} instrument={instrumentState} footerDisplayStyle={'back'} headerDisplayStyle={'default'}>
            <div className="exhibit">
                {isLoadingExhibit ? <span>Загрузка...</span> :
                    <div className='mainContainer'>
                        <div className='leftContainer' style={{maxHeight: isNaN(contentSize?.height) || contentSize?.width <= 830 ?
                                                                          '80vh' :
                                                                          contentSize?.height}}>
                            <div className='imageContainer'>
                                <img className='image' src={dataExhibit?.image} alt='exhibit'/>
                            </div>
                            <div className='content'>
                                <div className='exhibitTitle'>
                                    <h1 title={dataExhibit?.title}>{dataExhibit?.title}</h1>
                                </div>
                                <div className='subtitle'>
                                    <h4>{dataExhibit?.time_ago}</h4>
                                </div>
                                {
                                    dataExhibit?.text?.replace(/\r/g, '')?.split(/\n/g)?.map((paragraph, index) => {
                                        if (paragraph != '') {
                                            return (
                                                <p key={index} dangerouslySetInnerHTML={{__html: paragraph}} />
                                            )
                                        }
                                    })
                                }
                                <div className='sourcesContainer'>
                                    <h5>Источник:</h5>
                                    <span className='sources' dangerouslySetInnerHTML={{__html: dataExhibit?.src_article}}></span>
                                </div>
                            </div>
                        </div>
                        {
                            isLoadingExhibits ?
                                <div>Загрузка...</div> :
                                    fetchedExhibits[0]?.length != 0 ?
                                        <div className='cardVerticalListContainer'>
                                            <CardVerticalList cards={fetchedExhibits[0] ?? []}
                                                              numberOfCards={fetchedExhibits[0]?.length ?? 0}
                                                              height={isNaN(contentSize?.height) || contentSize?.width <= 830 ?
                                                                  560 :
                                                                  contentSize?.height}
                                                              width={verticalListResponsiveStyle.verticalListWidth}
                                                              itemSize={verticalListResponsiveStyle.verticalListItemSize}/>
                                        </div> :
                                            <></>
                        }
                    </div>}
            </div>
        </Layout>
    );
};
