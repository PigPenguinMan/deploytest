/** 복약관리 페이지입니다 (서아)
*로그인한 유저 > 유저정보와 연결해서 직접 약 이름과 투여량, 횟수를 입력 > 출력하는 페이지
*상태관리 리덕스(medicine.js)/firebase db에는 저장 안 함
*/
import { useContext, useEffect, useState } from "react";
import { FloatingLabel, Form, Card, ListGroup, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addMedicine } from "../modules/medicine";
import DataContext from "../data/DataContext";
import { doc, getDoc } from "firebase/firestore"
import { db } from "../Firebase";
import "../css/Medicine.css";

const Medicine = () => {
    const data = useContext(DataContext);
    const user = localStorage.getItem("currentUser");
    const [name, setName] = useState();
    const [pillsName, setPillsName] = useState("");
    const [pillsCount, setpillsCount] = useState(0);
    const [pillsDose, setPillsDose] = useState(0);
    // +리덕스로 medicine.js 값 가져와서 map으로 출력
    const medicine = useSelector((state)=>(state.medicine));
    const dispatch = useDispatch();

    // 복약정보 입력 모달창 관리 state입니다
    const [modalOpen, setModalOpen] = useState(false);
    // 복약정보 입력하기 버튼에 연결된 함수
    function openMedModal () {
        return (
            setModalOpen(!modalOpen)
        )
    }
    // firestore db에서 로그인된 유저 정보를 들고온다
    const getSingleData = async () => {
        const docRef = doc(db, "users", user);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
        setName(docSnap.data().name);
        }
    }

    useEffect(() => {
        if (user) {
            data.action.setIsLoginned(true)
            getSingleData();
        } else {
            data.action.setIsLoginned(false)
        }
    }, [user]);

    return ( 
        <>
        <div className="med-form">
            <h3>복약 관리</h3>
            <p>버튼을 클릭하여 복약정보를 등록하세요!</p>
        </div>
        <button className="addMed-btn med-form" onClick={openMedModal}>복약정보 추가</button>
        
        {modalOpen ? (
        <MedicineModal 
        name={name} pillsCount={pillsCount} setpillsCount={setpillsCount}
        pillsDose={pillsDose} setPillsDose={setPillsDose}
        pillsName={pillsName} setPillsName={setPillsName} 
        modalOpen={modalOpen} setModalOpen={setModalOpen} />
        ):(null)
        }
        <br />
        <div className="print-medList med-form">
        <b>{name}</b>{" "}님의 복약정보 <br />
        <Table striped>
                <thead>
                    <tr>
                    <th>no.</th>
                    <th>이름</th>
                    <th><p><b>투여량</b></p></th>
                    <th><p><b>투여 횟수</b></p></th>
                    </tr>
                </thead>
                <tbody>
                {medicine.map((med)=>(
                    <tr key={med.pillId}>
                        <td>{med.pillId}</td>
                        <td>{med.pillsName}</td>
                        <td>{med.pillsCount}</td>
                        <td>{med.pillsDose}</td>
                    </tr>
                    ))}  
                </tbody>
        </Table>
        </div>
        </>
    );
}

export default Medicine;



// +추가
// 복약 정보 등록전, 약 이름, 투여 수량과 횟수를 입력받는 모달창입니다
// 상위 컴포넌트로부터 값을 넘겨받아 출력하기 위한 props들
const MedicineModal =(props)=> {
    const {name, pillsName, setPillsName, pillsCount, setpillsCount, pillsDose, setPillsDose} = props;
    const {modalOpen, setModalOpen} = props;
    //리덕스에서 값 가져오기 위함
    const dispatch = useDispatch();

    const medicineForm =()=>{
        
    }

    return (
        <>
        <div className="med-form">
            <p>
            <b>{name}</b>{" "}님, <br/> 복용중인 약의 이름과 투여량, 횟수를 입력해주세요</p>
        </div>
        <hr/>
        <div className="mx-5 mt-5">
            <div>
                <FloatingLabel controlId="floatingInput"
                    label="복용하는 약의 이름" className="mb-3">
                <Form.Control type="text"
                    style={{border:"none", borderBottom:"1px solid lightgray"}}
                    onChange={(e)=>{setPillsName(e.target.value)}} />
                </FloatingLabel>
                　투여량: <input className="med-input" type="number" onChange={(e)=>{setpillsCount(e.target.value)}} /> 
                　투여 횟수: <input className="med-input" type="number" min='10' max='30' onChange={(e)=>{setPillsDose(e.target.value)}} />
            </div>
            <br />
                <button className="addMed-btn"
                onClick={
                    pillsName == ""
                    ? null 
                    : (
                    ()=>{dispatch(addMedicine(
                    { pillsName: pillsName , pillsCount:pillsCount, pillsDose:pillsDose }
                    )); setModalOpen(!modalOpen); alert("등록 완료"); 
                    setPillsName(""); setpillsCount(0); setPillsDose(0);
                    } 
                    )
                    
                }
                    >등록하기</button>
                    
        </div>
    </>
    )
}

