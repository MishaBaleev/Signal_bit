import React, {Component} from "react";
import "./fieldsOfActivity.css";
import research from "./img/research.png";
import new_products from "./img/new_products.png";
import teaching from "./img/teaching.png";

class FieldsOfActivity extends Component{
    constructor(props){
        super(props)
        this.titles = [
            "Научные исследования и разработки",
            "Разработка новых программных и аппаратных решений",
            "Обучение и консультация в сфере безопасности"
        ]
        this.descr = [
            "Постоянное изучение новых технологий, исследование фундаментальных принципов и создание новых научных и инженерных решений.",
            "Весь цикл разработки, начиная от проектирования и заканчивая созданием, строится с учётом требований к доверенной разработке, что очень важно для обеспечения безопасности.",
            "Помогаем развивать компетенции и принимать эффективные меры для предотвращения угроз и минимизации рисков безопасности. Также предоставляем эффективные рекомендации, советы и экспертное мнение по вопросам безопасности."
        ]
        this.imgs = [
            research,
            new_products,
            teaching
        ]
    }
    render(){
        return(
            <div className="fieldsOfActivity">
                <h3 className="title">Чем мы занимаемся</h3>
                {this.titles.map((item, index) => {
                    return <div className="img-item" key={index}>
                        <img src={this.imgs[index]}/>
                        <div className="descr">
                            <h2>{item}</h2>
                            <span>{this.descr[index]}</span>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}

export default FieldsOfActivity