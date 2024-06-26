import React, {Component} from "react";
import "./main.css";
import hand_right from "./img/hand-right.png";
import hand_left from "./img/hand-left.png";

class Main extends Component{
    render(){
        return(
            <div className="main">
                <div className="block_1">
                    <div className="descr">
                        <h3>Ваш надежный партнер в безопасности</h3>
                        <span>
                            Мы специализируемся на обеспечении безопасности
                            в области робототехники и киберфизических систем. Наша команда 
                            разрабатывает интегрированные решения, 
                            которые помогают предотвратить риски и 
                            обеспечить безопасность во всех аспектах 
                            работы с роботехническими комплексами.
                        </span>
                    </div>
                    <img src={hand_right}/>
                </div>
                <div className="block_2">
                    <img src={hand_left}/>
                    <div className="descr">
                        <h3>
                            Наша цель – обеспечить бесперебойное функционирование и 
                            безопасность критической инфраструктуры и киберфизических 
                            систем
                        </h3>
                        <span>
                            С нами вы можете быть уверены в надежной работе 
                            своих активов. 
                            Мы ставим безопасность на первое место и стремимся 
                            быть вашим надежным партнером в области безопасности 
                            робототехники.
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main