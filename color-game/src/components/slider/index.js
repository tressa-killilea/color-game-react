import ReactSlider from "react-slider";

function Slider(props){
    return(
        <div className="slider_wrapper">
            <div className="color_name">{props.color}</div>
            <ReactSlider></ReactSlider>
        </div>
    );
}

export default Slider;