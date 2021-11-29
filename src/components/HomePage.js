import styles from "./HomePage.module.css";
import Button from "./Button";
import Input from "./Input";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
const HomePage=(props)=>{
    const socket=useSelector(state=>state.ui.socket);
    const username=useSelector(state=>state.ui.username);
    const dispatch=useDispatch();
    const [id,setId]=useState("");
    const updateId=(e)=>{
        setId(e.target.value);
    }
    useEffect(()=>{
        socket.on("proceed",(proceed)=>{
            if(proceed){
                
                props.setRoomId(id);
                dispatch(uiActions.showComp());
            }else{
                alert("invalid id");
            }
        })
        return ()=>{
            socket.off("proceed");
        }

    },[id])
    const goClickHandler=()=>{
            

             
            socket.emit("join-room",{roomId : id , name : username});   
            
    }
    const friendsClickHandler=()=>{
        
        props.setHostMode(true);
        
        dispatch(uiActions.showComp());
    }
    return( <div className={styles.home}>
        <Button clickHandler={friendsClickHandler}>Play with friend(s)</Button>
        <div className={styles.idCont}>
            <Input value={id} specs={{type : "text" , placeholder : "Enter id"}} onChange={updateId}/>
            <Button type="submit" clickHandler={goClickHandler}>Go</Button>

        </div>
    </div>)

}
export default HomePage;