import { useContext, useState } from "react";
import DataContext from "../data/DataContext";

import '../css/health_Modal.css'

const Health_Modal = (props) => {
    const data = useContext(DataContext)
    const [show,setShow] = useState(0);
    const [input,setInput] = useState("");
    const inputDesc = (e) => {
        setInput(e.target.value)
    }
    const changeMeasures = (e) => {
        data.action.setMesures({
            ...data.state.measures, [e.target.name] : input
        })
        setShow(0)
    }
    const infoObj = [
        {name:"height", info:"키", id:1},
        {name:"weight", info:"몸무게", id:2},
        {name:"temperature", info:"체온", id:3},
        {name:"medicine", info:"처방전", id:4},
    ]
    return ( 
        <div className='layer_bg'>
            <div className='layer'>
                    <ul className='modal_title'>
                        {
                            infoObj.map((info)=>(
                                <>
                                    <li key={info.id}><a href="#" onClick={()=>{
                                        setShow(info.id)
                                    }}>{info.info} 등록</a></li>
                                    {show == info.id && 
                                                 <div className="measure_box">
                                                    <input type="text"onChange={inputDesc}/>
                                                    <button name={info.name} onClick={changeMeasures}>{input ? "완료" : "취소"}</button>
                                                </div>
                                    }
                                </>
                            ))
                        }
                        <li >
                            <a href="#" className='close' onClick={()=>{
                                props.setShow(false)
                            }}>
                                취소
                            </a>
                            <a href="#" className='push' onClick={()=>{
                                if(input){
                                    props.setShow(false)
                                    data.action.setIsMeasures(true)
                                } else {
                                    props.setShow(false)
                                    data.action.setIsMeasures(false)
                                }
                            }}>
                                완료
                            </a>
                        </li>
                    </ul>
            </div>
        </div> 
    );
}
 
export default Health_Modal;