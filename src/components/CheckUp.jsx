import Preview from './Preview';
import { useSelector } from 'react-redux';
import { useContext} from "react";
import DataContext from "../data/DataContext";
import OnLogin_CheckUp from './OnLogin_CheckUp';

const CheckUp = () => {
    const data = useContext(DataContext);
    const preview2 = useSelector((state)=>(state.checkUp.preview2))
    return (  
        <>
        {data.state.login ? (
            <>
                <OnLogin_CheckUp/>
            </>
        ):(
            <div className='first_box'>
                <Preview content={preview2} />
            </div>
        )}
        </>
    );
}
 
export default CheckUp;