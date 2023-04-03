import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import {ArticleCard} from "../ArticleCard/ArticleCard";

const ArticleList = [
    { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ2' },
    { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ3' },
    { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ4' },
    { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ5' },
    { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ6' },
]
const renderCard = (props: ListChildComponentProps ) => {
    const { index, style } = props;

    return (
        <ListItem style={style} key={index} component="div">
            <ArticleCard photoPath={ArticleList[index].photoPath} title={ArticleList[index].title}/>
        </ListItem>
    );
}

export const ArticleVerticalList = () => {
    return (
        <Box
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'black' }}
        >
            <FixedSizeList
                height={650}
                width={360}
                itemSize={280}
                itemCount={5}
                overscanCount={5}
            >
                {renderCard}
            </FixedSizeList>
        </Box>
    );
}
