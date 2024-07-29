import React, { FC } from "react";
import "../Sources/Sources.scss";
import fone from '../Image/BigBang_final-v01_270.png';
import { Footer } from "../Footer/Footer";


export const Sources: FC = () => {
  return (
    <div>
    <div className="blok_sourcer">
      <img src={fone} className="fixed2 max-w-max2" ></img>
      <div  className="text-overlay">
      <div className="title no_select title1">
        <h1>Источники</h1>
      </div>
      <div className="title2 no_select2">
        <span>История Земли </span>
      </div>
<div className="numbering_blok">
      <ol className="numbering">
        <li className="numbering_title">
          Р. Хейзен История Земли. От звездной пыли – к живой планете. Первые 4
          500 000 000 лет // «Альпина Диджитал», 2012.
        </li>
        <li className="numbering_title">
          Philipp R. Heck, Jennika Greer, Levke Kööp, Reto Trappitsch, Frank
          Gyngard, Henner Busemann, Colin Maden, Janaína N. Ávila, Andrew M.
          Davis, Rainer Wieler. Продолжительность жизни межзвездной пыли от
          воздействия космических лучей возраст пресолярного карбида кремния //
          Труды Национальной академии наук, январь. 13,
          2020; DOI: 10.1073/pnas.1904573117
        </li>
        <li className="numbering_title">
          Кертис Д. Уильямс, Мэтью Э. Санборн, Селин Дефуйлой, Цин-Чжу Инь,
          Норико Т. Кита, Дентон С. Эбел, Аканэ Ямакава, Кацуюки Ямасита. Хондры
          обнаруживают крупномасштабный внешний перенос материалов внутренней
          Солнечной системы в протопланетном диске. // Труды Национальной
          академии наук, 2020; 202005235 DOI: 10.1073/pnas.2005235117
        </li>
      </ol >
      </div>
      <div className="title2 no_select2">
        <span>История луны </span>
        </div>
        <div className="numbering_blok">
      <ol  className="numbering">
        <li className="numbering_title">
          Мэн-Хуа Чжу, Наталья Артемьева, Алессандро Морбиделли, Цин-Чжу Инь,
          Гарри Беккер, Кай Вюнеманн. Реконструируя позднюю аккреционную историю
          Луны. // Nature, 2019; 571 (7764): 226 DOI: 10.1038/s41586-019-1359-0
        </li>
        <li className="numbering_title">
          Михаил Никитин: &quot; Зарождение жизни на Земле и других планетах
          &quot;. Открытая лекция
        </li>
        <li className="numbering_title">
          Плитовая тектоника & Палеогеография (Настоящее - 540 Ma) by CR
          Scotese.
        </li>
        <li className="numbering_title">
          Тектоническая эволюция плит Земли со времен Пангеи, 240 миллионов лет
          назад, до образования Пангеи Проксимы by CR Scotese
        </li>
      </ol>
      </div>
    <div className="title2 no_select2">
        <span>Зарождение жизни на планетах</span>
        </div>
        <div className="numbering_blok">
      <ol  className="numbering">
        <li className="numbering_title">Льды Антарктиды</li>
        <li className="numbering_title">
          Сообщение Перепечатано из материалов, предоставленных Университетом
          штата Орегон.
        </li>
        <li className="numbering_title">Эволюция растений</li>
        <li className="numbering_title">
          С точки зрения науки» (англ. Naked Science) — с 2004 года американский
          научно-популярный и документальный фильм на телеканале National
          Geographic Channel
        </li>
      </ol>
</div>
     <div className="title2 no_select2">
        <span>Дополнительные материалы</span>
        </div>
        <div className="numbering_blok">
      <ol  className="numbering">
        <li className="numbering_title">
          Идзуми Машино, Мотохико Мураками, Нобуеси Миядзима, Сильвен
          Петигирард. Экспериментальные данные для обогащенной кремнеземом
          нижней мантии Земли с доминирующим бриджманитом железистого железа. //
          Труды Национальной академии наук, 2020; 201917096 DOI:
          10.1073/pnas.1917096117
        </li>
        <li className="numbering_title">Иccлeдoвaниe Зeмли // V-kosmose</li>
        <li className="numbering_title">Материалы кафедры геологии, гидрометеорологии и геоэкологии.</li>
        <li className="numbering_title">
          Bazhenov, M.B., Levashova, N.M., Meert, J.G., Golovanova, I.V.,
          Danukalov, K.N., Fedorova, N.M., 2016. Late Ediacarian
          magnitostratigraphy of Baltica: evidence for magnetic field
          hyperactivity? // Earth and Planetary Science Letters 435, 124–135.
        </li>
        <li className="numbering_title">
           Chuvashov, B.I., 1983. Permian reefs of the Urals. // Facies 8,
          191–212.
        </li>
      </ol>
    
      </div>
      <div className="no"></div>
    </div>
    </div>
    <Footer footerDisplayStyle="home" />
    </div>
  );
};

export default Sources;
