import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { ArticleCardProps } from '../../types/ArticleCardProps';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

export const ArticleCarousel = (props: { articleCards: ArticleCardProps[][] }) => {
  return (
    <div>
      <Carousel
        NextIcon={<ArrowForwardIosRoundedIcon />}
        PrevIcon={<ArrowBackIosRoundedIcon />}
        next={(next, active) => console.log(next, active)}
        prev={(prev, active) => console.log(prev, active)}>
        {props.articleCards.map((articleCardsRow: ArticleCardProps[]) => {
          return articleCardsRow.map((cardProps, index) => {
            return (
              <ArticleCard key={index} photoPath={cardProps.photoPath} title={cardProps.title} />
            );
          });
        })}
      </Carousel>
    </div>
  );
};
