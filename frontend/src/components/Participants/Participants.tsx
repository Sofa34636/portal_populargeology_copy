import React, { FC } from "react";
import "./Participants.scss";
import fone from '../Image/BigBang_final-v01_270.png';
import { Footer } from "../Footer/Footer";




const Participants: FC = () =>  {



  return (
    <div>
    <div className="bloc_participatments">
          <img src={fone} className="fixed2 max-w-max2" ></img>
          <div  className="text-overlay">
      <div className="title no_select title1">
        <h1>участники</h1>
      </div>
      <div className="title2 no_select2">
        <span>
          Студенты 2 курса, кафедра геологии, гидрометеорологии и геоэкологии,
          БашГУ:
        </span>
        </div>
        
      <div className="numbering_blok3">
        <ul className="numbering3">
          <li className="numbering_title3">Шабутдинов Тимур Денисович</li>
          <li className="numbering_title3">Фаезов Рафаэль Раилевич</li>
          <li className="numbering_title3">Кудашев Ильнур Маратович</li>
          <li className="numbering_title3">Гареева Дания Маратовна</li>
          <li className="numbering_title3">Мустафин Артур Ирекович</li>
          <li className="numbering_title3">Галиуллин Марсель Русланович</li>
          <li className="numbering_title3">Сабиров Юлай Ульфатович</li>
        </ul>
      </div>
      <div className="title2 no_select2">
        <span>
          Старший преподаватель, кафедра геологии, гидрометеорологии и
          геоэкологии, БашГУ, к.г.-м.н.:{" "}
        </span>
        </div>
      <div className="title2 no_select2">
        <p>Злобина Анастасия Николаевна</p>
        </div>
    
      </div>
      
    </div>
    <Footer footerDisplayStyle="home" />
    </div>
  );
};

export default Participants;
