import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { Layout } from '../../../components/Layout/Layout';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux'
import { CardVerticalList } from "../../../components/CardVerticalList/CardVerticalList";
import { cardVerticalListResponsiveStyle } from "../../../utils/cardVerticalListResponsiveStyle";
import {timeLineSlice} from "../../../store/reducers/timeLineSlice";
import {instrumentTypes, timeTypes} from "../../../types/timeline";
import {useGetReconstructionById} from "../../../hooks/useFetchReconstructionById";
import {useFetchAllReconstructions} from "../../../hooks/useFetchAllReconstructions";


export const ReconstructionPage = () => {
    const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);
    const navigate = useNavigate()
    const { time: timeParam, locationId, id } = useParams()
    const [contentSize, setContentSize] =
        useState<{width: number, height: number} | null>(null)
    const [verticalListResponsiveStyle, setVerticalListResponsiveStyle] =
        useState<{verticalListWidth: number, verticalListItemSize: number}>({verticalListWidth: 330,
            verticalListItemSize: 80})
    const { isLoadingReconstruction, dataReconstruction } = useGetReconstructionById(+id, +locationId)
    const { changeTime, changeInstrument } = timeLineSlice.actions;
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (dataReconstruction == undefined && !isLoadingReconstruction) {
            navigate('/*')
        }

        dispatch(changeTime(timeTypes[timeParam]))
        dispatch(changeInstrument(instrumentTypes.reconstruction))


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

    }, [dataReconstruction])


    const { isLoadingReconstructions, fetchedReconstructions } = useFetchAllReconstructions(10, +locationId, 10)


    if (fetchedReconstructions[0] != undefined) {
        const indexOfThisExhibit = fetchedReconstructions[0].findIndex(exhibit => exhibit.id === +id)
        if (indexOfThisExhibit > -1) {
            fetchedReconstructions[0].splice(indexOfThisExhibit, 1)
        }
    }


    return (
        <Layout time={timeState} instrument={instrumentState} footerDisplayStyle={'back'} headerDisplayStyle={'default'}>
            <div className="reconstruction">
                {isLoadingReconstructions ? <span>Загрузка...</span> :
                    <div className='mainContainer'>
                        <div className='leftContainer' style={{maxHeight: isNaN(contentSize?.height) || contentSize?.width <= 830 ?
                                '80vh' :
                                contentSize?.height}}>
                            <div className='imageContainer'>
                                <img className='image' src={dataReconstruction?.image} alt='exhibit'/>
                            </div>
                            <div className='content'>
                                <div className='reconstructionTitle'>
                                    <h1>{dataReconstruction?.title}</h1>
                                </div>
                                <div className='subtitle'>
                                    <h4>{dataReconstruction?.time_ago}</h4>
                                </div>
                                <div className='position'>
                                    <h5>{dataReconstruction?.position}</h5>
                                    <h5>{dataReconstruction?.coordinates}</h5>
                                </div>
                                {
                                    dataReconstruction?.text?.replace(/\r/g, '')?.split(/\n/g)?.map((paragraph, index) => {
                                        if (paragraph != '') {
                                            return (
                                                <p key={index} dangerouslySetInnerHTML={{__html: paragraph}} />
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                        {
                            isLoadingReconstructions ?
                                <div>Загрузка...</div> :
                                fetchedReconstructions[0]?.length != 0 ?
                                    <div className='cardVerticalListContainer'>
                                        <CardVerticalList cards={fetchedReconstructions[0] ?? []}
                                                          numberOfCards={fetchedReconstructions[0]?.length ?? 0}
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
