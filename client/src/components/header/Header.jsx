import "./header.css";
import Image from "../../assets/header.jpeg";


export default function Header()  {
  return (
    <div className='header'>
    <div className="headerTitles">
    <span className="headerTitleLg">Veganism</span>
    <span className="headerTitleSm">Peace begins on your plate - Go Vegan</span>
    </div>
    <img  className="headerImg" src={Image} alt=" "/>
    </div>
  )
}
