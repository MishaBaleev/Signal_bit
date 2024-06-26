import React, {Component} from "react";
import "./callback.scss";
import logo_sfedu from "./img/logo_sfedu.png";
import logo_ictis from "./img/logo_ictis.png";
import logo_integra from "./img/logo_integra.png";
import right_img from "./img/right_img.png";
import email from "./img/email.png"

class Callback extends Component{
    render(){
        return(
            <div className="callback">
                <div className="left_block">
                    <div className="email-block">
                        <h3 className="title">Остались вопросы?</h3>
                        <div className="email">
                            <span>Напишите нам на почту</span>
                            <img src={email}/>
                            <a href="mailto:sigbit@yandex.ru">sigbit@yandex.ru</a>
                        </div>
                        <span className="connect">Мы свяжемся с Вами на следующий рабочий день и ответим на все интересующие вопросы.</span>
                    </div>
                    <div className="img-block">
                        <img className="right_img" src={right_img}/>
                    </div>
                </div>
                <div className="partners">
                    <div className="partner_list">
                        <h3 className="title">Наши партнеры</h3>
                        <img className="sfedu" src={logo_sfedu}/>
                        <img className="ictis" src={logo_ictis}/>
                        <img className="integra" src={logo_integra}/>
                    </div>
                    <div className="official_info">
                        <h3 className="title">Общество с ограниченной ответственностью «СИГНАЛ БИТ»</h3>
                        <p className="item">ИНН 6154166039</p>
                        <p className="item">ОГРН 1236100028493</p>
                        <p className="item">Россия, г. Таганрог</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Callback