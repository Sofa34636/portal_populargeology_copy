import React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import {CardPreview} from "../CardPreview/CardPreview";
import {IArticle} from "../../types/models/IArticle";
import {ScientificPublicationsProps} from "../../types/scientificPublications";
import {IExhibit} from "../../types/models/IExhibit";

const renderCard = (props: ListChildComponentProps) => {
    const { index, style, data } = props;

    return (
        <ListItem style={style} key={index} component="div" className='card--verticalList__container__item'>
            <CardPreview {...data[index]}/>
        </ListItem>
    );
}

export const CardVerticalList: React.FC<{ cards: Array<(IArticle | ScientificPublicationsProps) | IExhibit>, numberOfCards: number, height: number, width: number }> = ({ cards, numberOfCards, height, width }) => {

    return (
        <Box
            className='card--verticalList__container'
        >
            <FixedSizeList
                height={height}
                width={width}
                itemSize={280}
                itemCount={numberOfCards}
                overscanCount={5}
                itemData={cards}
            >
                {renderCard}
            </FixedSizeList>
        </Box>
    );
}
