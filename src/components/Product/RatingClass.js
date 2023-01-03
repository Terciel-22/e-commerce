import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class Rating extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render(){
        const MAX_RATING = 5;
        const rating = Math.round(this.props.rating);
        const emptyStar = MAX_RATING - rating;
        return(
            <>
                <div className="star-container">
                    {new Array(rating).fill(null).map((e,index) => ( 
                        <FontAwesomeIcon key={index} icon={faStar} className="star filled"/>
                    ))}
                    {new Array(emptyStar).fill(null).map((e,index) => ( 
                        <FontAwesomeIcon key={index} icon={faStar} className="star"/>
                    ))}
                </div>
            </>
        );
    }
}

export default Rating;