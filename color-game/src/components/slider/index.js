import ReactSlider from "react-slider";
import "./style.css";


function Slider(props){
    return(
        <div className="slider_wrapper">
            <div className="color_name">{props.color}</div>
            <ReactSlider
                className="cust_slider"
                trackClassName="cust_slider-track"
                thumbClassName="cust_slider-thumb"
                />
        </div>
    );
}

export default Slider;