import * as React from 'react'
import { ArticleCardProps } from '../../types/ArticleCardProps'

export const ArticleCard = (props: ArticleCardProps) => {
    return(
        <div className='article_card'>
            <img className='photo' src={props.photoPath} alt="planet" />
            <div className='title'>{props.title.toUpperCase()}</div>
        </div>
    )
}