import React, {useEffect, useState} from 'react'
import { CardPreview } from '../CardPreview/CardPreview';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import {IArticle} from "../../types/models/IArticle";
import {ScientificPublicationsProps} from "../../types/scientificPublications";
import {IExhibit} from "../../types/models/IExhibit";

import "./CardCarousel.scss"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import {useLocation} from "react-router-dom";

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

    const location = useLocation()
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [options, setOptions] = useState({
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      }})

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(options)
    useEffect(() => {
        instanceRef?.current?.track?.init(0)
        instanceRef?.current?.update(options, 0)
        setCurrentSlide(0)
    }, [location.pathname])
      return (
      <>
        <div className="navigation-wrapper">
            <div className='arrow--left__container'>
                {loaded && instanceRef.current && (
                    <Arrow
                        left
                        onClick={(e) =>
                        {
                            e.stopPropagation() || instanceRef.current?.prev()
                            // console.log(instanceRef?.current?.container?.children)
                        }
                        }
                        disabled={currentSlide === 0}
                    />
                )}
            </div>
            <div ref={sliderRef} className="keen-slider card-carousel">
              {cards?.map((cardsRow, indexI) => {
                  return (
                      <div key={cardsRow[0]?.id} className='keen-slider__slide cardsContainer'>
                          {cardsRow?.map((cardProps, indexJ) => {
                              return (
                                  <CardPreview key={cardProps?.id} {...cardProps} />
                              )
                          })}
                      </div>
                  )
              })}
            </div>
            <div className='arrow--right__container'>
            {loaded && instanceRef.current && (
              <Arrow
                onClick={(e) =>
                  {
                    e.stopPropagation() || instanceRef.current?.next()
                    // console.log(instanceRef?.current?.container?.children)
                  }
                }
                disabled={
                    currentSlide ===
                    cards?.length - 1
                }
              />
            )}
            </div>
        </div>
        {/*{loaded && instanceRef.current && (*/}
        {/*  <div className="dots">*/}
        {/*    {[*/}
        {/*      ...Array(instanceRef.current.track.details?.slides?.length).keys(),*/}
        {/*    ].map((idx) => {*/}
        {/*      return (*/}
        {/*        <button*/}
        {/*          key={idx}*/}
        {/*          onClick={() => {*/}
        {/*            instanceRef.current?.moveToIdx(idx)*/}
        {/*          }}*/}
        {/*          className={"dot" + (currentSlide === idx ? " active" : "")}*/}
        {/*        ></button>*/}
        {/*      )*/}
        {/*    })}*/}
        {/*  </div>*/}
        {/*)}*/}
      </>
      )
};
