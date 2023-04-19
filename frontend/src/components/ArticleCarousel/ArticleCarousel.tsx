import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import Grid from '@mui/material/Grid';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import './ArticleCarousel.scss'
import {IArticle} from "../../types/models/IArticle";

// https://github.com/Learus/react-material-ui-carousel

export const ArticleCarousel: React.FC<{articleCards: IArticle[][]}> = ({ articleCards }) => {
  return (
    <>
      <Carousel
        className="article-carousel"
        NextIcon={<ArrowForwardIosRoundedIcon />}
        PrevIcon={<ArrowBackIosRoundedIcon />}
        autoPlay={false}
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={false}
        swipe={false}
        animation={"slide"}
        navButtonsWrapperProps={{
            style: {
                paddingTop: '10px',
            }
        }}
        navButtonsProps={{
          style: {
            background: 'none',
            border: 'none',
          },
        }}>
        {articleCards.map((articleCardsRow: IArticle[], indexI) => {
          return (
            <Grid
              sx={{ width: '100%', height: '572px', paddingRight: '75px', paddingLeft: '90px' }}
              container
              columns={3}
              spacing={2}
              key={indexI}>
              {articleCardsRow.map((cardProps: IArticle, indexJ) => {
                return (
                  <Grid item xs={1} key={indexJ}>
                    <ArticleCard
                      key={indexJ}
                      {...cardProps}
                    />
                  </Grid>
                );
              })}
            </Grid>
          );
        })}
      </Carousel>
    </>
  );
};
