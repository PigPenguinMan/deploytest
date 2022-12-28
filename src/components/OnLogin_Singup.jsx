import DataContext from "../data/DataContext";
import { useContext } from "react";
import "../css/OnLogin_Singup.css"

const OnLogin_Singup = () => {
    const data = useContext(DataContext)
    

    return (  
        <>
            <div className="infant_img clearfix">
            {data.state.infant.gender == "남" ? (
                <img src={`${process.env.PUBLIC_URL}/images/male.jpg`} alt="남자아이프로필" />
            ):(
                <img src={`${process.env.PUBLIC_URL}/images/female.jpg`} alt="여자아이프로필" />
            )}
            </div>
            <ul>
                <li className="bold">{data.state.infant.name}</li>
                <li>{data.state.age.substr(0,4)+"/"+data.state.age.substr(5,2)+"/"+data.state.age.substr(8)} ({data.state.infant.gender})</li>
                <li className="bold">D+{data.state.date}/ {data.state.month}개월</li>
            </ul>
        </>
    );
}
 
export default OnLogin_Singup;