import * as React from 'react';
import Carousel from 'react-material-ui-carousel';
import { ArticleCardProps } from '../../types/ArticleCardProps';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import Grid from '@mui/material/Grid';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';


export const ArticleCarousel = (props: { articleCards: ArticleCardProps[][]}) => {
    return (
        <div className='article-carousel'>
            <Carousel 
                NextIcon={<ArrowForwardIosRoundedIcon/>}
                PrevIcon={<ArrowBackIosRoundedIcon/>}
                next={ (next, active) => console.log(next, active) }
                prev={ (prev, active) => console.log(prev, active) }
                autoPlay={false}
            >
                {
                    props.articleCards.map((articleCardsRow: ArticleCardProps[], indexI) => {
                        return (
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} key={indexI}>
                                { articleCardsRow.map((cardProps, indexJ) => {
                                    return (
                                        <Grid item xs={2} sm={4} md={4} key={indexJ}>
                                            <ArticleCard key={indexJ} photoPath={cardProps.photoPath} title={cardProps.title}/>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}
