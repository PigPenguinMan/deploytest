import DataContext from "../data/DataContext";
import { useState, useContext } from "react";
import { useSelector } from 'react-redux';

import ProgressBar from 'react-bootstrap/ProgressBar';
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";

import '../css/OnLogin_CheckUp.css'

const OnLogin_CheckUp = () => {
    const data = useContext(DataContext);
    const hchecks = useSelector((state)=>(state.checkUp.hchecks))  
    const [onHcheck,setOnHcheck] = useState("")
    const [btn,setBtn] = useState(true);
    const [dname,setDName] = useState("")

    const health_check = function(){
        if(data.state.month >= 66){
            data.action.setHcheck(7)
        } else if(data.state.month > 60 ){
            data.action.setHcheck(7)
            setOnHcheck("현재 건강검진 기간이 아닙니다")
        } else if(data.state.month >= 54 ){
            data.action.setHcheck(6)
        } else if(data.state.month > 48 ){
            data.action.setHcheck(6)
            setOnHcheck("현재 건강검진 기간이 아닙니다")
        } else if(data.state.month >= 42 ){
            data.action.setHcheck(5)
        } else if(data.state.month > 36 ){
            data.action.setHcheck(5)
            setOnHcheck("현재 건강검진 기간이 아닙니다")
        } else if(data.state.month >= 30){
            data.action.setHcheck(4)
        } else if(data.state.month > 24){
            data.action.setHcheck(4)
            setOnHcheck("현재 건강검진 기간이 아닙니다")
        } else if(data.state.month >= 18){
            data.action.setHcheck(3)
        } else if(data.state.month > 12){
            data.action.setHcheck(3)
            setOnHcheck("현재 건강검진 기간이 아닙니다")
        } else if(data.state.month >= 9){
            data.action.setHcheck(2)
        } else if(data.state.month > 6){
            data.action.setHcheck(2)
            setOnHcheck("현재 건강검진 기간이 아닙니다")
        } else if(data.state.month >= 4){
            data.action.setHcheck(1)
        } else if(data.state.month >= 0){
            data.action.setHcheck(1)
            setOnHcheck("현재 건강검진 기간이 아닙니다")
        }
        
    }
    const inoculation_check = function(){
        if(data.state.month > 144) {
            data.action.setIcheck(38);
            setDName("일본뇌염, 파상풍")
        } else if(data.state.month > 72 ) {
            data.action.setIcheck(34);
            setDName("파상풍, 폴리오, 홍역, 일본뇌염")
        } else if(data.state.month > 35 ) {
            data.action.setIcheck(32);
            setDName("일본뇌염, 사람유두종바이러스")
        } else if(data.state.month > 23 ) {
            data.action.setIcheck(29);
            setDName("A형간염, 일본뇌염, 사람유두종바이러스")
        } else if(data.state.month > 18 ) {
            data.action.setIcheck(25);
            setDName("b형레모필루스인플루엔자, 폐렴구균, 홍역, 수두")
        } else if(data.state.month > 15 ) {
            data.action.setIcheck(20);
            setDName(" B형간염, 파상풍, 폴리오, b형레모필루스인플루엔자, 폐렴구균,  로티바이러스RV5")
        } else if(data.state.month > 6 ) {
            data.action.setIcheck(15);
            setDName("파상풍, 폴리오, b형레모필루스인플루엔자, 폐렴구균, 로티바이러스RV1,로티바이러스RV5")
        } else if(data.state.month > 4 ) {
            data.action.setIcheck(9);
            setDName("파상풍, 폴리오, b형레모필루스인플루엔자, 폐렴구균, 로티바이러스RV1, 로티바이러스RV5")
        } else if(data.state.month > 2 ) {
            data.action.setIcheck(3);
            setDName("B형간염")
        } else if(data.state.month > 1 ) {
            data.action.setIcheck(2);
            setDName("결핵, B형간염")
        } 
    }
    
    useEffect(() => {
        health_check()
    },[data.state.month])
    useEffect(() => {
        inoculation_check()
    },[dname])

    // 탭메뉴
    const [content, setContent] = useState("first");

    const handleClickButton = (e) => {
        e.preventDefault();
        const { name } = e.target;
        setContent(name);
    };
    const date = new Date();
    function getHcheck_date(h_month) {
        const i_date = new Date(data.state.infant.age)
        const Hcheck_date = new Date(
                                    i_date.getFullYear(),
                                    (i_date.getMonth()+h_month),
                                    i_date.getDate()
                                )
        return Hcheck_date.getFullYear() + "." + (Hcheck_date.getMonth()+1) + "." + Hcheck_date.getDate() 
    }
    const selectComponent = {
        first:  <>
                    {hchecks.filter((el)=> el.id < data.state.hcheck).map((el)=>(
                        <>
                            <p className="today">{date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()}</p>
                            <div className="h_box clearfix" key={el.id}>
                                <div className="left_box">
                                    <h2 className="h_title">{el.id}차 건강검진</h2>
                                    <p className="h_notice">생후 {el.s_month}개월 ~ {el.e_month}개월</p>
                                    <p>검진기간: {getHcheck_date(el.s_month)} ~ {getHcheck_date(el.e_month)}</p>
                                </div>
                                <div className="right_box">
                                    <FontAwesomeIcon className="icon active" icon={faStethoscope} />
                                    <p className="check">검진완료</p>
                                </div>
                            </div>
                        </>
                    ))}
                    {hchecks.filter((el)=> el.id >= data.state.hcheck).map((el)=>(
                        <>
                            <p className="today">{date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()}</p>
                            <div className="h_box clearfix" key={el.id}>
                                <div className="left_box">
                                    <h2 className="h_title">{el.id}차 건강검진</h2>
                                    <p className="h_notice">생후 {el.s_month}개월 ~ {el.e_month}개월</p>
                                    <p>검진기간: {getHcheck_date(el.s_month)} ~ {getHcheck_date(el.e_month)}</p>
                                </div>
                                <div className="right_box">
                                    <FontAwesomeIcon className="icon" icon={faStethoscope} />
                                    <p className="check">검진필요</p>
                                </div>
                            </div>
                        </>
                    ))}
                </>,
        second: <>
                    {hchecks.filter((el)=> el.id >= data.state.hcheck).map((el)=>(
                        <>
                            <p className="today">{date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()}</p>
                            <div className="h_box clearfix" key={el.id}>
                                <div className="left_box">
                                    <h2 className="h_title">{el.id}차 건강검진</h2>
                                    <p className="h_notice">생후 {el.s_month}개월 ~ {el.e_month}개월</p>
                                    <p>검진기간: {getHcheck_date(el.s_month)} ~ {getHcheck_date(el.e_month)}</p>
                                </div>
                                <div className="right_box">
                                    <FontAwesomeIcon className="icon" icon={faStethoscope} />
                                    <p className="check">검진필요</p>
                                </div>
                            </div>
                        </>
                    ))}
                </>,
        third:  <>
                    {hchecks.filter((el)=> el.id < data.state.hcheck).map((el)=>(
                        <>
                            <p className="today">{date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()}</p>
                            <div className="h_box clearfix" key={el.id}>
                                <div className="left_box">
                                    <h2 className="h_title">{el.id}차 건강검진</h2>
                                    <p className="h_notice">생후 {el.s_month}개월 ~ {el.e_month}개월</p>
                                    <p>검진기간: {getHcheck_date(el.s_month)} ~ {getHcheck_date(el.e_month)}</p>
                                </div>
                                <div className="right_box">
                                    <FontAwesomeIcon className="icon active" icon={faStethoscope} />
                                    <p className="check">검진완료</p>
                                </div>
                            </div>
                        </>
                    ))}
                </>,
        fourth: <>

                </>,
        fifth: <>
                    
                </>,
        sixth: <>
                    
                </>,
      };
    return (
        <>  
        <div className="box">
            <div className="padding_box">
                <div className="btn_box">
                    <button className={btn ? "active" : null} onClick={()=>{
                        setBtn(true)
                        setContent("first")
                    }}>영유아검진</button>
                    <button className={btn ? null : "active"} onClick={()=>{
                        setBtn(false)
                        setContent("fourth")
                    }}>예방접종</button>
                </div>
                {btn ? (
                    <> 
                        <h2 className="s_title">{onHcheck ? <>{onHcheck}</> :<>현재 {data.state.hcheck}차 건강검진 기간입니다</>}</h2>
                        <div className="progressbar_box clearfix">
                            <p >검진율 </p>
                            <div className="progressbar"><ProgressBar now={parseInt((data.state.hcheck-1)*14.29) } label={`${parseInt((data.state.hcheck-1)*14.29)}%`} variant="success" /></div>
                        </div>
                        <ul className="tab clearfix">
                            <li className={content=='first' && "active"}><a href="#" name="first" onClick={handleClickButton}>전체 7</a></li>
                            <li className={content=='second' && "active"}><a href="#" name="second" onClick={handleClickButton}>미검진 {8-data.state.hcheck}</a></li>
                            <li className={content=='third' && "active"}><a href="#" name="third" onClick={handleClickButton}>검진완료 {data.state.hcheck-1}</a></li>
                        </ul>
                        {content && <>{selectComponent[content]}</>}
                    </>
                ):(
                    <>
                        <h2 className="s_title">현재 {dname}건의 접종기간입니다</h2>
                        <div className="progressbar_box clearfix">
                            <p > 접종률 </p>
                            <div className="progressbar"><ProgressBar now={parseInt(data.state.icheck*2.44)} label={`${parseInt(data.state.icheck*2.44)}%`} variant="success"/></div>
                        </div>
                        <ul className="i_tab clearfix">
                            <li className={content=='fourth' && "active"}><a href="#" name="fourth" onClick={handleClickButton}>전체 41</a></li>
                            <li className={content=='fifth' && "active"}><a href="#" name="fifth" onClick={handleClickButton}>미접종 {41-data.state.icheck}</a></li>
                            <li className={content=='sixth' && "active"}><a href="#" name="sixth" onClick={handleClickButton}>접종완료 {data.state.icheck}</a></li>
                        </ul>
                    </>
                )}
            </div>
        </div>
       </> 
    );
}
 
export default OnLogin_CheckUp