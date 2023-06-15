import React from 'react'
import { useNavigate } from 'react-router-dom'
import {IArticle} from "../../types/models/IArticle";
import { pageRedirect } from '../../pages/pageRedirect'
import { useAppSelector } from '../../hooks/redux'
import {ScientificPublicationsProps} from "../../types/scientificPublications";
import {IExhibit} from "../../types/models/IExhibit";
import {ILocation} from "../../types/models/ILocation";
import {IReconstruction} from "../../types/models/IReconstruction";

export const CardPreview: React.FC<IArticle | ScientificPublicationsProps | IExhibit | ILocation | IReconstruction> = (card) => {
    const navigate = useNavigate()
    const {time: time, instrument: instrument } = useAppSelector((state) => state.timeLineReducer);

    const handleClick = () => {
        if ('location' in card) {
            navigate(`/${pageRedirect(time, instrument)}/${card?.location}/${card?.id}`)
        } else {
            navigate(`/${pageRedirect(time, instrument)}/${card?.id}`)
        }
    }

    return(
        <div className='card_preview' onClick={handleClick}>
            <img className='photo' src={card?.image} alt="card" />
            <div className='title'>{card?.title}</div>
        </div>
    )
}
