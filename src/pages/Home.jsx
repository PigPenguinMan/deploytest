import SearchBar_Home from "../components/SearchBar";
import Weather from "../components/Weather";
import DataContext from "../data/DataContext";
import HealthInfo from '../components/HealthInfo'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";

const Home = () => {
    const data = useContext(DataContext);
    
    const user = localStorage.getItem("currentUser")
    console.log("user", data.action)
    useEffect(()=>{
        if(user){
            data.action.setIsLoginned(true)
        } else {
            data.action.setIsLoginned(false)
        }
    },[user]);
    console.log(data.state.isLoginned);
    const navigate = useNavigate();
    const navQustion = ()=>{
        navigate('/question');
    }
    
    let date = new Date();
    let days = ["일", "월", "화", "수", "목", "금", "토"];

    return ( 
        <Container className="Home" style={{  maxWidth : "420px", height : "100vh"}}>
                    <Row className="Search_box" style={{marginBottom : "2em", marginTop : "2em"}}>
                        <SearchBar_Home/>
                    </Row>
                    <Row className="Temperature">
                        <h5 style={{marginLeft : "0.5em", fontSize : "1.3em"}}>오늘 날씨</h5>
                        <Weather/>
                    </Row>
                    <hr />
                    <Row>
                        <Row>
                            <div style={{display : "flex"}}>
                            <h5 style={{marginLeft : "0.5em", fontSize : "1.3em"}}>건강 정보</h5>      
                            <p style={{ marginLeft : "1em", borderRadius : "10px", padding : "4px 8px", fontSize : "0.8em", 
                            backgroundColor : "#F2CA99"}}>{date.getFullYear()} {date.getMonth()+1} {date.getDate()} {days[date.getDay()]}</p>
                            </div>
                            
                            <HealthInfo/>
                        </Row>
                    </Row>
                    <Row>
                        <button 
                        style={{width : "360px", marginTop : "3em", marginLeft : "10px",
                                display : "inline-block", color : "black", backgroundColor : "#F2CA99",
                                borderRadius : "10px", padding : "10px"}}
                        onClick={() => (navigate('/filter'))}> <p style={{marginLeft : "160px"}}> 병원 찾기</p> </button>
                    </Row>
        </Container>
    );
}
export default Home;