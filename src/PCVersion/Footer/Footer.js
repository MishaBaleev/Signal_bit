import React, {Component} from "react";
import "./footer.css";

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <span>
                    Проект выполнен при поддержке Фонда содействия развитию
                    малых форм предприятий в научно-технической сфере
                </span>
            </div>
        )
    }
}

export default Footer