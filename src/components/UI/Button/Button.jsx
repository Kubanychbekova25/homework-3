import "./button.css"

const Button =(props)=>{
    return(
        <button className="btn" onClick={props.onClick}>{props.title}</button>
    )
}
export default Button