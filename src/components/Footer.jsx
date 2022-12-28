import Col from "react-bootstrap/esm/Col";
import Row from 'react-bootstrap/esm/Row';
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const Reviewpage = () => {
        navigate('/review')
    }
    return (
        <>
        <Row>
        <Col>
            <button>홈</button> 
        </Col> 
        <Col>
            <button onClick={Reviewpage}>진료내역</button> 
        </Col> 
        <Col>
            <button>마이페이지</button> 
        </Col>
        </Row> 
        </>
    );
}

export default Footer;