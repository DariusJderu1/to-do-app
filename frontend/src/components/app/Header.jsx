import { RiMenuUnfold4Line } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";

function Header() {

    return (
        
        <header>
            <span><RiMenuUnfold4Line /></span>

            <span>GetDone</span>

            <span><IoSettingsSharp /></span>
        </header>
    );
}

export default Header;