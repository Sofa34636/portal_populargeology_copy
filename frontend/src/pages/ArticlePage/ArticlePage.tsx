import * as React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { useLocation } from 'react-router-dom';


export const ArticlePage = () => {
  // const location = useLocation()
  // const { from } = location.state
  // console.log(from)
  return (
    <div>
      <Layout 
        time='wajdkawd'
        instrument='СТАТЬИ'
      />
    </div>
  );
};
