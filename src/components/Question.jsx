import { useEffect, useState } from "react";

const Question = () => {
    const [height,setHeight] = useState();
    const [weight,setWeight] = useState();
    const [onclick,setOnclick] = useState(false)
    const [onclick2,setOnclick2] = useState(false)
    useEffect(() => {
        let fever_check = document.getElementById("fever_check");
        fever_check.checked = true;
    }, []);
    useEffect(() => {
    let rash_check = document.getElementById("rash_check");
    rash_check.checked = true;
    }, []);
    useEffect(() => {
        let pill_check = document.getElementById("pill_check");
        pill_check.checked = true;
    }, []);

    
    return (  
        <>
        <form onSubmit={null}>
            <p>
                <strong>1. 아이의 최근 성장정보는 어떻게 되나요?</strong>
                <br />
                <input type="text" placeholder="키를 입력해주세요 ex)95cm" onChange={(e)=>{setHeight(e.target.value)}}/>
                <input type="text" placeholder="몸무게를 입력해주세요 ex)13.3kg"  onChange={(e)=>{setWeight(e.target.value)}}/>
            </p>
            <p>
                <strong>2. 아이가 발열이 있나요?</strong>
                <br />
                <input id="fever_check" type="radio" value="y" name="fever_check"  onClick={()=>{setOnclick(false)}} /> 예 
                <input type="radio" value="n" name="fever_check" onClick={()=>{
                setOnclick(true)}}/> 아니요
                <br />
                <select name="fever_date" disabled={onclick}>
                    <option value="0">1일 미만</option>
                    <option value="1">1일</option>
                    <option value="2">2일</option>
                </select>
                <select name="fever" disabled={onclick}>
                    <option value="37">37℃</option>
                    <option value="38">38℃</option>
                    <option value="39">39℃</option>
                    <option value="40">40℃</option>
                </select>
            </p>
            <p>
                <strong>3. 아이가 발진이 있나요?</strong>
                <br />
                <input type="radio" value="y" name="rash_check"/> 예
                <input id="rash_check" type="radio" value="n" name="rash_check" /> 아니요
            </p>
            <p>
                <strong>4. 아이가 먹는 약이 있나요?</strong>
                <br />
                <input id="pill_check" type="radio" value="y" name="pill_check" onClick={()=>{setOnclick2(false)}}/> 예 
                <input type="radio" value="n" name="pill_check" onClick={()=>{setOnclick2(true)}}/> 아니요
                <br />
                <select id="pill_kind1" name="pill_kind" disabled={onclick2}>
                    <option value="감기약">감기약</option>
                    <option value="해열제">해열제</option>
                    <option value="소화약">소화약</option>
                </select>
                <select id="pill_kind2" name="fever" disabled={onclick2}>
                    <option value="0">당일</option>
                    <option value="1">어제</option>
                    <option value="2">2~3일 전</option>
                </select>
            </p>
            <input type="submit" value="제출하기" />
        </form>
        </>
    );
}

export default Question;