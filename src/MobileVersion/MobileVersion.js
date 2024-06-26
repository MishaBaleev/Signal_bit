import React, {Component} from "react";
import "./mobileVersion.scss";
import signal_bit from "./img/signal_bit.png";
import right_hand from "../PCVersion/Main/img/hand-right.png";
import left_hand from "../PCVersion/Main/img/hand-left.png";
import research_img from "../PCVersion/FiledsOfActivity/img/research.png";
import products_img from "../PCVersion/FiledsOfActivity/img/new_products.png";
import teaching_img from "../PCVersion/FiledsOfActivity/img/teaching.png";
import sq_img_left from "../PCVersion/Creations/img/top.png";
import sq_img_middle from "../PCVersion/Creations/img/middle.png";
import sq_img_right from "../PCVersion/Creations/img/bottom.png";
import param_1 from "../PCVersion/Creations/img/creation_1.png";
import param_2 from "../PCVersion/Creations/img/creation_2.png";
import param_3 from "../PCVersion/Creations/img/creation_3.png";
import param_4 from "../PCVersion/Creations/img/creation_4.png";
import param_5 from "../PCVersion/Creations/img/creation_5.png";
import param_6 from "../PCVersion/Creations/img/creation_6.png";
import email from "../PCVersion/Callback/img/email.png";
import last_img from "../PCVersion/Callback/img/right_img.png";
import logo_sfedu from "../PCVersion/Callback/img/logo_sfedu.png";
import logo_ictis from "../PCVersion/Callback/img/logo_ictis.png";
import logo_integra from "../PCVersion/Callback/img/logo_integra.png";
import price_img_1 from "../PCVersion/PriceList/img/price1.png";
import price_img_2 from "../PCVersion/PriceList/img/price2.png";
import price_img_3 from "../PCVersion/PriceList/img/price3.png";
import price_img_4 from "../PCVersion/PriceList/img/price4.png";


class MobileVersion extends Component{
    constructor(props){
        super(props)

        this.research_img = [
            research_img,
            products_img,
            teaching_img
        ]
        this.research_title = [
            "Научные исследования и разработки",
            "Разработка новых программных и аппаратных решений",
            "Обучение и консультация в сфере безопасности"
        ]
        this.research_text = [
            "Постоянное изучение новых технологий, исследование фундаментальных принципов и создание новых научных и инженерных решений.",
            "Весь цикл разработки, начиная от проектирования и заканчивая созданием, строится с учётом требований к доверенной разработке, что очень важно для обеспечения безопасности.",
            "Помогаем развивать компетенции и принимать эффективные меры для предотвращения угроз и минимизации рисков безопасности. Также предоставляем эффективные рекомендации, советы и экспертное мнение по вопросам безопасности."
        ]

        this.params_img = [
            param_1,
            param_2,
            param_3,
            param_4,
            param_5,
            param_6,
        ]
        this.params_text = [
            "Возможность выявления и классификации БПЛА в радиочастотном диапазоне с повышенной точностью",
            "Определение функциональных возможностей БПЛА на основе собранной о нем информации",
            "Возможность интеграции с существующими решениями по противодействию БПЛА с целью повышения эффективности их работы, в частности, для управления системами глушения связи и реализации интеллектуального глушения",
            "Выявление координат БПЛА и расстояние до БПЛА",
            "Определение типа сценария для активного противодействия БПЛА позволяющего повысить эффективность системы защиты и безопасность охраняемого объекта критической информационной инфраструктуры",
            "Повышенная длительность работы за счет переключения между режимами пассивного ожидания и активного противодействия",
        ]

        this.video_options = {
            autoplay: true,
            controls: false,
            loop: true,
            sources: [{
                src: "./demonstration.mp4",
                type: "video/mp4"
            }]
        }
        this.priceItems = [
            {
                img: price_img_1,
                title: "Системы управления автономными роботами",
                description: "Проектирование, разработка и внедрение собственных систем управления автоматизированными комплексами",
                technologies: "C++, Python (Django), React JS (HTML, CSS, JS, Redux Toolkit)",
                cost: "от 350 тыс. руб."
            },
            {
                img: price_img_2,
                title: "Системы безопасности киберфизических систем",
                description: "Проектирование, разработка и внедрение решений по анализу и выявлению аномалий в киберфизической системе, а также своевременное реагирование на инциденты безопасности",
                technologies: " C++, Python (Django)",
                cost: "от 520 тыс. руб."
            },
            {
                img: price_img_3,
                title: "Системы интеллектуального управления",
                description: "Проектирование, разработка и внедрение комплексных решений для автоматизации управления киберфизическими системами",
                technologies: "Python, tensorflow+keras",
                cost: "от 440 тыс. руб."
            },
            {
                img: price_img_4,
                title: "Платы управления и аппаратные датчики",
                description: "Проектирование, разработка и создание аппаратных компонентов с собственным микропрограммным обеспечением",
                technologies: "КОМПАС-3D, Altium Designer, Arm gcc none eabi, Cmake, Eigen3",
                cost: "от 510 тыс. руб."
            },
        ]
    }
    render(){
        return(
            <div className="mobile">
                <img className="main_logo" src={signal_bit}/>
                <div className="right_hand">
                    <div className="text">
                        <h3 className="title">Ваш надежный партнер в безопасности</h3>
                        <p>
                            Мы специализируемся на обеспечении безопасности
                            в области робототехники и киберфизических систем. Наша команда 
                            разрабатывает интегрированные решения, 
                            которые помогают предотвратить риски и 
                            обеспечить безопасность во всех аспектах 
                            работы с роботехническими комплексами.
                        </p>
                    </div>
                    <img src={right_hand}/>
                </div>
                <div className="left_hand">
                    <div>
                        <img src={left_hand}/>
                        <h3 className="title">
                            Наша цель – обеспечить бесперебойное функционирование и 
                            безопасность критической инфраструктуры и киберфизических 
                            систем
                        </h3>
                    </div>
                    <p>
                        С нами вы можете быть уверены в 
                        надежной работе своих активов. 
                        Мы ставим безопасность на первое 
                        место и стремимся быть вашим надежным 
                        партнером в области безопасности 
                        робототехники.
                    </p>
                </div>
                <div className="research">
                    <h3 className="title">Чем мы занимаемся</h3>
                    {this.research_img.map((item, index) => {
                        return <div className="item" key={index}>
                            <img src={item}/>
                            <div>
                                <h3>{this.research_title[index]}</h3>
                                <p>{this.research_text[index]}</p>
                            </div>
                        </div>
                    })}
                </div>
                <div className="price_mob">
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
                <div className="squeaker">
                    <h3 className="title">
                        «Канарейка» для обнаружения аномалий и радиоуправляемых 
                        устройств 
                    </h3>
                    <div className="imgs">
                        <img className="left" src={sq_img_left}/>
                        <img className="middle" src={sq_img_middle}/>
                        <img className="right" src={sq_img_right}/>
                    </div>
                    <p>
                        <span className="key_word">Это интеллектуальная система детектирования 
                        и противодействия беспилотным 
                        автоматизированным системам (БАС) 
                        для объектов критической информационной 
                        инфраструктуры.</span> Система с помощью сенсора 
                        сканирует наиболее популярные диапазоны, в 
                        которых работают БАС, и на основе анализа 
                        радиочастотного дисапазона и спектра определяет 
                        тип БАС, который был зафиксирован.
                    </p>
                    <p>
                        Определение конкретного типа БАС позволяет 
                        выбрать наилучший сценарий противодействия, 
                        а также сделать предположение о том, какую 
                        цель преследует нарушитель. 
                    </p>
                    <p>
                        Модуль противодействия реализует сценарии 
                        атак на БАС, чтобы предотвратить приченение 
                        вреда объекту критической информационной 
                        инфраструктуры.
                    </p>
                    <p>
                        Модульность системы позволяет проводить 
                        анализ окружающей среды в режиме реального 
                        времени, а также своевременно применять 
                        контрмеры для повышения защиты и безопасности 
                        защищаемого объекта. 
                    </p>
                </div>
                <video className="demonstration" preload="auto" autoPlay loop muted playsInline>
                    <source src="./demonstration.mp4" type="video/mp4"/>
                </video>
                <div className="params">
                    <h3 className="title">
                        Характерные параметры системы
                    </h3>
                    {this.params_img.map((item, index) => {
                        return <div key={index} className="item">
                            <img src={item}/>
                            <p>
                                {this.params_text[index]}
                            </p>
                        </div>
                    })}
                </div>
                <div className="contacts">
                    <h3 className="title">Остались вопросы?</h3>
                    <div className="email">
                        <span>Напишите нам на почту</span>
                        <img src={email}/>
                        <a href="mailto:sigbit@yandex.ru">sigbit@yandex.ru</a>
                    </div>
                    <p className="to_user">
                        Мы свяжемся с вами на следующий рабочий день 
                        и ответим на все интересующие вопросы.
                    </p>
                </div>
                <img className="last_img" src={last_img}/>
                <div className="partners">
                    <h3 className="title">Наши партнеры</h3>
                    <img src={logo_sfedu} className="sfedu"/>
                    <img src={logo_ictis} className="ictis"/>
                    <img src={logo_integra} className="integra"/>
                </div>
                <div className="official_info">
                    <h3 className="title_of">Общество с ограниченной ответственностью "СИГНАЛ БИТ"</h3>
                    <p className="item_of">ИНН 6154166039</p>
                    <p className="item_of">ОГРН 1236100028493</p>
                    <p className="item_of">Россия, г. Таганрог</p>
                </div>
                <p className="footer">
                    Проект выполнен при поддержке Фонда содействия развитию
                    малых форм предприятий в научно-технической сфере
                </p>
            </div>
        )
    }
}

export default MobileVersion