import React, {Component, useState } from "react";
import "./header.scss";
import logo from "./img/logo.png";

function Header(props){


  
        return(
            <div className="header">
                <img className="logo" src={logo} onClick={() => {props.changeCMP(0)}}/>
                <div className="modules">
                    <a href="#" onClick={() => {props.changeCMP(1)}}>Направления деятельности</a>
                    <a href="#" onClick={() => {props.changeCMP(3)}}>Услуги</a>
                    <a href="#" onClick={() => {props.changeCMP(5)}}>О нас</a>
                    {/* <a href="#" onClick={() => {props.changeCMP(2)}}>Канарейка</a>
                    <a href="#" onClick={() => {props.changeCMP(7)}}>Сенсор</a>
                    <a href="#" onClick={() => {props.changeCMP(6)}}>Полётный контроллер</a> */}
                    <a href="#" onClick={() => {props.changeCMP(8)}}>Наши достижения</a>
                   

                    <div className="dropdown">
        <a className="dropbtn">Продукты</a>
        <div className="dropdown-content">
        <a href="#" onClick={() => {props.changeCMP(2)}}>Канарейка</a>
                    <a href="#" onClick={() => {props.changeCMP(7)}}>Сенсор</a>
                    <a href="#" onClick={() => {props.changeCMP(6)}}>Полётный контроллер</a>
        </div>
    </div>

                </div>
                <button className="contact_us" onClick={() => {props.changeCMP(4)}}>Свяжитесь с нами</button>
            </div>
        )
    
}

export default Header