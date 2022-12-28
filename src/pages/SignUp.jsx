import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../data/DataContext";


const SignUp = () => {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [username, setUsername] = useState('');
    const [pwConfirm, setPwConfirm] = useState('');
    const data = useContext(DataContext);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = data.state.user.concat({ userId:userId, userPw:userPw, username:username });
        data.action.setUser(newUser);
        alert("회원가입이 완료되었습니다. 다시 로그인해주세요");
        navigate('/home');
        localStorage.setItem(userId,userPw);
    };

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input
                name="userId"
                value={userId}
                placeholder="사용할 아이디"
                onChange={(e) => setUserId(e.target.value)}
                /> <br /><br />
                <input
                name="username"
                value={username}
                placeholder="이름을 입력해주세요"
                onChange={(e) => setUsername(e.target.value)}
                /> <br /><br />
                <input
                type="password"
                name="userPw"
                value={userPw}
                placeholder="비밀번호 입력"
                onChange={(e) => setUserPw(e.target.value)}
                /> <br />
                <input
                type="password"
                name="passwordConfirm"
                value={pwConfirm}
                placeholder="비밀번호 확인"
                onChange={(e) => setPwConfirm(e.target.value)}
                /> <br />
                {userPw !== pwConfirm && <p>비밀번호가 일치하지 않습니다.</p>}
                <input type="submit" />
            </form>
        </div>
    );
}

export default SignUp;