import { useEffect, useState } from "react";
import { firebaseAuth,} from "../Firebase";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {setDoc, collection, doc, getDocs} from "firebase/firestore"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../data/DataContext";
import '../css/FirebaseLogin.css'


const FirebaseLogin = () => {
    const data = useContext(DataContext);
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const createUser = async () => {
        try {
            const newUser = await signInWithEmailAndPassword(firebaseAuth, email, password);
            const user = newUser.user;
            localStorage.setItem("currentUser", user.uid);
            data.action.setIsLoginned(true);
            navigate("/home") 
        } catch(err) {
            const errorCode = err.code;
            if(!email){
                alert("이메일을 입력해주세요")
            } else if(!password) {
                alert("비밀번호를 입력해주세요")
            } else if(errorCode == "auth/invalid-email") {
                alert("이메일형식을 지켜주세요")
            } else if(errorCode == "auth/wrong-password") {
                alert("비밀번호가 틀립니다")
            } else if(errorCode == "auth/user-not-found") {
                alert("가입되지 않은 이메일입니다")
            }
        }
        
    }

    return (  
        <div className="F_login_box">
            <h2 className="F_login_title">로그인</h2>
            <form className="F_input_box" onSubmit={(e)=>{e.preventDefault(); createUser()}}>
                <p>이메일</p>
                <input type="text" placeholder="이메일" onChange={(e)=>{setEmail(e.target.value)}}/>
                <p className="password_input">비밀번호</p>
                <input type="password" onChange={ (e)=>{setPassword(e.target.value)}} />
                <input className="F_submit_login" type="submit" value="로그인" />
                <Link to="/usersignup" className="F_signup_btn">회원가입</Link>
            </form>
        </div>
    );
}
export default FirebaseLogin;