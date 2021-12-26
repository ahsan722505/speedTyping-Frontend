import styles from "./Para.module.css";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { useSelector } from "react-redux";
let currentCharacters=0;
let devCurrentCharacters=0;
const Para=(props)=>{
    
    const socket=useSelector(state=>state.ui.socket);
    const totalCharacters=useSelector(state=> state.ui.totalCharacters);
    const startingTime=useSelector(state=>state.ui.startingTime);
    const [inputText,setInputText]=useState("");
    const [currWord,setCurrentWord]=useState(0);
    const [currWordText,setCurrWordText]=useState("");
    const dispatch=useDispatch();
    
    
    const wordRefs=useRef([]);
    const str="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    dispatch(uiActions.setTotalCharacters(str.length));
    let temp="";
    let strArr=[];
    for(let i=0,j=-1,k=0 ; i < str.length ; i++){
        if(str[i] === ' '){
            strArr.push(<span ref={el=> wordRefs.current[j]=el}>{temp}</span>);
            strArr.push(<span> </span>);
            temp="";
            j=j+1;
            
        }else{
            temp=temp.concat(str[i]);
            if(i === str.length -1){
                strArr.push(<span ref={el=> wordRefs.current[j+1]=el} >{temp}</span>)  
            } ;
        }
        
    }
    useEffect(()=>{
        if(currWord!=0) wordRefs.current[currWord-1].classList.remove(`${styles.green}`);
        wordRefs.current[currWord].classList.add(`${styles.green}`);
        
        setCurrWordText(wordRefs.current[currWord].innerHTML);
    },[currWord])
    const right=()=>{
        wordRefs.current[currWord].classList.remove(`${styles.red}`);
        wordRefs.current[currWord].classList.add(`${styles.green}`);
    }
    const wrong=()=>{
        wordRefs.current[currWord].classList.remove(`${styles.green}`);
        wordRefs.current[currWord].classList.add(`${styles.red}`);
    }
    const changeInputHandler=(e)=>{   
        let str=e.target.value;
       
        if(str === currWordText && (currentCharacters + currWordText.length) === totalCharacters){
            
            setInputText("");
            props.toggleStartGame();
            currentCharacters+=currWordText.length;
            socket.emit("take-characters",{id : socket.id , currentCharacters,roomId : props.roomId});
            
            wordRefs.current[currWord].classList.remove(`${styles.green}`);
            const time=((new Date() - startingTime)/1000)/60;
            const wpm=(totalCharacters/5)/time;
            socket.emit("complete",{id : socket.id , wpm : wpm,roomId : props.roomId});

        }
        else if(str.charAt(str.length-1)=== ' ' && str.slice(0,str.length-1) === currWordText){
            // next word
            devCurrentCharacters++;
            currentCharacters+=currWordText.length+1;
            socket.emit("take-characters",{id : socket.id , currentCharacters,roomId : props.roomId});  

            setCurrentWord(state=>state+1);
            setInputText("");

        }else{
            if(str === currWordText.slice(0,str.length)){
                right();
                devCurrentCharacters++;
            } 
            else
                wrong();
                setInputText(e.target.value);
        }
    }
    return(
        <div className={styles.paraCont}>
                <p className={styles.para}>
                    {strArr}

                </p>
                <input disabled={!props.disable} type="text" placeholder="write here" value={inputText} onChange={changeInputHandler}/>
                
            </div>
    )
}
export default Para;