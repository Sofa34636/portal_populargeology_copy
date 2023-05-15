import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {IArticle} from "../../types/models/IArticle";
import { pageRedirect } from '../../pages/pageRedirect'
import { useAppSelector } from '../../hooks/redux'
import {ScientificPublicationsProps} from "../../types/scientificPublications";
import {IExhibit} from "../../types/models/IExhibit";

export const CardPreview: React.FC<IArticle | ScientificPublicationsProps | IExhibit> = (card) => {
    const navigate = useNavigate()
    const {time: time, instrument: instrument } = useAppSelector((state) => state.timeLineReducer);

    const handleClick = () => {
        navigate(`/${pageRedirect(time,instrument)}/${card?.id}`)
    }

    return(
        <div className='article_card' onClick={handleClick}>
            <img className='photo' src={card?.image} alt="article" />
            <div className='title'>{card?.title?.toUpperCase()}</div>
        </div>
    )
}
