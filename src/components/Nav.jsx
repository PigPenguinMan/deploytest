import '../css/Nav.css'
import Preview from './Preview';
import HealthChart from './HealthChart';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import CheckUp from './CheckUp';
import Notice from './Notice';

const Nav_C = () => {
    const preview3 = useSelector((state) => (state.growth.preview3))

    const lists = [
        { id: 1, title: "건강피드", name: "first" }, { id: 2, title: "검진/접종", name: "second" }, { id: 3, title: "성장관리", name: "third" }, { id: 4, title: "체온관리", name: "fourth" },
    ]

    const [content, setContent] = useState("first");

    const handleClickButton = e => {
        const { name } = e.target;
        setContent(name);
    };
    const selectComponent = {
        first: <HealthChart />,
        second: <CheckUp />,
        third: <div className='first_box'>
                <Preview content={preview3} />
                </div>,
        fourth: <Notice />,
    };
    const list = lists.map((el) => (
        <button key={el.id} onClick={handleClickButton} className={content === el.name ? "active" : null} name={el.name}>{el.title}</button>
    ))
    return (
        <>
            <div className="nav clearfix">
                <div className='nav_box'>
                    {list}
                </div>
            </div>
            <>
                {content && <>{selectComponent[content]}</>}
            </>
        </>
    );
}

export default Nav_C;
