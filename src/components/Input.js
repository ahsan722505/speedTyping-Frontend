import styles from "./Input.module.css";
const Input=(props)=>{
    return(
        <input value={props.value} onChange={props.onChange} style={{...props.styles}} {...props.specs} className={styles.input}/>
    )
}
export default Input;