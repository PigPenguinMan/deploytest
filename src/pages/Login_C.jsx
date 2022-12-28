import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../data/DataContext";
import '../css/Login_C.css'

import { db } from "../Firebase";
import {setDoc,doc,collection,getDocs} from "firebase/firestore"


const Login_C = () => {
    const {action} = useContext(DataContext)
    const data = useContext(DataContext)
    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [gender,setGender] = useState("남");
    const navigate = useNavigate()

    const [active,setActive] = useState(true);
    const handleActive = () => {
        setActive(true);
    }
    const handleActiveF = () => {
        setActive(false);
    }
    

    const loginInfant = () => {
        if (!name) {
            return alert("이름을 입력하세요.");
        } else if(!age) {
            return alert("생년월일을 선택해주세요.");
        } else {
            action.setInfant({name: name, age: age, gender: gender})
            navigate('/main');
            data.action.setLogin(true); 
        }
        
    }
    function getToday(){
        const date = new Date();
        const year = date.getFullYear();
        const month = ("0" + (1 + date.getMonth())).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        return year + "-" + month + "-" + day;
    }
    function get71MonthAgo(){
        const date = new Date();
        const year = (date.getFullYear()-5);
        const month = ("0" + (date.getMonth()-10)).slice(-2);
        const day = ("0" + (date.getDate()+1)).slice(-2);
        return year + "-" + month + "-" + day;
    }
    return (  
        <div className="first_box">
            <h2 className="login_title">우리아이 등록</h2>
            <div className="ilogin_box">
                <div className="login_form">
                    <form onSubmit={()=>{loginInfant()}}>
                        <label >이름</label>
                        <input type="text" className="infant_name_input" placeholder="  이름" onChange={
                            (e)=>{
                                setName(e.target.value)
                            }
                        } />
                        <label >생년월일</label>
                        <input type="date" className="infant_date_input" min={get71MonthAgo()} max={getToday()} pattern="yyyy-MM-dd" onChange={
                            (e)=>{
                                setAge(e.target.value)
                            }
                        } /> 
                        <button className={ active ? "active male_btn" : "male_btn"} onClick={(e)=>{
                            e.preventDefault();
                            handleActive();
                            setGender("남")
                        }}>남성</button>
                        <button className={ active ? "female_btn" : "active female_btn"} onClick={(e)=>{
                            e.preventDefault();
                            handleActiveF();
                            setGender("여")
                        }}>여성</button>
                        <input className="infant_submit" type="submit" value="작성" />
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Login_C;
