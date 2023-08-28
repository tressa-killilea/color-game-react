import ReactSlider from "react-slider";
import "./style.css";


function Slider(props){
    var color_code = "#fc7e7e";
    var color_initial = "R";

    if(props.color === 'green') {
        color_code = "#94ff94";
        color_initial = "G";
    }
    else if(props.color === 'blue') {
        color_code = "#879bff";
        color_initial = "B";
    }

    return(
        <div className="slider_wrapper">
            <div className="color_name" style={{backgroundColor: color_code}}>{color_initial}</div>
            <ReactSlider
                className="cust_slider"
                trackClassName="cust_slider-track"
                thumbClassName="cust_slider-thumb"
                />
        </div>
    );
}

export default Slider;