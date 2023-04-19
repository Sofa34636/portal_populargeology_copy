import React from 'react'
import {Layout} from "../Layout/Layout";
import {useAppSelector} from "../../hooks/redux";
import Grid from "@mui/material/Grid";
import scientificPublicationLeftImage from '../../assets/img/ScientificPublicationsLeft.png'
// import {
//     ArticleScientificPublicationsHierarchyMenu
// } from "../ArticleScientificPublicationsHierarchyMenu/ArticleScientificPublicationsHierarchyMenu";


// id = 0
export const ArticleScientificPublications = () => {
    const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);

    return(
        <Layout layoutProps={{time: timeState, instrument: instrumentState, isFooterDisplayed: false}}>
            <div className='scientific_publications'>
                <Grid className="scientific_publications__parent" container spacing={0}>
                    <Grid className="scientific_publications__parent--leftContainer" item xs={4}>
                        <img src={scientificPublicationLeftImage} alt='leftImage'/>
                    </Grid>
                    <Grid className="scientific_publications__parent--rightContainer" item xs={8}>
                        <div className='scientific_publications__parent--rightContainer-subTitle'>
                            <h4>Стратиграфическая шкала.</h4>
                        </div>
                        <div className='scientific_publications__parent--rightContainer-title'>
                            <h1>Доступны Публикации по периодам:</h1>
                        </div>
                        {/*<div className='scientific_publications__parent--rightContainer-menu'>*/}
                        {/*    <ArticleScientificPublicationsHierarchyMenu />*/}
                        {/*</div>*/}
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}