import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import {ArticleCard} from "../ArticleCard/ArticleCard";
import {IArticle} from "../../types/models/IArticle";
import {useFetchAllArticlesHook} from "../../hooks/useFetchAllArticlesHook";

// const ArticleList = [
//     { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ2' },
//     { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ3' },
//     { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ4' },
//     { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ5' },
//     { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ6' },
// ]

const renderCard = (props: ListChildComponentProps) => {
    const { index, style, data } = props;

    return (
        <ListItem style={style} key={index} component="div" className='article--verticalList__container__item'>
            <ArticleCard {...data[index]}/>
        </ListItem>
    );
}

export const ArticleVerticalList = () => {

    const { isLoading, fetchedArticles, error } = useFetchAllArticlesHook(10)
    let fetchedArticlesList: IArticle[] = []
    fetchedArticles.forEach((listOfArticles, index) => {
        fetchedArticlesList = fetchedArticlesList.concat(listOfArticles);
    })

    console.log(fetchedArticlesList)

    return (
        <Box
            className='article--verticalList__container'
        >
            <FixedSizeList
                height={650}
                width={360}
                itemSize={280}
                itemCount={5}
                overscanCount={5}
                itemData={fetchedArticlesList}
            >
                {renderCard}
            </FixedSizeList>
        </Box>
    );
}
