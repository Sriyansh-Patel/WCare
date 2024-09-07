import logo from "./Img/logo.png"
import Navbar1 from "./Navbar"
export default function Header(){
return(
    <>
    <div className="header">
        <div className="headline">
            <div className="logo">
                <a href="#home">
                <img src={logo}></img>
                </a>
            </div>
        </div>
    </div>
    <div className="wrap">
    <Navbar1/>
    </div>
    </>
)}