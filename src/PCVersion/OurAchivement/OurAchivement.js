import React, {Component} from "react";
import "./OurAchivement.scss";


import d1 from './img/d1.jpg';
import d2 from './img/d2.jpg';
import d3 from './img/d3.jpg';
import d4 from './img/d4.jpg';
import d5 from './img/d5.jpg';
import d6 from './img/d6.jpg';
import d7 from './img/d7.jpg';


class OurAchivement extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="OurAchivement">
                <div>
                <b>Наши достижения</b>
                </div>
        
                <div className="bodyUp">
                <img src={d1}/>
                <img src={d2}/>
                <img src={d3}/>
                <img src={d4}/>
                <img src={d5}/>
                </div>
                <div className="bodyDown">
                <img src={d6}/>
                <img src={d7}/>
                </div>
            </div>
    
        )
    }
}

export default OurAchivement