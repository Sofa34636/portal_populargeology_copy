import React, { FC } from "react";
import { BreadcrumbsComponent } from "../Breadcrumbs/Breadcrumbs";
import { headerDisplayStyles } from "../../types/layoutStyles";
import nornickel from "./Норникель_adv1.png";
import "../Header/Header.scss";
import "./AboutTheProject.scss";
import fone from '../Image/BigBang_final-v01_270.png';
import { Footer } from "../Footer/Footer";

interface IHeaderProps {
  headerDisplayStyle: headerDisplayStyles;
  firstCrumb?: string;
  secondCrumb?: string;
}

export const AboutTheProject: FC<IHeaderProps> = (props) => {
  return (
    <div>
    <div className="blok_AbouteTheProject">
      <img src={fone} className="fixed2 max-w-max2" ></img>
      <div  className="text-overlay">
      <div className="title no_select title1">
        <h1>О проекте</h1>
      </div>

      <div className="blok_inform">
        <p >
          Проект разработан государственным геологическим музеем им.
          В.И.Вернадского РАН при партнерском участии Башкирского
          государственного университета (кафедра геологии и полезных ископаемых)
        </p>
      </div>
    <div className="title2 no_select2">
        <span>
          Научно-популярный портал &quot;История Земли: геологический
          ракурс&quot;{" "}
        </span>
        </div>

      <div className="blok_inform">
        <p>
          Портал ставит своей основной целью популяризацию современных научных
          геологических знаний по истории Земли. В основе технологических
          решений - концепция динамического времени и пространства, позволяющая
          осуществлять интерактивное взаимодействие различных видов
          геологической информации как во времени, так и в пространстве.
        </p>
      </div>

    <div className="title2 no_select2">
        <span>Исполнители проекта </span>
        </div>

      <div className="blok_inform">
        <p>
          Наумова В.В., д.г.-м.н., г.н.с., зав. отделом, ГГМ РАН, руководитель
          Проекта
        </p>
        <p>
          Еременко А.С., к.т.н., н.с., ГГМ РАН, ИАПУ ДВО РАН, ответственный
          исполнитель
        </p>
        <p>Загуменнов А.А., н.с., ГГМ РАН, ИАПУ ДВО РАН</p>
        <p>Еременко А.А., м.н.с., ГГМ РАН</p>
        <p>Злобина А.Н., к.г.-м.н., старший преподаватель БашГУ</p>
      </div>

     <div className="title2 no_select2">
        <span>Финансирование проекта </span>
        </div>
      <div className="blok_inform">
        <p>
          Проект выполняется в рамках Государственного задания ГГМ РАН по Теме №
          0140-2019-0005 «Разработка информационной среды интеграции данных
          естественнонаучных музеев и сервисов их обработки для наук о Земле».
        </p>
      </div>

      <div >
        <p>При партнёрском участии Норникель.</p>
      </div>
      <img src={nornickel}></img>
      <div >
        <p>
          Вся информация представлена на портале исключительно в
          научно-образовательных и ознакомительных целях
        </p>
        </div>
        <div className="no"></div>
      </div>
    </div>
  
     <Footer footerDisplayStyle="home" />
     </div>
  );
};

export default AboutTheProject;
