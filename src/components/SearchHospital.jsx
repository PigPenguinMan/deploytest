import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import DataContext from "../data/DataContext";
import { Container, Row } from "react-bootstrap";


const SearchHosptial = ({전화번호, 주소, 사업장,진료과목내용명}) => {
    const navigate = useNavigate();
    const data = useContext(DataContext);

    return (
        <Container
            style={{border : "2px solid black", marginBottom : "0.5em", padding : "0.5em", borderRadius : "15px"}}
            onClick={(e)=>{e.preventDefault()
            data.action.setH_name(`${사업장 && 사업장}`)
            data.action.setH_num(`${전화번호 && 전화번호}`)
            data.action.setH_address(`${주소 && 주소}`)
            data.action.setH_major(`${진료과목내용명 && 진료과목내용명}`)
            navigate('/detailinfo')
        }}>
                <div style={{fontSize : "1em", fontWeight : "bold", whiteSpace: "nowrap",  marginBottom : "-0.5em"}}> {사업장 && 사업장}  </div>  
            <hr/>
                <div style={{fontSize : "0.8em", marginTop : "-0.5em"}}>   번호 |{" "} {전화번호 && 전화번호} </div>
                <div style={{fontSize : "0.8em"}}>   주소 |{" "}  {주소 && 주소} </div>
                <div style={{display:"none"}}>{진료과목내용명 && 진료과목내용명} </div>
        </Container>
    );
}

export default SearchHosptial;