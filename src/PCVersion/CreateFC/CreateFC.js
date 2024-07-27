import React, {Component} from "react";
import "./createFC.scss";
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import fc from './img/fc1.png';

import z1 from './img/z1.svg';
import z2 from './img/z2.svg';
import z3 from './img/z3.svg';
import z4 from './img/z4.svg';
import z5 from './img/z5.svg';
import z6 from './img/z6.svg';
import z7 from './img/z7.svg';

class CreateFC extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="createFC">
            <div className="contSens-part1">
              <div className="column1">
              <div className="column1-head"><b>Полётный контроллер для беспилотных автоматизированных систем</b></div>
              <div className="column1-body">
                  <div><b>Это электронное устройство, управляющее полетом летательного аппарата, с собственным микропрограммным обеспечением. </b>Контроллер выполнен в модульной архитектуре - инерциальное измерительное устройство вынесено в отдельный виброразвязанный блок, что позволяет улучшить качество стабилизации и навигации.</div>
             <div className="column1-body-content">
                  <div className="column1-body-content-text">
                      <div className="short-text">Полетный контроллер выполнен с расчётом на дальнейшую интеграцию в БПЛА с различными системами - для этого разработчикам доступны UART-порты для работы с протоколом MAVLink, GPS-приёмниками, другими внешними датчиками/навигационными системами или исполнительными устройствами. </div>
                      <div className="short-text">На плате предусмотрены I2C, SPI порты, что расширяет спектр внешних устройств, которые можно использовать в разработке.</div>
                      <div className="short-text">Для управления БПЛА с данным полётным контроллером можно использовать как ручное управление (различные приёмопередатчики на протоколах S-Bus, CRSF (ELRS), так и внешний компьютер-компаньон.</div>
            
                  </div>
                  <div  className="column1-body-content-img">
                      <img src={fc}/>
                    
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
                          <div>Собственное аппаратное и программное решение</div>
                      </div>
                      <div className="part2-column-cont">
                          <img src={z2}/>
                          <div>Режим совместимости с открытыми прошивками коммерческих производителей полетных контроллеров</div>
                      </div>
                      <div className="part2-column-cont">
                          <img src={z3}/>
                      <div>Открытая схема платформы для реализации своего автопилота</div>
                      </div>
                      <div className="part2-column-cont">
                          <img src={z4}/>
                          <div><b>Стоимость продукта</b><br/>7,2 тыс. руб.
                          </div>
                      </div>
                      

                  </div>
                  <div className="part2-column c2">
                  <div className="part2-column-cont">
                          <img src={z5}/>
                          <div>Возможность установить на БПЛА мультироторного типа с различным числом лучей</div>
                      </div>
                      <div className="part2-column-cont">
                          <img src={z6}/>
                          <div>Минимальная проприетарная зависимость, обеспечиваемая модульностью</div>
                      </div>
                      <div className="part2-column-cont">
                          <img src={z7}/>
                          <div>Возможность комбинирования навигационных систем, повышение отказоустойчивости глобальных навигационных систем</div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        )
    }
}

export default CreateFC