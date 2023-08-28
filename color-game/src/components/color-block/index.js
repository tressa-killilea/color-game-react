import "./style.css";

function ColorBlock(props){
    var styleStr = `rgb(${props.color[0]}, ${props.color[1]}, ${props.color[2]})`;

    return (
        <div className="color_block" style={{backgroundColor: styleStr}}></div>
    );
}

export default ColorBlock;