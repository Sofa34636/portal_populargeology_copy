import * as React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import './ThreeDEarthPage.scss';
import { Earth } from '../../components/ToolComponents/Earth/Earth';
import { useAppSelector } from '../../hooks/redux'


export const ThreeDEarthPage = () => {

  const {time, instrument} = useAppSelector((state) => state.timeLineReducer);

  return (
    <div>
      <div>
        <Layout layoutProps={{ time: time, instrument: instrument, isFooterButtonsLeft: true}}>
          <Grid className="parent" container spacing={0}>
            <Grid className="left" item xs={6}>
              <h1>{time} </h1>
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
              {/*<div className='learn'>*/}
              {/*  <Button className="learn-btn">Узнать больше</Button>*/}
              {/*</div>*/}
            </Grid>
            <Grid className="right" item xs={6}>
              <Canvas>
                <Suspense fallback={null}>
                  <Earth />
                </Suspense>
              </Canvas>
            </Grid>
          </Grid>
        </Layout>
      </div>
    </div>
  );
};
