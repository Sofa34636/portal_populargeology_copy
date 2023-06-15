import React, {useEffect} from 'react'
import { Layout } from '../../../components/Layout/Layout';
import { CardCarousel } from '../../../components/CardCarousel/CardCarousel';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux'
import {instrumentTypes, timeTypes} from "../../../types/timeline";
import {useParams} from "react-router-dom";
import {timeLineSlice} from "../../../store/reducers/timeLineSlice";
import {useFetchAllReconstructions} from "../../../hooks/useFetchAllReconstructions";
import { useGetLocationById } from "../../../hooks/useGetLocationById"


export const ReconstructionListPage = () => {

    const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);

    const { time: timeParam, locationId} = useParams()
    const { changeTime, changeInstrument } = timeLineSlice.actions;
    const dispatch = useAppDispatch()

    const {dataLocation: locationName} = useGetLocationById(+locationId)

    const { isLoadingReconstructions, fetchedReconstructions } = useFetchAllReconstructions(6, +locationId)

    useEffect(() => {
        dispatch(changeTime(timeTypes[timeParam]))
        dispatch(changeInstrument(instrumentTypes.reconstruction))
    }, [])

    return (
        <Layout time={timeState} instrument={instrumentState} footerDisplayStyle={'default'} headerDisplayStyle={'default'} breadCrumbsFirstCrumb={locationName?.title}>
            <div className='reconstruction_list__content'>
                {isLoadingReconstructions ? <span>Загрузка...</span> :
                    fetchedReconstructions?.length == 0 ? <span>Нет реконструкций</span> :
                        <CardCarousel cards={fetchedReconstructions}/>
                }
            </div>
        </Layout>
    );
};
