import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";



const GlobalStyles = createGlobalStyle`
${reset}
// 아래에 전역 스타일을 추가

/* 로우 영역 */
.My_row {padding: 0 28px;}

/* 여백 초기화 */
body, div, ul, li, dl, dd, dt, ol, h1, h2, h3, h4, h5, h6, input, fieldset, legend, p, select, table, th, td, tr, textarea, button, form, figure, figcaption {margin:0; padding:0;}

/* 폰트 스타일 초기화 */
em, address {font-style: normal;}

/* 블릿기호 초기화 */
dl,ul,li,ol,menu {list-style: none;}


/* 테두리 초기화 */
img, fieldset {border: 0 none;}

/* 버튼 초기화 */
button {border: 0;}

/* 반응형 이미지 */
img, video {width: 100%;}

/* clearfix */
.clearfix{*zoom:1;}
.clearfix:before, .clearfix:after {display: block; content: ''; line-height: 0;}
.clearfix:after {clear: both;}
       
`;

export default GlobalStyles;