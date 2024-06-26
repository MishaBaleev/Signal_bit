import React, {Component} from "react";
import "./header.scss";
import logo from "./img/logo.png";

class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="header">
                <img className="logo" src={logo} onClick={() => {this.props.changeCMP(0)}}/>
                <div className="modules">
                    <a href="#" onClick={() => {this.props.changeCMP(1)}}>Сферы деятельности</a>
                    <a href="#" onClick={() => {this.props.changeCMP(2)}}>Разработки</a>
                    <a href="#" onClick={() => {this.props.changeCMP(3)}}>Услуги</a>
                </div>
                <button className="contact_us" onClick={() => {this.props.changeCMP(4)}}>Свяжитесь с нами</button>
            </div>
        )
    }
}

export default Header