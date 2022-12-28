// 데이터 : openweathermap 사이트
// 날씨 정보 주는 컴포넌트
// 현재는 위치 입력받아 해당위치 출력중 
import { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../css/base.module.css";

const Weather = () => {
    // js처리방식 : 위>아래 라서 url과 ( 받아온 키값, 위치값) 순서가 중요함
    const API_KEY = "df39660fc891b75f918b22159e9ad35e";
    const [result, setResult] = useState({});
    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((positon) => {
            let lat = positon.coords.latitude;
            let lon = positon.coords.longitude;
            console.log('현재위치',lat,lon);
            getWeather(lat,lon);
            
        });
    }
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units
    //         =&lang=kr&appid=${API_KEY}`;

    const getWeather = async (lat, lon) => {
        let url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        let res = await fetch(url);
        let data = await res.json();

        setResult(data)
    }
    useEffect(()=>{
        getCurrentLocation()
    },[])
    
    return (
        <div style={{marginLeft : "10px", width : "95%"}}>
            <Row className={styles.wrapper}>
            {
                Object.keys(result).length !== 0 && (
                    <div style={{fontSize : "0.7em", padding : "1em"}}>
                        <Row style={{marginTop : "1em"}}>
                        <Col>      
                            <h5 className="city"> 📍  {result.name}</h5>
                        </Col>

                        <Col style={{display : "flex"}}>
                         <h5 className="temperature">
                            🌡 {result.main.temp}˚C
                         / </h5>  　 <h5 className="sky">
                        {/* '즉시발동함수'로 jsx{}에서 중첩조건문 사용 */}
                            {
                                    (function () {
                                        if (result.weather[0].main === 'Clear') {
                                            return (" 🌞 ")
                                        } else if (result.weather[0].main === 'Mist') {
                                            return (" ⛅ ")
                                        } else if (result.weather[0].main === 'Rain') {
                                            return (" ☔ ")
                                        } else if (result.weather[0].main === 'Clouds') {
                                            return (" ☁️ ")
                                        }
                                    })()
                                }
                                {result.weather[0].main}
                        </h5>
                        </Col>
                        </Row>

                        
                    </div>
                    )
                }

        </Row>
        </div>
     
    );
}

export default Weather;

