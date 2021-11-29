import styles from "./Button.module.css"
const Button=(props)=>{
    return <button type={props.type} style={{...props.styles}} onClick={props.clickHandler} className={styles.btn}>{props.children}</button>


}
export default Button;