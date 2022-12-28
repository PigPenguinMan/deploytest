import SearchBar_Home from "../components/SearchBar";
import Weather from "../components/Weather";

import HealthInfo from '../components/HealthInfo'
import { useNavigate } from "react-router-dom";
import style from '../css/base.module.css'
const HomeT = () => {
    const navigate = useNavigate();
    const navQustion = ()=>{
        navigate('/question');
    }
    
    return ( 
        <div className="Home"> 
            <div className={style.Box_L_G}>검색바 

            </div>
            <br/>
            <div className={style.Box_L_O}>기온 날씨

            </div>
            <div>

            </div>
            <br/>
            <div className={style.Box_S_W}>
            <button onClick={navQustion}> 문진표 작성</button>
                </div>    
            <br/>

            <button className={style.Btn_L_G}>버튼</button>
            <br/>
            <button className={style.Btn_M_O}>버튼</button>
            <br/>
            <button className={style.Btn_S_W}>버튼</button>

        </div>
    );
}

export default HomeT;