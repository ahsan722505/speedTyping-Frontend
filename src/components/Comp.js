import styles from "./Comp.module.css"
import car from "../assests/basic-orange.svg";
import Progress from "./Progress";
import Para from "./Para";
import Modal from "./Modal";
import Loader from "./Loader";
import Uid from "./Uid";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Comp=(props)=>{
    const username=useSelector(state=> state.ui.username);
    const socket=useSelector(state=> state.ui.socket);
    const [showModal,setShowModal]=useState( props.hostMode ? true : false);
    const [showLoader,setShowLoader]=useState(true);
    const [roomId,setRoomId]=useState(props.roomId ? props.roomId : "");
    const [players,setPlayers]=useState([]);
    const closeHandler=()=>{
        setShowModal(state=> !state);
    }
    useEffect(()=>{
        if(props.hostMode){
            socket.emit("create-room",username);
            socket.on("take-id",(id)=>{
                setRoomId(id);
                setShowLoader(false);
            })
        }
        else{
            socket.emit("give-players",roomId);
        }
        socket.on("take-players",players=>{
            let mPlayers=players.map(player=>{
                if(player.id == socket.id){
                    player.name="You";
                }
                return {...player , wpm : 0}
            });
            setPlayers(mPlayers);
        })
        socket.on("update-players",player=>{
            setPlayers(state=> [...state,{name : player.name , id : player.id , wpm : 0}])
        })
    },[])
    return(
        <div>
            <h1 className={styles.heading}>Waiting for competitors</h1>
            {players.map(each=> <Progress car={car} name ={each.name} wpm={each.wpm} key={each.id}/> )}
            <Para/>
            { showModal && <Modal closeHandler={closeHandler}>
                { !showLoader && <Uid id={roomId}/>}
                { showLoader && <Loader/>}
                </Modal>}

            
            </div> 

    )

}
export default Comp;

