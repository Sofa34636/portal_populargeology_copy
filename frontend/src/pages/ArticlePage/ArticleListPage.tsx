import * as React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { useLocation } from 'react-router-dom';
import { ArticleCard } from '../../components/ArticleCard/ArticleCard';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';


export const ArticleListPage = () => {
  const location = useLocation()
  const { timeProp } = location.state
  const cards: React.ReactNode[] = [
    <ArticleCard/>,
    <ArticleCard/>,
    <ArticleCard/>,
    <ArticleCard/>,
    <ArticleCard/>,
    <ArticleCard/>,
    <ArrowForwardIosRoundedIcon/>
  ]
  return (
    <div className='article'>
      <Layout 
        layoutProps={{time: timeProp, instrument: 'СТАТЬИ'}}
      >
        <div className='article_list_content'>
          <ul>
            { cards.map((card, index) => {
              return (
                <li id={'card' + index} key={index}>{ card }</li>
              )
            }) }
          </ul>
          {/* <div className='article_arrow_right'>
          </div> */}
        </div>
      </Layout>
    </div>
  );
};
