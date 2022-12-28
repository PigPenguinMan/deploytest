
import { useNavigate,Link } from "react-router-dom";
import { useContext, useState } from "react";
import DataContext from "../data/DataContext";
import styles from "../css/history.module.css"



const History = () => {
    const data = useContext(DataContext);
    const navigate = useNavigate();
    const navFilter =()=>{
        navigate('/filter'); 
    } 
    
    if (data.state.mypageData) {
        data.action.setTreatmentDetail(data.state.mypageData);
    } else if (data.state.mypageData2) {
        data.action.setTreatmentDetail(data.state.mypageData2);
    } 
    console.log(data.state.h_name);


    return (   

        <div className="History_Page">    

            <div className={styles.box3}>                
            <>  
                <div className="Mypage_first">         
                {
                    data.state.isbook  ? 

                    ( 
                    <>  
                    { 
                    data.state.treatmentDetail ? (
                        <div className={styles.box}>
                            <div className={styles.sbox}>
                            <h2>{data.state.treatmentDetail.사업장}</h2>
                        <h4>{data.state.treatmentDetail.주소}</h4> 
                        <hr />
                        <p>전화번호 : {data.state.treatmentDetail.전화번호}</p>
                        <p> <span>예약일 : </span>
                            {String(data.state.startDate).substring(16,0)
                            
                            }</p>   
                        <p>{data.state.treatmentDetail.영업상태}</p>
                        <hr />
                        <button className={styles.btn} onClick={()=>{
                        window.location.reload();
                        alert('예약이 취소되었습니다.')
                        }}>예약취소</button>    
                            </div> 
                            
                        </div>  
                    )     
                    : ( 
                        <div className={styles.box} >
                        <h2>{data.state.h_name}</h2>
                        <h4>{data.state.h_address}</h4> 
                        <hr />
                        <p>전화번호 : {data.state.h_num}</p>
                        <p> <span>예약일 : </span>
                    {String(data.state.startDate).substring(16,0)
                    
                    }</p>
                    <p>영업/정상</p>
                    <hr />
                    <button className={styles.btn} onClick={()=>{
                        window.location.reload(); 
                        alert('예약이 취소되었습니다.')
                        }}>예약취소</button>                                        
                        </div> 
                    ) 
                }
                
                        </> 
                        
                    ): ( 
                        <>
                        <div className={styles.btnbox}>
                        <button className={styles.btn2} onClick={navFilter}>예약하러 가기 (병원찾기)</button>                    
                        </div>                                            
                        </>

                        )
                }
                </div> 
                

            </>
                </div> 
        </div>
    );
}
export default History;