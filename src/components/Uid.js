import styles from "./Uid.module.css";
import Button from "./Button";
import { useRef } from "react";

const Uid=(props)=>{
    const inRef=useRef();
    const copyId=()=>{
        const inEl=inRef.current;
        inEl.select();
        inEl.setSelectionRange(0, 99999);
        // navigator.clipboard.writeText(inEl.value);
        document.execCommand("copy");
    }
    return(
        <div className={styles.uid}>
            <h3 style={{color : "green"}}>share this id with your friends</h3>
            <input ref={inRef} type="text" value={props.id}/>
            <Button clickHandler={copyId} styles={{padding : " .2rem .6rem"}}><i class="fas fa-clipboard"></i> copy id</Button>

        </div>
    )
}
export default Uid;