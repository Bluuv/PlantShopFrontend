import { Outlet } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";

function NavLayout(){
    return(<>
        <MainNavbar/>
        <Outlet/>
    </>);
}

export default NavLayout;