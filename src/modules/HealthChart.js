const initialState = {
    preview1 : 
        {
            id:1, title:"행복한 우리아이", desc:"성장/체온/진료 기록이 \n 자동으로 쌓여요!",
            sub_desc:"쌓은 히스토리로 건간관리하기"
        }
    
}

function healthChart(state = initialState, action){
    switch(action.type) {
        default:
            return state
    }
}

export default healthChart;