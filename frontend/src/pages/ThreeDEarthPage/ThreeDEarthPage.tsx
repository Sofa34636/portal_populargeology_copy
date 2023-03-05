import * as React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

import './ThreeDEarthPage.scss';

export const ThreeDEarthPage = () => {
  const location = useLocation();
  const { timeProp } = location.state;
  return (
    <div>
      <div>
        <Layout layoutProps={{ time: timeProp, instrument: '3Д ЗЕМЛЯ' }}>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <h1>Белая земля</h1>
              <h2>650 млн. лет назад</h2>
              <p>
                Три четверти миллиарда лет назад Земля вошла в период нестабильности климата.
                Началось всё с сурового ледникового периода.
              </p>
              <p>
                В течение миллионов лет Земля была покрыта льдом (или в лучшем случае снежной
                слякотью). Планета – «снежный ком» не могла поглощать солнечные лучи и, казалось,
                была обречена навеки остаться в ледяном коконе, поскольку температура постоянно
                сохранялась ниже нуля. Как вообще удалось оправиться планете после глобальной,
                долгой и холодной зимы? Ответ следует искать в глубоких неумолимых процессах.
                Белоснежный ледяной панцирь не мог состязаться с глобальным движением тектонических
                плит не мог он и противостоять бесконечным выбросам вулканических газов из сотен
                черных кратеров, выступавших над поверхностью льда.
              </p>
              <Button className="learn-btn">УЗНАТЬ БОЛЬШЕ</Button>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Layout>
      </div>
    </div>
  );
};
