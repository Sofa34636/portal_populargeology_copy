import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArticleCardProps } from '../../types/ArticleCardProps'


export const ArticleCard = (props: ArticleCardProps) => {

    const navigate = useNavigate()
    // const history = useHi

    const handleClick = () => {
        navigate(`/article/${props.title.toLowerCase()}`);
    }

    return(
        <div className='article_card' onClick={handleClick}>
            <img className='photo' src={props.photoPath} alt="planet" />
            <div className='title'>{props.title.toUpperCase()}</div>
        </div>
    )
}