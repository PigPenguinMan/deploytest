// 작성한 리덕스 모듈을 하나로 묶어서 사용
import { combineReducers } from "redux";


// 작성한 리덕스 모듈을 가져옴
import healthChart from "./HealthChart";
import checkUp from "./CheckUp";
import growth from "./Growth";
import temperature from "./Temperature";
import medicine from "./medicine";

// 작성한리덕스를 객체로 묶어서 내보냄
const rootReducer = combineReducers({healthChart, checkUp, growth, temperature, medicine });

export default rootReducer;