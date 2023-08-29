import "./style.css";
import React from "react";

class Result extends React.Component{
    getPercentage(){
        var guess = this.props.guess;
        var goal = this.props.goal;
    
        var diffRed = (guess[0] - goal[0]) / 255;
        var diffGreen = (guess[1] - goal[1]) / 255;
        var diffBlue = (guess[2] - goal[2]) / 255;

        var perc = (diffRed + diffGreen + diffBlue) / 3 * 100;
        if(perc < 0) perc = perc * -1;
        perc = Math.round(perc);
        return 100 - perc;
        
    }

    render(){
        return(
            <div>
                <div>
                    <p>{`Your Guess: ${this.props.guess}`}</p>
                    <p>{`Answer: ${this.props.goal}`}</p>
                </div>
                <div>
                    <p className="percentage">{`${this.getPercentage()}%`}</p>
                </div>
            </div>
        );
    }
}

export default Result;