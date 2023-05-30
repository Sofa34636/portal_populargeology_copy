import React, {useEffect, useState} from 'react'
import Carousel from 'react-material-ui-carousel';
import { CardPreview } from '../CardPreview/CardPreview';
import Grid from '@mui/material/Grid';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import {IArticle} from "../../types/models/IArticle";
import {ScientificPublicationsProps} from "../../types/scientificPublications";
import {IExhibit} from "../../types/models/IExhibit";

import "./CardCarousel.scss"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

// https://github.com/Learus/react-material-ui-carousel


function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e) => void
}) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
      props.left ?
      <ArrowBackIosRoundedIcon onClick={props.onClick}
                               className={`arrow arrow--left ${disabled}`}
                               sx={{color: 'white', fontSize: 'xx-large'}}/> :
      <ArrowForwardIosRoundedIcon onClick={props.onClick}
                               className={`arrow arrow--right ${disabled}`}
                               sx={{color: 'white', fontSize: 'xx-large'}}/>
  )
}

export const CardCarousel: React.FC<{cards: (IArticle | ScientificPublicationsProps)[][] | IExhibit[][]}> = ({ cards }) => {


    const [currentSlide, setCurrentSlide] = React.useState(0)
      const [loaded, setLoaded] = useState(false)
      const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
      initial: 0,
      slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
      created() {
      setLoaded(true)
    },
    })
      return (
      <>
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider card-carousel">
              {cards?.map((cardsRow, indexI) => {
                  return (
                      <div key={indexI} className='keen-slider__slide cardsContainer'>
                          {cardsRow?.map((cardProps, indexJ) => {
                              return (
                                  <CardPreview key={cardProps?.id} {...cardProps} />
                              )
                          })}
                      </div>
                  )
              })}
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details?.slides?.length - 1
                }
              />
            </>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details?.slides?.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              )
            })}
          </div>
        )}
      </>
      )
};
