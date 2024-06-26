import React, {Component} from "react";
import "./creations.css";
import top_img from "./img/top.png";
import middle_img from "./img/middle.png";
import bottom_img from "./img/bottom.png";
import creation_1 from "./img/creation_1.png";
import creation_2 from "./img/creation_2.png";
import creation_3 from "./img/creation_3.png";
import creation_4 from "./img/creation_4.png";
import creation_5 from "./img/creation_5.png";
import creation_6 from "./img/creation_6.png";

class Creations extends Component{
    constructor(props){
        super(props)

        this.cr_2_descr = [
            "Возможность выявления и классификации БПЛА в радиочастотном диапазоне с повышенной точностью",
            "Выявление координат БПЛА и расстояние до БПЛА",
            "Определение функциональных возможностей БПЛА на основе собранной о нем информации",
            "Определение типа сценария для активного противодействия БПЛА позволяющего повысить эффективность системы защиты и безопасность охраняемого объекта критической информационной инфраструктуры",
            "Возможность интеграции с существующими решениями по противодействию БПЛА с целью повышения эффективности их работы, в частности, для управления системами глушения связи и реализации интеллектуального глушения",
            "Повышенная длительность работы за счет переключения между режимами пассивного ожидания и активного противодействия",    
        ]
        this.cr_2_imgs = [
            creation_1,
            creation_2,
            creation_3,
            creation_4,
            creation_5,
            creation_6,
        ]
    }
    render(){
        return(
            <div className="creations">
                <div className="creation_1">
                    <div className="descr">
                        <h3 className="title">
                            «Канарейка» для обнаружения аномалий и радиоуправляемых устройств
                        </h3>
                        <p className="top_text">
                            <span className="key_word">
                                Это интеллектуальная система детектирования и противодействия 
                                беспилотным автоматизированным системам (БАС) для объектов 
                                критической информационной инфраструктуры.
                            </span> Система с помощью 
                            сенсора сканирует наиболее популярные диапазоны, 
                            в которых работают БАС, и на основе анализа радиочастотного 
                            диапазона и спектра определяет тип БАС, который был зафиксирован.
                        </p>
                        <div className="img_text">
                            <div className="img_text_list">
                                <p>
                                    Определение конкретного типа БАС позволяет 
                                    выбрать наилучший сценарий противодействия, 
                                    а также сделать предположение о том, какую цель 
                                    преследует нарушитель. 
                                </p>
                                <p>
                                    Модуль противодействия реализует сценарии 
                                    атак на БАС, чтобы предотвратить приченение 
                                    вреда объекту критической информационной 
                                    инфраструктуры.
                                </p>
                                <p>
                                    Модульность системы позволяет проводить 
                                    анализ окружающей среды в режиме реального времени, 
                                    а также своевременно применять контрмеры для 
                                    повышения защиты и безопасности защищаемого объекта.
                                </p>
                            </div>
                            <video autoPlay loop="loop" muted>
                                <source src="./demonstration.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                    <div className="imgs">
                        <img className="top" src={top_img}/>
                        <img className="middle" src={middle_img}/>
                        <img className="bottom" src={bottom_img}/>
                    </div>
                </div>
                <div className="creation_2">
                    <h3 className="title">Характерные параметры системы</h3>
                    <ul className="list">
                        {this.cr_2_descr.map((item, index) => {
                            return <li key={index}>
                                <img src={this.cr_2_imgs[index]}/>
                                <span>{item}</span>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Creations