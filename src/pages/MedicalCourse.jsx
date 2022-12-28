import { useState } from 'react';
import AreaMenu from '../components/AreaMenu';
import CourseMenu from '../components/CourseMenu';
import Hospital from '../json/Hospital.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Pagination from '../components/Pagenation';
import '../css/CourseMenu.css'
import SearchHosptial from '../components/SearchHospital';

const SearchBar = () => {
    const [search, setSearch] = useState();
    const [searchFin, setSearchFin] = useState();
    const [kind, setKind] = useState();
    const [area, setArea] = useState();

    // pagenation 
    // 페이지당 게시물 수 
    const [limit, setLimit] = useState(5);
    // 현 페이지 번호
    const [page, setPage] = useState(1);
    // 유저가 페이지당 표시할 개수
    const offset = (page -1) * limit; 

    return (
        <div className='searchContainer'>

            <div style={{display : "flex", margin : "5vh 2vh 0 2vh"}}>
            <CourseMenu setKind={setKind} kind={kind} setArea={setArea} setSearch={setSearch}/>
            <AreaMenu area={area} setArea={setArea} setSearch={setSearch} setKind={setKind}/>    
            <InputGroup>
            <Form.Control className='searchbar'
            onChange={e => {setSearch(e.target.value); setKind(null); setArea(null)}}
            placeholder="병원/진료과 검색" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            </InputGroup>
            </div>
        
        <div className='printBox'>
           {Hospital.filter((value) => {
            if(searchFin == ""){
                return value
            }else if(value.사업장.includes(search)){
                return value
            }else if(value.진료과목내용명.includes(kind)){
                return value
            }else if(value.주소.includes(area)){
                return value
            }
           }).slice(offset, offset + limit).map((index) => {
                return <SearchHosptial 진료과목내용명={index.진료과목내용명}  사업장={index.사업장} 전화번호 = {index.전화번호} 주소={index.주소} />
            })}
        </div> 
        
        <div style={{position:"fixed", bottom: "25px", left :"170px"}}>
        <Pagination  
              total={Hospital.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
        </div>
        </div>
        
    );
}
export default SearchBar;