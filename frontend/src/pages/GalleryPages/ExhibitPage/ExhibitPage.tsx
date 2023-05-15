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


    if (fetchedExhibits[0] != undefined) {
        const indexOfThisExhibit = fetchedExhibits[0].findIndex(exhibit => exhibit.id === +id)
        if (indexOfThisExhibit > -1) {
            fetchedExhibits[0].splice(indexOfThisExhibit, 1)
        }
    }

    return (
        <Layout layoutProps={{ time: timeState, instrument: instrumentState, isFooterDisplayed: false}}>
            <div className="exhibit">
                {isLoadingExhibit ? <span>Loading...</span> :
                    <Grid container spacing={10} className="exhibit-grid">
                        <Grid item xs={8} className='exhibit-grid__left'>
                            <div className='exhibit-grid__left--main'>
                                <img className='exhibit-grid__left--main__image' src={dataExhibit?.image} alt='exhibit'/>
                                <div className="exhibit-grid__left--main__title">
                                    <h1>{dataExhibit?.title}</h1>
                                </div>
                                <div className="exhibit-grid__left--main__subtitle">
                                    <h4>{dataExhibit?.time_ago}</h4>
                                </div>
                                <div className="exhibit-grid__left--main__sources">
                                    {dataExhibit?.src_article}
                                </div>
                                <div className="article-grid__left--main__content">
                                    {dataExhibit?.text.split('\r\n').map((paragraph, index) => {
                                        return (
                                            <p key={index}>
                                                {paragraph}
                                            </p>
                                        )
                                    })}
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4} className='exhibit-grid__right'>
                            <div className="exhibit-grid__right--cardVerticalList">
                                { isLoadingExhibits ? <span>Loading...</span> :
                                    <CardVerticalList cards={fetchedExhibits[0] ?? []}
                                                      numberOfCards={fetchedExhibits[0]?.length ?? 0} />}
                            </div>
                        </Grid>
                    </Grid>}
                <div className='exhibit--goBackButton'>
                    <Button onClick={() => navigate(`/${pageRedirect(dataExhibit?.time, instrumentState)}`)} variant="outlined">
                        НАЗАД
                    </Button>
                </div>
            </div>
        </Layout>
    );
};
