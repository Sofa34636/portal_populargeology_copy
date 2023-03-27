import * as React from 'react'
import { Layout } from '../../components/Layout/Layout'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'

export const ReliefPage = () => {

    const {time, instrument} = useAppSelector((state) => state.timeLineReducer);

    return (
        <div>
            <Layout
                layoutProps={{time: time, instrument: instrument}}
            />
        </div>
    )
}
