import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Star from "../components/Star";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import CommentInput from "../components/CommentInput";
import { Form } from "react-bootstrap";

const WriteReview = (props) => {
  const { countStar, setCountStar } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [star, setStar] = useState([
    { gradeId : 1, grade : 1 },
    { gradeId : 2, grade : 2 },
    { gradeId : 3, grade : 3 },
    { gradeId : 4, grade : 4 },
    { gradeId : 5, grade : 5 }
])
  // 색상변경
  const [btnColor, setBtnColor] = useState(["1", "2", "3", "4", "5"]);

  return (
    <div>
      <Button
        style={{ marginLeft: "10em" }}
        variant="primary"
        onClick={handleShow}>
        리뷰작성
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form>
          <Modal.Header>
            <div style={{ margin: "0 auto" }}>
              <Modal.Title>
                <Row>진료는 어떠셨어요?</Row>
                <Row>
                  <div>
                    <Star />
                  </div>
                </Row>
              </Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div style={{ margin: "1vh" }}>
                <h5>진료 결과는 어때요?</h5>
                <Button onClick={() => {btnColor === "1" ? setBtnColor("green") : setBtnColor("blue");}} 
                style={{ backgroundColor : btnColor, border : "none", marginRight: "0.5em"}}>효과없어요</Button>
                
                <Button onClick={() => {btnColor === "2" ? setBtnColor("green") : setBtnColor("blue");}} 
                 style={{backgroundColor : btnColor, marginRight: "0.5em" }}>보통이에요</Button>
                
                <Button onClick={() => {btnColor === "3" ? setBtnColor("green") : setBtnColor("blue");}}  
                  style={{backgroundColor : btnColor, marginRight: "0.5em" }}>효과좋아요</Button>
              </div>
            </Row>

            <Row>
              <div style={{ margin: "1vh" }}>
                <h5>선생님은 친절하셨나요? </h5>
                <Button style={{ marginRight: "0.5em" }}>불친절해요</Button>
                <Button style={{ marginRight: "0.5em" }}>보통이에요</Button>
                <Button style={{ marginRight: "0.5em" }}>친절해요</Button>
              </div>
            </Row>

            <Row>
              <div style={{ margin: "1vh" }}>
                <h5> 시설 장비는 어떤가요?</h5>
                <Button style={{ marginRight: "0.5em" }}>노후되었어요</Button>
                <Button style={{ marginRight: "0.5em" }}>보통이에요</Button>
                <Button style={{ marginRight: "0em" }}>신규장비에요</Button>
              </div>
            </Row>

            <Row>
              <div style={{ margin: "3vh 1vh 1vh 1vh" }}>
                <h5>상세한 리뷰를 작성해주세요</h5>
                <CommentInput />
              </div>
            </Row>

            <hr />
            <Row>
              <div style={{ margin: "1vh", display: "flex" }}>
                <Col xs={8}>
                  <h5>재방문 하시겠어요?</h5>
                </Col>
                <Col xs={1}>
                  <Button>네</Button>
                </Col>
                <Col xs={3}>
                  {" "}
                  <Button style={{ marginLeft: "0.5em" }}>아니오</Button>
                </Col>
              </div>
            </Row>
            <Row>
              <Button
                style={{ width: "90%" }}
                variant="secondary"
                onClick={handleClose}
                countStar={countStar}
                setCountStar={setCountStar}>
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

export default WriteReview;
