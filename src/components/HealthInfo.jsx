/** 
 *  배너 > 짧은 건강정보 제공하는 컴포넌트
 *  데이터: 국가건강정보포털 openapi에서 parsing */
// import slick > slider사용 위함
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import styled-components
import styled from 'styled-components'
// import data
import { dailyInfo } from "../data/dailyInfo"; 

const HealthInfo = () => {
    // 당일 날짜출력
    // slick 속성
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    return (
      <StyledSlider>
        <div className="s-wrapper">
          <div className="s-title">
          </div> 
          {/* map()으로 json의 data하나씩 출력 */}
          <div className="s-slick">
            <Slider {...settings}>
              {dailyInfo.map((list, idx)=> (
                <div style={{margin : "10em"}} className="slideList" key={idx}>
                  <h3>{list.dissNm}</h3>
                  <hr/>
                  <p style={{backgroundColor : "#eeeeee", borderRadius : "10px", padding : "25px 10px", margin : "10px", fontSize : "0.9em"}}>{list.dissRiskXpln}</p>
                </div>
                ))
              }
            </Slider>
          </div>
        </div>
      </StyledSlider>
    );
}
export default HealthInfo;




// 이 컴포넌트는 styled-components 사용 권장
// 슬릭 기본 화살표랑 dots 설정 제거
const StyledSlider = styled(Slider)`
margin-top :20px;
height: 180px;
width: 100%;
position: relative;
border-radius: 10px;

.slideList > h2 {
  padding: 5px 15px;
}

.slideList > p {
  padding: 5px 23px;
}

.s-wrapper {
  border : 2px solid black;
  color: black;
  background-color: #fff;
  border-radius: 10px;
  max-width : 420px;
  height: 200px;
  text-align: center;
}
.s-title {
  margin-top:15px;
  text-align:center;
}
.s-slick {
  margin-top:15px;
}

.slick-prev::before, .slick-next::before 
{
opacity: 0;
display: none;
}
.slick-prev::before, .slick-next::before 
{
opacity: 0;
display: none;


}`
