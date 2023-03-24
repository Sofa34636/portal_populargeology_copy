import React from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from '../../Layout/Layout';

export const Article = () => {
  const location = useLocation();

  const decodedPath = decodeURI(location.pathname);
  const title = decodedPath.substring(decodedPath.lastIndexOf('/') + 1);
  // title.substring(title.lastIndexOf('/') + 1)

  return (
    <Layout layoutProps={{ time: 'vremya', instrument: 'instrument'}}>
      <div className="article">
        <div className="article__subtitle">
          <h4>Lorem, ipsum dolor.</h4>
        </div>
        <div className="article__title">
          <h1>{title}</h1>
        </div>
        <div className="article__sources">
          <h5>Источники</h5>
        </div>
        <div className="article__content">
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
        <div className="article__anotherArticles"></div>
      </div>
    </Layout>
  );
};
