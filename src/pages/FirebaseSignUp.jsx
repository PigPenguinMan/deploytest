/** firebase auth회원가입
 */
// background 어둡게하기
import { useContext, useEffect, useState } from "react";
import { firebaseAuth,db, } from "../Firebase";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {setDoc, collection, doc, getDocs} from "firebase/firestore"
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../data/DataContext";

const FirebaseSignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkpassword, setCheckpassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const usersCollectionRef = collection(db, "users")

    const createUser = async () => {
        try{
            const newUser = await createUserWithEmailAndPassword(firebaseAuth, email, password);
            const user = newUser.user;
            const data = await getDocs(usersCollectionRef);
            await setDoc(doc(db, "users", user.uid), {...data.docs[0].data(), uid:user.uid, name:name});
            navigate("/home")
            localStorage.setItem("currentUser", user.uid);
            data.action.setIsLoginned(true)  
        } catch (err) {
            const errorCode = err.code;
            if(!email) {
                alert("이메일을 입력해주세요")
            } else if(!password) {
                alert("비밀번호를 입력해주세요")
            } else if(errorCode == "auth/weak-password"){
                alert("비밀번호를 6자리 이상 입력해주세요")
            }  else if(errorCode == "auth/invalid-email") {
                alert("이메일형식을 지켜주세요")
            } else if(errorCode == "auth/email-already-in-use") {
                alert("이미 사용중인 이메일 입니다")
            }
        }  
    }


    return (  
        <div className="F_login_box">
            <h2 className="F_login_title">회원가입</h2>
            <form className="F_input_box" onSubmit={(e)=>{e.preventDefault();createUser()}}>
                <p>이메일</p>
                <input type="text" placeholder="example@nav.com" onChange={(e)=>{setEmail(e.target.value)}}/>
                <p>비밀번호</p>
                <input type="password" onChange={ (e)=>{setPassword(e.target.value)}} />
                <p>이름</p>
                <input type="text" placeholder="이름" onChange={ (e)=>{setName(e.target.value)}} />
                <input className="F_submit" type="submit" value="회원가입" />
                <Link to="/firebaselogin" className="F_signup_btn">로그인</Link>
            </form>
        </div>
    );
}

export default FirebaseSignUp;