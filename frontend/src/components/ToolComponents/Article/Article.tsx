import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from '../../Layout/Layout';

export const Article = () => {
  const location = useLocation();

  const decodedPath = decodeURI(location.pathname);
  const title = decodedPath.substring(decodedPath.lastIndexOf('/') + 1);
  title.substring(title.lastIndexOf('/') + 1)

  // const [articleState, setArticleState] = useState({});
  //

  // useEffect(() => {
  //   const apiUrl = 'http://127.0.0.1:8000/api/article/';
  //   fetch(apiUrl)
  //       .then((response) => response.json())
  //       .then((data) => {
  //             setArticleState(data[0])
  //       }
  //       );
  //
  // }, [])


  return (
    <Layout layoutProps={{ time: 'vremya', instrument: 'instrument'}}>
      <div className="article">
        <div className="article__subtitle">
          {/*<h4>{articleState.time_ago}</h4>*/}
        </div>
        <div className="article__title">
          {/*<h1>{articleState.title}</h1>*/}
        </div>
        <div className="article__sources">
          <h5>Источники</h5>
        </div>
        <div className="article__content">
          {/*{articleState.text}*/}
        </div>
        <div className="article__anotherArticles"></div>
      </div>
    </Layout>
  );
};
