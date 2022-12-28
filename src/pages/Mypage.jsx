import { useContext, useState } from "react";
import { doc, getDoc } from "firebase/firestore"
import { db } from "../Firebase";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../data/DataContext";
import DatePicker from "react-datepicker";
import styles from '../css/mypage.module.css'
import { faSquareParking } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import "../css/Mypage.css";

const MyPage = () => {
  const data = useContext(DataContext);
  const navigate = useNavigate();
  const [name, setName] = useState();

  const user = localStorage.getItem("currentUser")
  const getSingleData = async () => {
    const docRef = doc(db, "users", user);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data().history.date)
    if (docSnap.exists()) {
      setName(docSnap.data().name);
    }
  }
  const logOut = () => {
    localStorage.clear();
    navigate('/mypage')
  }
  useEffect(() => {
    if (user) {
      data.action.setIsLoginned(true)
      getSingleData();
    } else {
      data.action.setIsLoginned(false)
    }
  }, [user])

  return (
    <div className="Mypage">
      {data.state.isLoginned ? (
        <>
          <div className="Mypage_first">
            <ul>
              <li>
                <div className="userimg_box">
                  <img className="userimg" src={`${process.env.PUBLIC_URL}/images/user.png`} alt="유저이미지" />
                </div>
              </li>
              <li>
                <b className="mypage_name">{name}</b>님
              </li>
              {/* <li>
                <button className="Btn_L_G_2" onClick={() => { logOut() }}>로그아웃</button>
              </li> */}
            </ul>
          </div>
          <hr />
          <Container>
            <Row>
              <Col><h6>건강피드</h6></Col>
            </Row>
            <Row>
              <Col className="Btn_L_G"><button onClick={()=>{navigate('/main')}}>건강피드</button></Col>
            </Row>
          </Container>
          <hr />
          <Container>
            <Row>
              <Col><h6>복약관리</h6></Col>
            </Row>
            <Row>
              <Col className="Btn_L_G"><button onClick={()=>{navigate('/medicine')}}>복약관리</button></Col>
            </Row>
          </Container>
          <hr />
          <div className="Mypage_forth"></div>
          {/* 이부분은 버튼만있고 따로 기능없습니다 */}
          <Container>
            <Row>
              <Col><h6>고객센터</h6></Col>
            </Row>
            <Row>
              <Col className="Btn_L_G"><p>1:1채팅 상담</p></Col>
              <Col className="Btn_L_G"><p>사용자 설문</p></Col>
            </Row>
            <Row>
              <Col className="Btn_L_G"><p>약관 보기</p></Col>
              <Col className="Btn_L_G"><p>버전</p></Col>
            </Row>
          </Container>
        </>
      ) : (
        <>
          <div className="Mypage_first">
            {/* 프로필,이름 */}
            <Container>
            <Row>
              <Col className="Btn_L_G" style={{marginTop:"20px"}}><button  onClick={()=>{navigate('/firebaselogin')}}>로그인</button></Col>
            </Row>
          </Container>
          </div>
          <hr />
          <Container>
            <Row>
              <Col><h6>건강피드</h6></Col>
            </Row>
            <Row>
              <Col className="Btn_L_G"><button onClick={()=>{navigate('/main')}}>건강피드</button></Col>
            </Row>
          </Container>
          <hr />
          <Container>
            <Row>
              <Col><h6>복약관리</h6></Col>
            </Row>
            <Row>
              <Col className="Btn_L_G"><button onClick={()=>{navigate('/medicine')}}>복약관리</button></Col>
            </Row>
          </Container>
          <hr />
          <div className="Mypage_forth">
            {/* 이부분은 버튼만있고 따로 기능없습니다 */}
            <Container>
              <span> 고객센터 </span>
              <br />
              <Row>
                <Col className="Btn_L_G"><p>1:1채팅 상담</p></Col>
                <Col className="Btn_L_G"><p>사용자 설문</p></Col>
              </Row>
              <Row>
                <Col className="Btn_L_G"><p>약관 보기</p></Col>
                <Col className="Btn_L_G"><p>버전</p></Col>
              </Row>
            </Container>
          </div>
        </>
      )}
    </div>
  );

}


export default MyPage;



