import React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import {ArticleCard} from "../ArticleCard/ArticleCard";
import {IArticle} from "../../types/models/IArticle";

const renderCard = (props: ListChildComponentProps) => {
    const { index, style, data } = props;

    return (
        <ListItem style={style} key={index} component="div" className='article--verticalList__container__item'>
            <ArticleCard {...data[index]}/>
        </ListItem>
    );
}

export const ArticleVerticalList: React.FC<{ fetchedArticles: Array<IArticle>, numberOfArticles: number }> = ({ fetchedArticles, numberOfArticles }) => {

    return (
        <Box
            className='article--verticalList__container'
        >
            <FixedSizeList
                height={650}
                width={360}
                itemSize={280}
                itemCount={numberOfArticles}
                overscanCount={5}
                itemData={fetchedArticles}
            >
                {renderCard}
            </FixedSizeList>
        </Box>
    );
}
