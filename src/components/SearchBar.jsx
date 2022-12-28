import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';

const SearchBar_Home = () => {
    const navigate = useNavigate();
    const clickSearchBar = ()=>{
        navigate('/searchhospital')
    }


    return (
        <div>
            <InputGroup style={{ backgroundColor:"#1F403A", borderRadius:"6px"}}>
                <Form.Control
                    style={{margin : "10px", borderRadius : "10px"}}
                    onClick={clickSearchBar}
                    placeholder="근처 병원 검색하기" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </InputGroup>
        </div>
    );
}

export default SearchBar_Home;