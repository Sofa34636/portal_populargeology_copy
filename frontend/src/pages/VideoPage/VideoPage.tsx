import * as React from 'react'
import { Layout } from '../../components/Layout/Layout'
import { useLocation } from 'react-router-dom'

export const VideoPage = () => {
    // const location = useLocation()
    // const { from } = location.state
    return (
        <div>
            <Layout 
                time={'awdawd'}
                instrument='ВИДЕО'
            />
        </div>
    )
}