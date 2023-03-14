import * as React from 'react';
import Carousel from 'react-material-ui-carousel';
import { ArticleCardProps } from '../../types/ArticleCardProps';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import Grid from '@mui/material/Grid';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';


export const ArticleCarousel = (props: { articleCards: ArticleCardProps[][]}) => {
    return (
        <div>
            <Carousel
                className='article-carousel'
                NextIcon={<ArrowForwardIosRoundedIcon/>}
                PrevIcon={<ArrowBackIosRoundedIcon/>}
                autoPlay={false}
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={false}
                swipe={false}
                navButtonsProps={{
                    style: {
                        background: 'none',
                        border: 'none',
                    }
                }}
            >
                {
                    props.articleCards.map((articleCardsRow: ArticleCardProps[], indexI) => {
                        return (
                            <Grid sx={{ width: '100%', paddingRight: '75px', paddingLeft: '90px' }} container columns={3} spacing={2} key={indexI}>
                                { articleCardsRow.map((cardProps, indexJ) => {
                                    return (
                                        <Grid item xs={1} key={indexJ}>
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
