import react, {Component} from "react";
import "./priceList.scss";
import price1_img from "./img/price1.png";
import price2_img from "./img/price2.png";
import price3_img from "./img/price3.png";
import price4_img from "./img/price4.png";

class PriceList extends Component{
    constructor(props){
        super(props)
        this.priceItems = [
            {
                img: price1_img,
                title: "Системы управления автономными роботами",
                description: "Проектирование, разработка и внедрение собственных систем управления автоматизированными комплексами",
                technologies: "C++, Python (Django), React JS (HTML, CSS, JS, Redux Toolkit)",
                cost: "от 350 тыс. руб."
            },
            {
                img: price2_img,
                title: "Системы безопасности киберфизических систем",
                description: "Проектирование, разработка и внедрение решений по анализу и выявлению аномалий в киберфизической системе, а также своевременное реагирование на инциденты безопасности",
                technologies: " C++, Python (Django)",
                cost: "от 520 тыс. руб."
            },
            {
                img: price3_img,
                title: "Системы интеллектуального управления",
                description: "Проектирование, разработка и внедрение комплексных решений для автоматизации управления киберфизическими системами",
                technologies: "Python, tensorflow+keras",
                cost: "от 440 тыс. руб."
            },
            {
                img: price4_img,
                title: "Платы управления и аппаратные датчики",
                description: "Проектирование, разработка и создание аппаратных компонентов с собственным микропрограммным обеспечением",
                technologies: "КОМПАС-3D, Altium Designer, Arm gcc none eabi, Cmake, Eigen3",
                cost: "от 510 тыс. руб."
            },
        ]
    }
    render(){
        return <div className="price">
            <h3 className="title">Что мы предлагаем</h3>
            <ul className="list">
                {this.priceItems.map((item, index) => {
                    return <li key={index}>
                        <img src={item.img}/>
                        <div className="descr">
                            <h2 className="name">{item.title}</h2>
                            <p className="text_d">{item.description}</p>
                            <p className="text_h">Используемые технологии</p>
                            <p className="text_u">{item.technologies}</p>
                            <p className="text_h">Стоимость</p>
                            <p className="text_u">{item.cost}</p>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    }
}
export default PriceList