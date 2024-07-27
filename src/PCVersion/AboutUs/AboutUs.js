import React, {Component} from "react";
import "./aboutUs.scss";
import photo1 from './img/photo1.png';
import c3plus from './img/c_three.svg';
import c3 from './img/c_three1.svg';
import c5 from './img/c_five.svg';


class AboutUs extends Component{
    render(){
        return(
            <div className="aboutUs">
             <div className="header-AboutUs"><b>Наша миссия – создавать безопасные<br/>технологичные решения</b></div>
             <div className="container-block">
                <div className="block1">
                    <div><h2>Мы ИТ-компания</h2></div>
                    <div className="text block-t">
                        <div>Занимаемся разработкой безопасных программных и аппаратных решений, а также ИТ-консалтингом в сфере информационной безопасности.</div>
                        <div>Залог нашего успеха – постоянное стремление к реализации стратегических целей компании.</div>
                        <div>В нашей команде работают опытные специалисты в области проектирования и разработки программных и аппаратных решений, 
                        а также специалисты в области информационной безопасности.</div>
                        </div>
                </div>
                <div className="block2">
                    <img src={photo1}/>
                </div>
                <div className="block3 text">
                    <div className="block3-cont"><img src={c3plus}/><div>завершенные научно-исследовательские работы в рамках университета</div></div>
                    <div className="block3-cont"><img src={c3}/><div>грантовые поддержки на реализацию технологических идей</div></div>
                    <div className="block3-cont"><img src={c5}/><div>инновационных проектов, которые получили апробацию</div></div>
                </div>
                <div className="block4 text">
                   <b>Общество с ограниченной ответственностью  «СИГНАЛ-БИТ»</b>
                   <div className="block4-cont">
                    <div>ИНН 6154166039</div>
                    <div>ОГРН 1236100028493</div>
                    <div>Ростовская область, г. Таганрог, ул. Лесная Биржа, д. 20-б, оф. 2 </div>
                   </div>
                </div>
             </div>
            </div>
        )
    }
}

export default AboutUs