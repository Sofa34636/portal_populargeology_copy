import * as React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { useLocation } from 'react-router-dom';
import { ArticleCardProps } from '../../types/ArticleCardProps';
import { ArticleCarousel } from '../../components/ArticleCarousel/ArticleCarousel';


export const ArticleListPage = () => {
  const location = useLocation()
  const { timeProp } = location.state
  const cards: ArticleCardProps[][] = [
    [
      { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ1' },
      { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ2' },
      { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ3' },
      { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ4' },
      { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ5' },
      { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ6' },
    ],
    [
      { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ7' },
      { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ8' },
      { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ9' },
      { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ10' },
      { photoPath: '../../assets/img/planet.jpg', title: 'ЗЕМЛЯ11' },
    ]
  ]
  return (
    <div className='article'>
      <Layout 
        layoutProps={{time: timeProp, instrument: 'СТАТЬИ'}}
      >
        <div className='article_list_content'>
          <ArticleCarousel articleCards={cards}/>
        </div>
      </Layout>
    </div>
  );
};
