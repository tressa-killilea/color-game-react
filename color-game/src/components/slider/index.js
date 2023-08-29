import ReactSlider from "react-slider";
import "./style.css";
import React from "react";

class Slider extends React.Component{

    state={
        value: 0
    }

    onTrigger = (event) => {
        this.props.callback(event);
    }

    onSliderChange(val){
        this.setState({value: val});
        this.onTrigger(val);
    }

    render(){
        var color_code = "#fc7e7e";
        var color_initial = "R";
    
        if(this.props.color === 'green') {
            color_code = "#94ff94";
            color_initial = "G";
        }
        else if(this.props.color === 'blue') {
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
                    onChange={(val) => this.onSliderChange(val)}
                    min={0}
                    max={255}
                    defaultValue={0}
                    />
                <div className="color_value">{this.state.value}</div>
            </div>
        );
    }
    
}

export default Slider;