import React from 'react'
import { useNavigate } from 'react-router-dom'
import {IArticle} from "../../types/models/IArticle";

export const ArticleCard: React.FC<IArticle> = (article) => {
    const navigate = useNavigate()


    const handleClick = () => {
        navigate(`/article/${article.id}`);
    }

    return(
        <div className='article_card' onClick={handleClick}>
            <img className='photo' src={article.image} alt="planet" />
            <div className='title'>{article.title.toUpperCase()}</div>
        </div>
    )
}
