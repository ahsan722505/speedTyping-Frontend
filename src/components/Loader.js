
import styles from "./Loader.module.css"
import CircularProgress from '@material-ui/core/CircularProgress';
const Loader=()=>{
    return(
        <div className={styles.loadCont}>
            <CircularProgress/>
        </div>
    )
}
export default Loader;