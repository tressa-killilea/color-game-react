import React from "react";
import ColorBlock from "../../components/color-block";
import Slider from "../../components/slider";
import Button from "../../components/button";
import Result from "../../components/results";
import './style.css';

function generateColor(){
    const red = getRandomNum();
    const green = getRandomNum();
    const blue = getRandomNum();

    return [red, green, blue];
  }

function getRandomNum(){
    return Math.floor(Math.random() * 255);
}

class Home extends React.Component{
    state={
        guess_color: [0,0,0],
        key_color: generateColor(),
        isFinished: false
    }

    handleCallback = (val, color) => {
        var tempColor = this.state.guess_color;
        if(color === "red") {tempColor[0] = val;}
        else if (color === "green") {tempColor[1]= val;}
        else if (color === "blue") {tempColor[2] = val;}

        this.setState({guess_color: tempColor})
    }

    onFinishClick = () => {
        this.setState({isFinished: true});
    }

    playAgain = () => {
        this.setState({key_color: generateColor()});
        this.setState({isFinished: false});
    }

    render() {
        return(
            <div>
                <div className="game_wrapper">
                    <div className="key_wrapper">
                        <h4>Goal</h4>
                        <ColorBlock color={this.state.key_color}></ColorBlock>
                    </div>
                    <div className="guess_wrapper">
                        <h4>Guess</h4>
                        <ColorBlock color={this.state.guess_color}></ColorBlock>
                    </div>
                    <div className="sliders">
                        <Slider color="red" callback={this.handleCallback} disabled={this.state.isFinished}></Slider>
                        <Slider color="green" callback={this.handleCallback} disabled={this.state.isFinished}></Slider>
                        <Slider color="blue" callback={this.handleCallback} disabled={this.state.isFinished}></Slider>
                    </div>
                </div>          
                {!this.state.isFinished && <div className="btn">
                    <Button text="Finish" onClick={this.onFinishClick}></Button>
                </div>}
                {this.state.isFinished && <div className="btn">
                    <Button text="Play Again" onClick={this.playAgain}></Button>
                </div>}
                <div>
                    {this.state.isFinished && <Result goal={this.state.key_color} guess={this.state.guess_color}></Result>}
                </div>
            </div>
        );
    }
}

export default Home;