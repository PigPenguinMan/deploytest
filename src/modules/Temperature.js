const initialState = {
    preview4 : 
        {
            id:4, title:"건강한 우리아이", desc:"해열제 복용량 안내와 \n 발열 기록을 병원과 연동해요!",
            sub_desc:"해열제를 얼마나 먹어야 할까?"
        }
    
}

function temperature(state = initialState, action){
    switch(action.type) {
        default:
            return state
    }
}

export default temperature;