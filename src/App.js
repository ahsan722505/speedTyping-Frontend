
import { useEffect,useState } from "react";
import HomePage from "./components/HomePage";
import Comp from "./components/Comp";
import { useSelector,useDispatch } from "react-redux";
import Modal from "./components/Modal";
import NamePrompt from "./components/NamePrompt";
import { uiActions } from "./store/ui-slice";



let username="";


function App() {
  const [hostMode,setMode]=useState(false);
  const [roomId,setId]=useState("");
  
  const dispatch=useDispatch();
  const setHostMode=(mode)=>{
    setMode(mode);

  }
  const setRoomId=(id)=>{
    setId(id);
  }
  
  const nameHandler=(name)=>{
    if(name.trim().length === 0) return;
    username=name;
    dispatch(uiActions.setUsername({username : name}));
    toggleModal();
    
  }
  const toggleModal=()=>{
    if(username.trim().length === 0) return;
    setShowModal(state=> !state);
  }
  const [showModal,setShowModal]=useState(true);
  const uiState=useSelector(state=>state.ui);
  
  return (
    <div className="App">
      { uiState.showHome && <HomePage setRoomId={setRoomId} setHostMode={setHostMode} />}
      { uiState.showComp && <Comp hostMode={hostMode} roomId={roomId} />}
      { showModal && <Modal closeHandler={toggleModal}><NamePrompt nameHandler={nameHandler}  /></Modal>}
    
      
    </div>
  );
}

export default App;
