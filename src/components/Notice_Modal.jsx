import { useContext, useState } from "react";
import DataContext from "../data/DataContext";
import '../css/Notice_Modal.css'

const Notice_Modal = (props) => {
    const data = useContext(DataContext)
    const [input,setInput] = useState("");
    const inputDesc = (e) => {
        setInput(e.target.value)
    }
    const changeMeasures = (e) => {
        data.action.setMesures({
            ...data.state.measures, [e.target.name] : input
        })
        props.setShow(false)
        data.action.setIsMeasures(true)
    }
    return (  
        <>
            <div className="layer_bg">
                <div className="layer_notice">
                    <div className="measure_box">
                    <p>체온을 입력해주세요</p>
                    <input type="text" onChange={inputDesc} />
                    {input ? (
                        <>
                            <button name="temperature" onClick={changeMeasures
                            }>완료</button>
                        </>
                    ):(
                        <>
                            <button onClick={()=>{props.setShow(false)}}>취소</button>
                        </>
                    )

                    }
                </div>
                </div>
            </div>
        </>
    );
}
 
export default Notice_Modal;