import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class Rating extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <div className="star-container">
                    <FontAwesomeIcon icon={faStar} className="star"/> 
                    <FontAwesomeIcon icon={faStar} className="star"/> 
                    <FontAwesomeIcon icon={faStar} className="star"/> 
                    <FontAwesomeIcon icon={faStar} className="star"/> 
                    <FontAwesomeIcon icon={faStar} className="star"/> 
                </div>
            </>
        );
    }
}

export default Rating;