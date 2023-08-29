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

    getGradient(){
        var perc = this.getPercentage();
        var colors;
        if(perc > 80){
            colors = {
                inner: "#56bf56",
                outer: "#017801"
            }
        } else if(perc > 60){
            colors = {
                inner: "#dfe079",
                outer: "#bfc21f"
            }
        } else{
            colors = {
                inner: "#d9685b",
                outer: "#c91f0c"
            }
        }
        return `radial-gradient(${colors.inner}, ${colors.outer})`;
    }

    render(){
        return(
            <div className="results_wrapper">
                <div>
                    <table>
                       <tbody>
                       <tr>
                            <th>Your Guess</th>
                            <th>Answer</th>
                        </tr>
                        <tr>
                            <td className="score red">{this.props.guess[0]}</td>
                            <td className="score red">{this.props.goal[0]}</td>
                        </tr>
                        <tr>
                            <td className="score green">{this.props.guess[1]}</td>
                            <td className="score green">{this.props.goal[1]}</td>
                        </tr>
                        <tr>
                            <td className="score blue">{this.props.guess[2]}</td>
                            <td className="score blue">{this.props.goal[2]}</td>
                        </tr>
                       </tbody>
                    </table>
                </div>
                <div className="percentage" style={{background: this.getGradient()}}>
                    <p>{`${this.getPercentage()}%`}</p>
                </div>
            </div>
        );
    }
}
//    background: radial-gradient(#56bf56, #017801);

export default Result;