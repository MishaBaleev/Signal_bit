import React, {Component} from "react";
import "./createSensor.scss";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";

import sen1 from "./img/sen1.png";
import sen2 from "./img/sen2.png";

import z1 from "./img/z1.svg";
import z2 from "./img/z2.svg";
import z3 from "./img/z3.svg";
import z4 from "./img/z4.svg";
import z5 from "./img/z5.svg";
import z6 from "./img/z6.svg";
import z7 from "./img/z7.svg";

class createSensor extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="createSensor">
              <div className="contSens-part1">
                <div className="column1">
                <div className="column1-head"><b>Сенсор для обнаружения<br/>радиоуправлемых устройств</b></div>
                <div className="column1-body">
                    <div><b>Это программно-аппаратное устройство для детектирования беспилотных автоматизированных систем (БАС) и других радиоуправляемых устройств. </b>Устройство с помощью сенсора анализарует радиочастотный спектр путем прохождения по каждой частоте по несколько итераций в зависимости от наличия сигнала, а алгоритм обнаружения позволяет идентифицировать зафиксированную частоту.</div>
               <div className="column1-body-content">
                    <div className="column1-body-content-text">
                        <div>Устройство сканирует диапазоны частот 820-920 МГц, 2,4-2,485 ГГц, 5,6-5,9 ГГц. </div>
                        <div className="short-text">На каждом канале проводится обработка сигнала, который отображается как в консоли, так и на столбчатой диаграмме, выводящейся на дисплей.</div>
                        <div className="short-text">При обнаружении сигнала срабатывает зуммер, который издает звуковой сигнал, предупреждающий о наличии активности на данном радиочастотном диапазоне.</div>
                        <div className="short-text">Ключевой особенностью алгоритма анализа радиочастотного спектра является гибкое взаимодействие с пользователем благодаря возможности смены режимов через нажатие кнопок и свето-звуковому сопровождению опасности БАС.</div>
                    </div>
                    <div  className="column1-body-content-img">
                        <img src={sen1}/>
                        <img src={sen2}/>
                    </div>
               </div>
                </div>
                </div>
               
                <div className="column2">
                <img src={img1}/>
                <img src={img2}/>
                <img src={img3}/>
                </div>
              </div>
              <div className="contSens">
                <div className="part2-head">
                    <b>Характерные параметры устройства</b>
                </div>
                <div className="part2-body">
                    <div className="part2-column c1">
                        <div className="part2-column-cont">
                            <img src={z1}/>
                            <div>Возможность сканирования диапазонов частот 820-920 МГц, 2,4-2,485 ГГц, 5,6-5,9 ГГц</div>
                        </div>
                        <div className="part2-column-cont">
                            <img src={z2}/>
                            <div>Звуковое и световое оповещение пользователя при обнаружении БАС или радиоуправляемого устройства</div>
                        </div>
                        <div className="part2-column-cont">
                            <img src={z3}/>
                        <div>Возможность работы в трех режимах:
                        - сканирование радиочастотного спектра без обнаружения,
                        - сканирование радиочастотного спектра с применением алгоритмов обнаружения,
                        - глушение</div>
                        </div>
                        <div className="part2-column-cont">
                            <img src={z4}/>
                            <div><b>Стоимость продукта</b><br/>7 тыс. руб.
                            </div>
                        </div>
                        

                    </div>
                    <div className="part2-column c2">
                    <div className="part2-column-cont">
                            <img src={z5}/>
                            <div>Наличие алгоритма обнаружения, который определяет опасность по ширине столбцов, плотности сигнала или по количеству истинных срабатываний</div>
                        </div>
                        <div className="part2-column-cont">
                            <img src={z6}/>
                            <div>Дальность работы в пределах 2 км с сектором получения данных в 140</div>
                        </div>
                        <div className="part2-column-cont">
                            <img src={z7}/>
                            <div>Возможность использовать как индивидуальное носимое устройство и выносимое на стойке устройство</div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        )
    }
}

export default createSensor