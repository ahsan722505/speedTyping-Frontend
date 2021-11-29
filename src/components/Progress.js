import styles from "./Progress.module.css";
const Progress=(props)=>{
    return(
        <div className={styles.progressCont}>

            
                <div className={styles.progress}>
                    <div className={styles.avatar}>
                        <div className={styles.name}>{props.name}</div>
                        <div  className={styles.car}>
                            <img src={props.car}/>
                        </div>
                    </div>
                </div>
                <div className={styles.statCont}>
                    {/* <span className={styles.pos}>1st place</span> */}
                    <span className={styles.wpm}>{props.wpm} wpm</span>
                </div>
        </div>
            
    )
}
export default Progress;