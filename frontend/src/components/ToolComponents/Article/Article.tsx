import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { Layout } from '../../Layout/Layout';
import { useAppSelector } from '../../../hooks/redux'
import {ArticleVerticalList} from "../../ArticleVerticalList/ArticleVerticalList";
import Button from "@mui/material/Button";

export const Article = () => {
  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);
  const navigate = useNavigate()
  // const [articleState, setArticleState] = useState({});


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
  // const params = useParams();
  //
  // console.log(params)

  return (
    <Layout layoutProps={{ time: timeState, instrument: instrumentState}}>
      <div className="article">
        <div className='article--main'>
            <div className="article--main__subtitle">
            <h4>Lorem, ipsum dolor.</h4>
            </div>
            <div className="article--main__title">
            <h1>dasda</h1>
            </div>
            <div className="article--main__sources">
            <h5>Источники</h5>
            </div>
            <div className="article--main__content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt perspiciatis aut
            reprehenderit alias molestiae magnam fugiat voluptatibus quos quis quas, animi fuga,
            voluptatem necessitatibus ex, nobis maxime voluptate molestias vel natus? Animi unde
            ipsum, dolores neque, voluptate sed harum amet incidunt beatae, itaque eius. Officia
            consequuntur quidem illo aut at possimus dicta. Aliquam est suscipit iusto totam
            laudantium non cum, in ducimus quod ut, et, adipisci consequuntur vel provident officiis
            ab ipsam eaque culpa magni molestias commodi debitis error. Omnis modi optio dolorum
            labore aliquid quae quisquam voluptas mollitia, minima neque maiores quibusdam quo nobis
            distinctio, unde non dignissimos molestiae! Illo, voluptas inventore, dolore nihil
            expedita accusamus doloremque assumenda porro quam veritatis cumque ipsam repudiandae id
            nisi molestiae beatae optio quia. Vero exercitationem sit iusto dolore laboriosam ex
            doloremque quam quasi, eum itaque ducimus culpa unde magnam facilis fuga veritatis
            placeat! Eius nobis esse, consequuntur mollitia hic minima necessitatibus nihil, explicabo
            nostrum magni est eaque eos consequatur ex laudantium iste ratione omnis facilis
            asperiores iusto, delectus at voluptatum. Ad, sequi ut. Dolorum consequatur illo esse nam
            minima obcaecati aut minus, unde harum exercitationem laudantium hic fugiat distinctio a
            repellendus saepe doloribus facere eos quasi perferendis enim architecto. Obcaecati iure
            nam eos mollitia, alias corrupti amet? Dolores, animi. Architecto laboriosam fugiat
            incidunt, facere expedita molestiae ea facilis natus quam nesciunt veniam vero dolorum
            commodi quibusdam amet harum impedit tempore reiciendis. Repellat a minima adipisci sequi
            voluptas harum perspiciatis odio ducimus architecto quidem doloremque pariatur voluptatem
            iste, earum doloribus quo? Eos, expedita.
            </div>
        </div>
        {/*<div className="article__sub">*/}

        {/*</div>*/}
        {/*<div className="article__subtitle">*/}
        {/*  /!*<h4>{articleState.time_ago}</h4>*!/*/}
        {/*</div>*/}
        {/*<div className="article__title">*/}
        {/*  /!*<h1>{articleState.title}</h1>*!/*/}
        {/*</div>*/}
        {/*<div className="article__sources">*/}
        {/*  <h5>Источники</h5>*/}
        {/*</div>*/}
        {/*<div className="article__content">*/}
        {/*  /!*{articleState.text}*!/*/}
        {/*</div>*/}
        <div className="article--articleVerticalList">
          <ArticleVerticalList/>
        </div>
        <div className='article--goBackButton'>
          <Button onClick={() => navigate(-1)} variant="outlined">
              НАЗАД
          </Button>
        </div>
      </div>
    </Layout>
  );
};
