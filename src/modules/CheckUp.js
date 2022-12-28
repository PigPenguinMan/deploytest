const initialState = {
    preview2 : 
        {
            id:2, title:"꼼꼼한 육아관리", desc:"영유아검진/예방접종 스케줄을 \n 시기에 맞춰 자동으로 알려드려요!",
            sub_desc:"쌓은 히스토리로 건간관리하기"
        },
    hchecks : [
                {id:1, s_month:4, e_month:6},
                {id:2, s_month:9, e_month:12},
                {id:3, s_month:18, e_month:24},
                {id:4, s_month:30, e_month:36},
                {id:5, s_month:42, e_month:48},
                {id:6, s_month:54, e_month:60},
                {id:7, s_month:66, e_month:71},
    ],
    

}

function checkUp(state = initialState, action){
    switch(action.type) {
        default:
            return state
    }
}

export default checkUp;