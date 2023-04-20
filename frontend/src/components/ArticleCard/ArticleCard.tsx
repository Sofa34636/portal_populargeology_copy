import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {IArticle} from "../../types/models/IArticle";
import { pageRedirect } from '../../pages/pageRedirect'
import { useAppSelector } from '../../hooks/redux'
import { useLocation } from 'react-router-dom'
export const ArticleCard: React.FC<IArticle> = (article) => {
    const navigate = useNavigate()
    const {time: time, instrument: instrument } = useAppSelector((state) => state.timeLineReducer);

    const handleClick = () => {
        console.log(article)
        navigate(`/${pageRedirect(time,instrument)}/${article.id}`)
    }

    return(
        <div className='article_card' onClick={handleClick}>
            <img className='photo' src={article.image} alt="planet" />
            <div className='title'>{article.title.toUpperCase()}</div>
        </div>
    )
}
