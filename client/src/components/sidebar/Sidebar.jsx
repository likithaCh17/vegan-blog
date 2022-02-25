import { useEffect, useState } from "react";
import "./Sidebar.css";
import axios from "axios";
import {Link} from "react-router-dom";
import Image from "../../assets/vegan_sidebar.jpg"


export default function Sidebar() {
  const [cats,setCats]= useState([]);

  useEffect(()=>{
    const getCats = async()=>{
      const res= await axios.get("/categories");
      setCats(res.data);
    }
    getCats();
  },[]);
  return (
    <div className="sidebar">
    <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img className="sidebarImg" src={Image} alt=""/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e
        iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
    </div>
    <div className="sidebarItem">
    <ul className="sidebarList"> 
    {cats.map((c)=>(
      <Link to={`/cat?=${c.name}`} className="link">
      <li className="sidebarListItem">{c.name}</li>
      </Link>
      
    ))}
        
        
    </ul>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">FOLLOW US</span>
    <div className="sidebarSocial">
    <i className=" sidebarIcon fa-brands fa-facebook"></i>
    <i className=" sidebarIcon fa-brands fa-twitter"></i>
    <i className=" sidebarIcon fa-brands fa-pinterest"></i>
    <i className=" sidebarIcon fa-brands fa-instagram"></i>
    </div>
    </div>
    </div>
  )
}
