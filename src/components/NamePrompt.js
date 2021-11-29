import styles from "./NamePrompt.module.css";
import Button from "./Button"
import {useState} from "react";

import Input from "./Input"
const NamePrompt=(props)=>{
    const [name,setName]=useState("");
    const sendName=(e)=>{
        e.preventDefault();
        props.nameHandler(name);
    }
    const changeName=(e)=>{
        setName(e.target.value)
    }
    return(
        <form onSubmit={sendName} className={styles.nameCont}>
            <Input value={name} onChange={changeName} specs={{type : "text" , placeholder : "Enter your name"}}/>
            <Button clickHandler={sendName} styles={{width : "20%"}}  type="submit">Go</Button>

        </form>
    )
}
export default NamePrompt;