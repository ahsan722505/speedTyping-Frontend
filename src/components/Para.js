import styles from "./Para.module.css";
const Para=(props)=>{
    return(
        <div className={styles.paraCont}>
                <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <input type="text" placeholder="write here"/>
            </div>
    )
}
export default Para;