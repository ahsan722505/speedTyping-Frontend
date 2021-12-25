import styles from "./Progress.module.css";
import { Fragment } from "react";
import { useRef,useEffect } from "react";
import { uiActions } from "../store/ui-slice";
import { useDispatch } from "react-redux";
const Progress=(props)=>{
    const dispatch=useDispatch();

    const carRef=useRef();
    const proRef=useRef();
    useEffect(()=>{
        const proStyles=getComputedStyle(proRef.current);
        const proPixels=Number(proStyles.width.slice(0,-2));
        const carStyles=getComputedStyle(carRef.current);
        const carPixels=Number(carStyles.width.slice(0,-2));
        
        const percentage =Math.ceil( (carPixels / proPixels)*100) ;
        dispatch(uiActions.setCarWidth(percentage));
        
    },[])
    return(
        

        
        <div className={styles.progressCont}>

            
                <div ref={proRef} className={styles.progress}>
                    <div ref={carRef} className={styles.avatar} style={{...props.styles}}>
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