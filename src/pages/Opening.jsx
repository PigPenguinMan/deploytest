import { useNavigate } from 'react-router-dom';
import '../css/Opening.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Opening = () => {
    const navigate = useNavigate()
    return (  
        <div className="opening_box">
            <div className='logo_box'>
                <img className="logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} />
                <h2 className='logo_title'>마이<br/>닥터</h2>
            </div>
            <div className='opening_SingUp_btn' onClick={()=>{navigate('/usersignup')}}>
                <a href='#' className='SingUp_a'>SignUp</a>
                <div className='fontAwesom_box'><FontAwesomeIcon className='fontAwesom' icon={faArrowUpRightFromSquare} /></div>
            </div>
            <p className='copyright'>Copyright2022.teamB All rights reserved.</p>         
        </div>
    );
}
 
export default Opening;