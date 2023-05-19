import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { Layout } from '../../../components/Layout/Layout';
import { useAppSelector } from '../../../hooks/redux'
import {CardVerticalList} from "../../../components/CardVerticalList/CardVerticalList";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import {getKeyByValue, pageRedirect} from "../../pageRedirect";
import {useGetExhibitById} from "../../../hooks/useGetExhibitById";
import {useFetchAllExhibits} from "../../../hooks/useFetchAllExhibits";


export const ExhibitPage = () => {
    const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);
    const navigate = useNavigate()
    const { time, id } = useParams()

    const { isLoadingExhibit, dataExhibit } = useGetExhibitById(+id, timeState)

    useEffect(() => {
        if (dataExhibit == undefined && !isLoadingExhibit) {
            navigate('/*')
        }
    }, [dataExhibit])

    const { isLoadingExhibits, fetchedExhibits } = useFetchAllExhibits(10, timeState, 10)
    console.log(fetchedExhibits)


    if (fetchedExhibits[0] != undefined) {
        const indexOfThisExhibit = fetchedExhibits[0].findIndex(exhibit => exhibit.id === +id)
        if (indexOfThisExhibit > -1) {
            fetchedExhibits[0].splice(indexOfThisExhibit, 1)
        }
    }

    return (
        <Layout layoutProps={{ time: timeState, instrument: instrumentState, isFooterDisplayed: false}}>
            <div className="exhibit">
                {isLoadingExhibit ? <span>Загрузка...</span> :
                    <Grid container spacing={1} className='grid'>
                        <Grid item xs={3.8} className='imageSourcesGrid'>
                            <div className='container'>
                                <div className='imageContainer'>
                                    <img className='image' src={dataExhibit?.image} alt='exhibit'/>
                                </div>
                                <div className='sourcesContainer'>
                                    <h5>Источник:</h5>
                                    <span className='sources'>{dataExhibit?.src_article}</span>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={5} className='middleGrid'>
                            <div className='container'>
                                <div className='title'>
                                    <h1>{dataExhibit?.title}</h1>
                                </div>
                                <div className='subtitle'>
                                    <h4>{dataExhibit?.time_ago}</h4>
                                </div>
                                <div className='content'>
                                    {
                                        dataExhibit?.text?.replace(/\r/g, '')?.split(/\n/g)?.map((paragraph, index) => {
                                            if (paragraph != '') {
                                                return (
                                                    <p key={index}>
                                                        {paragraph}
                                                    </p>
                                                )
                                            }
                                    })}
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3.2} className='cardVerticalListGrid'>
                            <div className="container">
                                { isLoadingExhibits ? <span>Загрузка...</span> :
                                    <CardVerticalList cards={fetchedExhibits[0] ?? []}
                                                      numberOfCards={fetchedExhibits[0]?.length ?? 0} />}
                            </div>
                        </Grid>
                    </Grid>}
                <div className='goBackButton'>
                    <Button onClick={() => navigate(`/${pageRedirect(dataExhibit?.time, instrumentState)}`)} variant="outlined">
                        НАЗАД
                    </Button>
                </div>
            </div>
        </Layout>
    );
};
