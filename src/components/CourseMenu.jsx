import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/CourseMenu.css';
const CourseMenu = ({kind, setKind, setSearch, setArea}) => {

    return (
        <div>
        <Dropdown className="menuBox" onClick={() => {setSearch(null); setArea(null);}}>
          <Dropdown.Toggle className="menuToggle" variant=''>
            {kind ? kind : "진료과목"}
          </Dropdown.Toggle>
        
          <Dropdown.Menu variant=''>
            <Dropdown.Item className="menuToggle_item"
            onClick={() => {setKind("내과")
            } }>내과</Dropdown.Item>
            <Dropdown.Item  className="menuToggle_item"  onClick={() => { setKind("신경과")
            } } > 신경과 </Dropdown.Item>
            <Dropdown.Item  className="menuToggle_item" onClick={() => { setKind("외과")
            } }  >외과</Dropdown.Item>
            <Dropdown.Item  className="menuToggle_item" onClick={() => { setKind("정형외과")
            } } >정형외과</Dropdown.Item>
            <Dropdown.Item  className="menuToggle_item" onClick={() => { setKind("신경외과")
            } } >신경외과</Dropdown.Item>
            <Dropdown.Item  className="menuToggle_item" onClick={() => { setKind("마취통증의학과")
            } } >마취통증의학과</Dropdown.Item>
            <Dropdown.Item  className="menuToggle_item" onClick={() => { setKind("피부과")
            } } >피부과</Dropdown.Item>
            <Dropdown.Item  className="menuToggle_item" onClick={() => { setKind("재활의학과")
            } } >재활의학과</Dropdown.Item>
            <Dropdown.Item  className="menuToggle_item" onClick={() => { setKind("한방내과")
            } } >한방내과</Dropdown.Item>
            <Dropdown.Item  className="menuToggle_item" onClick={() => { setKind("한방재활의학과")
            } } >한방재활의학과</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </div>
    );
}

export default CourseMenu;