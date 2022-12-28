const initialState = {
    preview3 : 
        {
            id:3, title:"쑥쑥 크는 우리아이", desc:"키, 몸무게 입력하면 \n 백분위를 알 수 있어요!",
            sub_desc:"우리아이 키는 몇 백분위?"
        }
    
}

function growth(state = initialState, action){
    switch(action.type) {
        default:
            return state
    }
}

export default growth;