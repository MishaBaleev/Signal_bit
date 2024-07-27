import React, {Component} from "react";
import "./App.css";
import "./mixin.scss";
import Header from "./PCVersion/Header/Header";
import Main from "./PCVersion/Main/Main";
import FieldsOfActivity from "./PCVersion/FiledsOfActivity/FieldsOfActivity";
import Creations from "./PCVersion/Creations/Creations";
import PriceList from "./PCVersion/PriceList/PriceList";
import Footer from "./PCVersion/Footer/Footer";
import Callback from "./PCVersion/Callback/Callback";
import AboutUs from "./PCVersion/AboutUs/AboutUs";
import CreateFC from "./PCVersion/CreateFC/CreateFC";
import CreateSensor from "./PCVersion/CreateSensor/CreateSensor";

import OurAchivement from "./PCVersion/OurAchivement/OurAchivement";

import MobileVersion from "./MobileVersion/MobileVersion";

class App extends Component{
  constructor(props){
    super(props)

    this.PC_CMPs = [
      <Main/>,
      <FieldsOfActivity/>,
      <Creations/>,
      <PriceList/>,
      <Callback/>,
      <AboutUs/>,
      <CreateFC/>,
      <CreateSensor/>,
      <OurAchivement/>
    ]

    this.state = {
      cur_CMP: this.PC_CMPs[0]
    }

    this.changeCMP = this.changeCMP.bind(this)
  }

  changeCMP(value){
    this.setState(state => ({
      cur_CMP: this.PC_CMPs[value]
    }))
  }

  render(){
    let user_agent = navigator.userAgent.toLocaleLowerCase()
    let is_pc = (user_agent.search("iphone") > -1)?false:((user_agent.search("android") > -1)?false:true)
    return(
      <div className={"app "+(is_pc == true ? "" : "mobile")}>
        { 
          is_pc == true ? 
          <div>
              <Header changeCMP={this.changeCMP}/> 
              {this.state.cur_CMP}
              <Footer/>
          </div> :
          <MobileVersion/>
        }
      </div>
    )
  }
}

export default App