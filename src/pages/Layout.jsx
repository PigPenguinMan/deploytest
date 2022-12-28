import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
    return ( 
        <div className="Wrapper">
            <Outlet/>

            
            <Navbar />
        </div>
    );
}

export default Layout;