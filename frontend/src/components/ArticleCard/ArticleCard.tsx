import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import {IArticle} from "../../types/models/IArticle";


export const ArticleCard = (props: IArticle) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/article/${props.id}`);
    }

    return(
        <div className='article_card' onClick={handleClick}>
            <img className='photo' src={props.image} alt="planet" />
            <div className='title'>{props.title.toUpperCase()}</div>
        </div>
    )
}
