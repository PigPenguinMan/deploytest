import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Star from "../components/Star";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import CommentInput from "../components/CommentInput";
import { Form } from "react-bootstrap";
import { useContext } from "react";
import DataContext from "../data/DataContext";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import '../css/ReviewModal.css'; 

const ReviewModal = () => {
  const data = useContext(DataContext);
  const [countStar, setCountStar] = useState();
  const [textInput, setTextInput] = useState();
  const [radioValue, setRadioValue] = useState();
  const [kindValue, setkindValue] = useState();
  const [techValue, setTechValue] = useState();
  const [visitValue, setVisitValue] = useState();
  const [btn1, setBtn1] = useState();
  const [btn2, setBtn2] = useState();
  const [btn3, setBtn3] = useState();
  const [yesNo, setYesNoBtn] = useState();
  const [id, setId] = useState();

  const radios = [
    { name: '효과없어요', value: '1' },
    { name: '보통이에요', value: '2' },
    { name: '효과좋아요', value: '3' }
  ];

  const kindness = [
    { name: '불친절해요', value: '4' },
    { name: '보통이에요', value: '5' },
    { name: '친절해요', value: '6' }
  ]

  const tech = [
    { name: '노후되었어요', value: '7' },
    { name: '보통이에요', value: '8' },
    { name: '신규장비에요', value: '9' }
  ]
  const visit = [
    { name: '네', print : "재방문할래요", value: '10' },
    { name: '아니요', print : "", value: '11' }
  ]

  const [show, setShow] = useState(false);
  const AddReview = () => {
    data.action.setComments([...data.state.comments, {
      Id : id+1, 
      name : "user",
      countStar : countStar,
      btn1 : btn1,
      btn2 : btn2, 
      btn3 : btn3,
      review : textInput,
      yesNo : yesNo 
  }]);
    setShow(false); 
  };
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button
        style={{ marginLeft: "10em", backgroundColor : "#1b4542", color : "white" }}
        variant=""
        onClick={handleShow}>
        리뷰작성
      </Button>
      
      <Modal show={show} onHide={AddReview}>
        <Form>
          <Modal.Header>
            <div style={{ margin: "0 auto" }}>
              <Modal.Title>
                <Row>진료는 어떠셨어요?</Row>
                <Row>
                    <Star getCountStar={setCountStar} setCountStarResult={setCountStar} />
                </Row>
              </Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Row>
            <div style={{ margin: "1vh" }}>
                <h5>진료 결과는 어때요?</h5>
                <ButtonGroup>
                  {radios.map((radio, idx) => (
                  <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={'outline-success'}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) =>  setRadioValue(e.currentTarget.value)}
                  onClick={() =>(setBtn1(radio.name))}
                  > {radio.name}
                  </ToggleButton>))}
                  </ButtonGroup>
              </div>
            </Row>
          <Row>
          <div style={{ margin: "1vh" }}>
                    <h5>선생님은 친절하셨나요?</h5>
                    <ButtonGroup>
                      {kindness.map((kindness, idx) => (
                      <ToggleButton
                      key={idx}
                      id={`kindness-${idx}`}
                      type="radio"
                      name="kindness"
                      variant={idx % 2 ? 'outline-success' : 'outline-success'}
                      value={kindness.value}
                      checked={kindValue === kindness.value}
                      onChange={(e) => setkindValue(e.currentTarget.value)}
                      onClick={() =>(setBtn2(kindness.name))}
                      >
                      {kindness.name}
                      </ToggleButton>
                  ))}
                  </ButtonGroup>
                </div>
            </Row>
            
            <Row>
                <div style={{ margin: "1vh" }}>
                    <h5> 시설 장비는 어떤가요?</h5>
                    <ButtonGroup>
                      {tech.map((tech, idx) => (
                      <ToggleButton
                      key={idx}
                      id={`tech-${idx}`}
                      type="radio"
                      variant={idx % 2 ? 'outline-success' : 'outline-success'}
                      name="tech"
                      value={tech.value}
                      checked={techValue === tech.value}
                      onChange={(e) => setTechValue(e.currentTarget.value)}
                      onClick={() =>(setBtn3(tech.name))}
                      >
                      {tech.name}
                      </ToggleButton>
                  ))}
                  </ButtonGroup>
                </div>
            </Row>
            <Row>
              <div style={{ margin: "3vh 1vh 1vh 1vh" }}>
                <h5>상세한 리뷰를 작성해주세요</h5>
                <CommentInput setTextInput={setTextInput}/>  
              </div>
            </Row>
            <hr/>
            <Row>
              <div style={{ margin: "1vh", display: "flex" }}>
                <Col xs={8}>
                  <h5>재방문 하시겠어요?</h5>
                </Col>
                <ButtonGroup>
                      {visit.map((visit, idx) => (
                      <ToggleButton
                      key={idx}
                      id={`visit-${idx}`}
                      type="radio"
                      variant={idx % 2 ? 'outline-success' : 'outline-success'}
                      name="visit"
                      value={visit.value}
                      checked={visitValue === visit.value}
                      onChange={(e) => setVisitValue(e.currentTarget.value)}
                      onClick={() => {setYesNoBtn(visit.print)}}>
                      {visit.name}
                      </ToggleButton>
                  ))}
                  </ButtonGroup>
              </div>
            </Row>
            <Row>
              <Button
              style={{width : "90%", marginLeft : "0.5em", marginTop : "10px"}}
              className="submitButton"
                variant="secondary"
                onClick={AddReview}>
                작성완료
              </Button>
            </Row>
            <Row></Row>
          </Modal.Body>
        </Form>
      </Modal>
    </div>
  );
};

export default ReviewModal;
