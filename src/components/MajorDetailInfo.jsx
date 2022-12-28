import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../css/DetailInfo.module.css"
import DataContext from "../data/DataContext";
import ReserveMap from "./Detail_map";
import Review from "../pages/Review";


const MajorDetailInfo = () => {
    const {id, majorid} = useParams();    
    const {state,action} = useContext(DataContext);
    const majorfilter = 
    state.hospitalData.filter(major => major.진료과목내용명.includes(state.category[id].name)); 
    
    return (     
    <div>
        <div className={styles.title}>  
            <h2> {majorfilter[majorid].사업장}</h2>
            <hr />
            <p> {majorfilter[majorid].주소}</p>
            <p> {majorfilter[majorid].전화번호}</p>
        </div>
        <div className={styles.mapbox}> 
            <ReserveMap name={majorfilter[majorid].사업장} address={majorfilter[majorid].주소}/>
        </div> 
        <div className={styles.detail}>
        <h4>진료 과목</h4>
        <hr />
        {majorfilter[majorid].진료과목내용명} 
        </div> 
        <div className={styles.linkbox}>
        <Link onClick={()=>{
            action.setMypageData(majorfilter[majorid])
        }}  to={'/reservation/'+majorid} className={styles.link}>
            예약하기 
        </Link>
        </div>
        <Review/>
    </div>  
    );
}

export default MajorDetailInfo;