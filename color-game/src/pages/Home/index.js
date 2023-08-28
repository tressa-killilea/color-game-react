import ColorBlock from "../../components/color-block";
import Slider from "../../components/slider";
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

var key_color = generateColor();
var guess_color = [0, 0, 0];

function Home(){
    return(
        <div className="wrapper">
            <div className="key_wrapper">
                <h4>Goal</h4>
                <ColorBlock color={key_color}></ColorBlock>
            </div>
            <div className="guess_wrapper">
                <h4>Guess</h4>
                <ColorBlock color={guess_color}></ColorBlock>
            </div>
            <div className="sliders">
                <Slider></Slider>
            </div>
        </div>
    );
}

export default Home;