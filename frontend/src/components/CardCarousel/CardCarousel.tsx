import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { CardPreview } from '../CardPreview/CardPreview';
import Grid from '@mui/material/Grid';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import './CardCarousel.scss'
import {IArticle} from "../../types/models/IArticle";
import {ScientificPublicationsProps} from "../../types/scientificPublications";
import {IExhibit} from "../../types/models/IExhibit";

// https://github.com/Learus/react-material-ui-carousel

export const CardCarousel: React.FC<{cards: (IArticle | ScientificPublicationsProps)[][] | IExhibit[][]}> = ({ cards }) => {
  return (
    <>
      <Carousel
        className="card-carousel"
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
        {cards.map((cardsRow: (IArticle | ScientificPublicationsProps)[] | IExhibit[], indexI) => {
          return (
            <Grid
              sx={{ width: '100%', height: '572px', paddingRight: '75px', paddingLeft: '90px' }}
              container
              columns={3}
              spacing={2}
              key={indexI}>
              {cardsRow.map((cardProps: (IArticle | ScientificPublicationsProps) | IExhibit, indexJ) => {
                return (
                  <Grid item xs={1} key={indexJ}>
                    <CardPreview
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
