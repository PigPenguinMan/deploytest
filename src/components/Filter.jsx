import styles from '../css/Filter.module.css';
import { Link } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import categorydata from "../data/categorydata";
import categorydata1 from "../data/categorydata1";
import DataContext from "../data/DataContext";




const Filter = () => {
    const {state,action}= useContext(DataContext);
    const [isFilter, setIsFilter] = useState(false);

    // 필터버튼 이벤트 함수
    const handleBtns = (e) => {
        setIsFilter == true ? setIsFilter(false) : setIsFilter(true);
        let word = e.target.value;
        if (word === 'Major') { 
            action.setCategory(categorydata);
        } else if (word === 'Place') {
            action.setCategory(categorydata1);
        }
    }
    
    return (
        <>
            <div className=''>
                <div className={styles.btn__box}>
                    <button className={styles.btn} value='Place' onClick={handleBtns}>지역별</button>
                    <button className={styles.btn} value='Major' onClick={handleBtns}>진료별</button>
                </div> 
                <div className={styles.container}>
                    {
                        isFilter == true ?
                            state.category == categorydata1 ? categorydata1.map((item, id) => {
                                return (
                                    
                                    <div key={id} className={styles.category__box}>
                                        <Link className={styles.link} to={'/placedetail/' + id + '/'}>
                                            <img className={styles.img} src={require('../img/place1.png')}  />
                                            <h4 className={styles.text}>{item.name}</h4>
                                            
                                        </Link>
                                    </div>
                                ) 
                            }) : categorydata.map((item, id) => {
                                return (
                                    <div key={id} className={styles.category__box}>
                                        <Link className={styles.link} to={'/majordetail/' + id + '/'}>
                                            <img className={styles.img} src={require(`../img/${item.icon}`)} />
                                            <h4 className={styles.text}>{item.name}</h4>
                                        </Link> 
                                        
                                        
                                    </div>
                                )
                            }) : null
                    }
                    
                </div>
                <img src="../img/mydoctor.png" alt="" />
            </div>
        </>
    );
}

export default Filter;