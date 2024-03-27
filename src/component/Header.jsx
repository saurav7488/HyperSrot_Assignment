import { VscAccount } from "react-icons/vsc";
import '../Style/Header.css'
const Header = () => {
  return (
    <div className="header_outer_container" >
        <div className="Header_container" ><h1 className="Header_name" >Task Board</h1></div>

        <div className="Header_logo" ><VscAccount/></div>
    </div>
  )
}

export default Header
