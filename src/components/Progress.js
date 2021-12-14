import styles from "./Progress.module.css";
import { Fragment } from "react";
const Progress=(props)=>{
    return(
        

        
        <div className={styles.progressCont}>

            
                <div className={styles.progress}>
                    <div className={styles.avatar} style={{...props.styles}}>
                        <div className={styles.name}>{props.name}</div>
                        <div  className={styles.car}>
                            <img src={props.car}/>
                        </div>
                    </div>
                </div>
                <div className={styles.statCont}>
                    
                        <span className={styles.pos}>Position: {props.position ? `${props.position} place` : ""}</span>
                        <span className={styles.wpm}>wpm: {props.position ? `${Math.trunc(props.wpm)}` : ""}</span>
                    
                
                </div>
        </div>
                
            
    )
}
export default Progress;