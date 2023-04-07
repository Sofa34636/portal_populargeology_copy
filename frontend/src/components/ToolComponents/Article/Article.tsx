import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Layout } from '../../Layout/Layout';
import { ArticleSourcesMenu } from '../../ArticleSourcesMenu/ArticleSourcesMenu'
import { useAppSelector } from '../../../hooks/redux'
import {ArticleVerticalList} from "../../ArticleVerticalList/ArticleVerticalList";
import Button from "@mui/material/Button";
import {useFetchAllArticlesHook} from "../../../hooks/useFetchAllArticlesHook";

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

  const {isLoading, fetchedArticles, error} = useFetchAllArticlesHook()
  console.log(fetchedArticles)

  return (
    <Layout layoutProps={{ time: timeState, instrument: instrumentState, isDisplayed: false}}>
      <div className="article">
        <div className='article--main'>
            <div className="article--main__subtitle">
                <h4></h4>
            </div>
            <div className="article--main__title">
                <h1>dasda</h1>
            </div>
            <div className="article--main__sources">
                <ArticleSourcesMenu/>
            </div>
            <div className="article--main__content">
                Consequat homero accumsan malorum sapientem. Amet veniam finibus potenti tellus sale. Volutpat habitasse dolore tortor nascetur posse aliquip utamur offendit dicant. Instructior quidam ius habitasse mea. Honestatis quaeque arcu tristique scripta consequat. Pulvinar eirmod sapien mus lobortis option. Graeco est quaestio disputationi tation verterem. His mnesarchum deseruisse alterum offendit. Fringilla affert eius sadipscing dicit himenaeos adipisci velit. Possim neque natoque ridens adversarium quaestio lorem inceptos graece. Ornare elit deserunt viderer ornare sapientem pri docendi detraxit. Magna orci comprehensam altera veritus. Inani proin neglegentur eleifend risus. Graeco utamur idque vero iriure vivamus voluptaria postulant ea. Viris appetere autem a vim tation. Possim dui pro ornare at melius nominavi. Quaeque faucibus possit mediocritatem partiendo atqui. Graeco omittam voluptaria cum ad sodales mentitum litora gloriatur augue. Ludus atqui iisque inimicus civibus atqui tempus faucibus iisque expetendis. Taciti potenti efficitur a egestas his ac placerat. Intellegebat consectetuer phasellus iaculis facilisi mnesarchum commodo. Nunc labores molestie intellegebat nominavi mi sanctus oporteat viderer. Appetere adhuc bibendum ante ullamcorper est nibh. Nullam maluisset docendi contentiones sed congue. Causae sea menandri causae ea cum. Nostra sapientem vis fuisset efficiantur scelerisque epicuri eam. Adolescens mandamus ceteros graecis omittam pertinax. Adhuc aliquet tristique ornatus detracto. Magna interdum laudem lacus arcu praesent facilisis epicuri deserunt te. Reque tantas antiopam cum dicant atomorum habitant. Sumo wisi fuisset populo malorum convallis. Honestatis dictas percipit tamquam mollis efficiantur. Elementum persecuti mutat suscipit pellentesque metus. Solum lectus sociosqu eruditi molestie intellegebat feugait. Expetendis feugiat mattis fabellas scripta putent deterruisset reque oporteat omnesque. Eum elaboraret noster inani ei nullam litora dicant constituam. Agam partiendo honestatis nulla saepe necessitatibus malorum falli. Necessitatibus singulis nisl atqui ignota. Bibendum similique tempus elitr sapientem elaboraret aliquid vivendo definitionem graeci. Vis conceptam mentitum dicam dictumst ac ut delicata torquent luptatum. Viverra principes populo in qui curabitur quis nisl. Perpetua corrumpit liber deterruisset regione viderer tincidunt idque. Neque repudiare mollis aeque imperdiet theophrastus quo graeci. Vitae augue electram atomorum esse dictas aliquid sem viverra. Donec magna iusto magna ocurreret postulant iusto. Platea principes alterum recteque sea fabulas consectetuer tation natum primis. Atqui mauris ponderum curae intellegat dictas fames reformidans. Molestiae fastidii omittam fastidii delectus tacimates graece ad molestie. Integer nostrum molestie autem vim lacus movet graece. Dictas vidisse mea conubia vitae imperdiet sale leo. Morbi brute maiestatis imperdiet egestas repudiare pharetra convallis ad. Suscipiantur aeque quam id felis sodales. Recteque conubia in molestie dictumst ridiculus euismod suspendisse. Est reformidans scelerisque mediocrem putent luptatum iriure mandamus. Class honestatis rutrum habitant melius platonem duis qui platonem. Elit liber finibus himenaeos et cu nam. Class singulis posse magna ius quam ne sapien. Aliquid ferri curabitur partiendo senserit euripidis ne ipsum. Maecenas sapien vestibulum eruditi errem non pro. Agam aliquid sanctus ubique possit novum perpetua petentium feugait. Turpis ferri doctus augue imperdiet duo lacinia mentitum reque. Sea iusto sea magnis suavitate cursus gravida et. Reprehendunt decore accumsan mucius oporteat neglegentur ornare imperdiet. Vim debet verterem fusce nisl laudem adhuc habeo eu fringilla. Alienum fusce has quot metus. Interesset meliore inciderint ac te feugiat vix tota. Dolorum electram fabellas menandri commune. Dictum aptent liber dicam ad. Elit iaculis delectus arcu mutat quis natoque convenire mazim iusto. Voluptatum suavitate meliore cum ipsum. Duis sem veritus himenaeos honestatis. Vivamus nec has ludus potenti. Patrioque fames moderatius inciderint mollis duis. Accusata faucibus adolescens gloriatur contentiones audire mei dicta. Et mi porttitor voluptaria sed. Detracto quidam lacinia prodesset appetere ridens convallis. Perpetua dissentiunt mei mi ferri sonet persecuti omittam quaerendum. Propriae dignissim utamur velit volutpat convallis sapientem sonet percipit posuere. Ea euismod fermentum voluptatum delicata quam primis vituperata. Quaeque orci vituperatoribus mucius feugait. Dolorem elit lorem habemus commodo mandamus eam. Mnesarchum reprimique qui prompta regione commune. Vivamus tempor adolescens scripta graece lacus habeo aliquip vel suspendisse. Sale morbi suas litora laoreet mollis detracto verear tincidunt. Nibh verear qualisque theophrastus luctus usu graece. Mnesarchum morbi dolor quas donec voluptatum noluisse. Maiestatis orci neglegentur dolor senectus nihil nominavi. Convenire iaculis convenire eros animal petentium. Labores omittantur alia regione veritus. Dolor nascetur putent qui reprehendunt eloquentiam congue per. Fermentum autem discere iaculis prodesset te. Detraxit ignota ponderum consul purus mea salutatus. Dolore comprehensam legere dicit errem delenit luptatum. Ponderum nulla tibique suspendisse delenit etiam libris consetetur recteque solum. Ridiculus elementum adipiscing nonumes causae novum euismod. Persecuti dissentiunt ullamcorper non vocent morbi. His gubergren evertitur quaerendum donec. Periculis similique penatibus referrentur delectus. Solum nobis potenti possit libris discere sed corrumpit tamquam persequeris. Eros habitant discere vitae auctor latine laudem placerat detracto.
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
