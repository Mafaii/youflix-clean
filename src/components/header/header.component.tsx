import Logo from "../logo/logo.svg.component";
import Navi from "../navigation/navi.component";
import UserDropDown from "../user.dopdown/user-dropdown.component";

const Header = () => {
    return <header className="header-gradient p-5  flex fixed z-20 w-full ">
        <Logo />        
        <Navi/>
        <UserDropDown/>
    </header>
}

export default Header;