import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { Layout } from '../../../components/Layout/Layout';
import { useAppSelector } from '../../../hooks/redux'
import { CardVerticalList } from "../../../components/CardVerticalList/CardVerticalList";
import { useGetExhibitById } from "../../../hooks/useGetExhibitById";
import { useFetchAllExhibits } from "../../../hooks/useFetchAllExhibits";

const cardVerticalListAdaptiveStyle = (width: number) => {
    if (width <= 471) {
        return {verticalListWidth: 220, verticalListItemSize: 215}
    }
    if (width > 471 && width <= 670) {
        return {verticalListWidth: 335, verticalListItemSize: 280}
    } else if (width > 670 && width <= 830) {
        return {verticalListWidth: 335, verticalListItemSize: 280}
    } else if (width > 831 && width <= 991) {
        return {verticalListWidth: 190, verticalListItemSize: 200}
    } else if (width > 991 && width <= 1199) {
        return {verticalListWidth: 270, verticalListItemSize: 240}
    } else if (width > 1199 && width <= 1299) {
        return {verticalListWidth: 270, verticalListItemSize: 240}
    } else {
        return {verticalListWidth: 335, verticalListItemSize: 280}
    }
}


export const ExhibitPage = () => {
    const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);
    const navigate = useNavigate()
    const { id } = useParams()
    const [contentSize, setContentSize] =
        useState<{width: number, height: number} | null>(null)
    const [verticalListAdaptiveStyle, setVerticalListAdaptiveStyle] =
        useState<{verticalListWidth: number, verticalListItemSize: number}>({verticalListWidth: 330,
                                                                                      verticalListItemSize: 80})
    const { isLoadingExhibit, dataExhibit } = useGetExhibitById(+id, timeState)

    useEffect(() => {
        if (dataExhibit == undefined && !isLoadingExhibit) {
            navigate('/*')
        }
        const contentContainer = document.querySelector('.content')
        setContentSize({width: contentContainer?.clientWidth, height: contentContainer?.clientHeight})
        setVerticalListAdaptiveStyle(cardVerticalListAdaptiveStyle(window.innerWidth))


        const handleContentResize = () => {
            setContentSize({width: contentContainer?.clientWidth, height: contentContainer?.clientHeight})
            setVerticalListAdaptiveStyle(cardVerticalListAdaptiveStyle(window.innerWidth))
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
                                                                          660 :
                                                                          contentSize?.height}}>
                            <div className='imageContainer'>
                                <img className='image' src={dataExhibit?.image} alt='exhibit'/>
                            </div>
                            <div className='content'>
                                <div className='exhibitTitle'>
                                    <h1>{dataExhibit?.title}</h1>
                                </div>
                                <div className='subtitle'>
                                    <h4>{dataExhibit?.time_ago}</h4>
                                </div>
                                {
                                    dataExhibit?.text?.replace(/\r/g, '')?.split(/\n/g)?.map((paragraph, index) => {
                                        if (paragraph != '') {
                                            // console.log(contentSize)
                                            return (
                                                <p key={index}>
                                                    {paragraph}
                                                </p>
                                            )
                                        }
                                    })
                                }
                                <div className='sourcesContainer'>
                                    <h5>Источник:</h5>
                                    <span className='sources'>{dataExhibit?.src_article}</span>
                                </div>
                            </div>
                        </div>
                        <div className='cardVerticalListContainer'>
                            { isLoadingExhibits ? <span>Загрузка...</span> :
                                <CardVerticalList cards={fetchedExhibits[0] ?? []}
                                                  numberOfCards={fetchedExhibits[0]?.length ?? 0}
                                                  height={isNaN(contentSize?.height) || contentSize?.width <= 830 ?
                                                      660 :
                                                      contentSize?.height}
                                                  width={verticalListAdaptiveStyle.verticalListWidth}
                                                  itemSize={verticalListAdaptiveStyle.verticalListItemSize}/>}
                        </div>
                    </div>}
            </div>
        </Layout>
    );
};
