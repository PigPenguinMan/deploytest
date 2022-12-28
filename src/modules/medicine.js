/** 복약관리 페이지의 state 관리
 *  수업때 작성한 방명록처럼 입력 받아서 출력만 하고 따로 데이터 없이 진행 예정
*/

// 초기값 (여러개 리스트 > 배열 속 객체형태로 작성)
const initialState = [
    {
        pillId : 1,
        pillsName: "아세트아미노펜",
        pillsCount: 1,
        pillsDose: 3,
    },
    {
        pillId : 2,
        pillsName: "페니라민정",
        pillsCount: 1,
        pillsDose: 3,
    },
];
// initialState 밖에, 값을 구분하기 위한 id 선언
// (변해야 하는 값이므로 const대신 let)
let pillId = 3;

// 들어갈 리듀서함수 내용
function medicine (state=initialState, action) {
    switch(action.type) {
        case "addMedicine" :
        // 복약정보를 리스트에 추가할 것
        // Medicine.jsx에서 작성한 값(pills)을 들고와서 리스트에 추가 후
        // 만들어진 객체를 기존 배열에 추가 > 새로 배열을 만들어 추가 : concat() 
        const newPills = {...action.payload, pillId:pillId }
        pillId++;
        
        const newPillsArr = state.concat(newPills);
            return newPillsArr; 
        default :
        return state;
    }
}

// 액션함수 생성 & 내보내기
export const addMedicine =(pills)=> ({type:"addMedicine", payload:pills});

// 리듀서함수 내보내기 > modules/index.js에 추가
export default medicine;