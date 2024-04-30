import React from 'react'
import 
{ BsGrid1X2Fill,BsFillBuildingsFill,BsCardList,  BsFillGearFill}
 from 'react-icons/bs'
 import { BsFillPersonFill } from "react-icons/bs";
 import { Link } from 'react-router-dom';
 import { AiOutlineForm } from "react-icons/ai";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
    <div className='sidebar-brand'>
        <img src="img/jain logo.png" alt="logo" className='logo_image' /> 
    </div>
    <span className='icon close_icon' onClick={OpenSidebar}>X</span>
</div>


        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
           
            <li className='sidebar-list-item'>
                <a href="/Block">
                    <BsFillBuildingsFill className='icon'/> Room
                </a>
            </li>
            
            
            <li className='sidebar-list-item'>
                <a href="/complain">
                    <AiOutlineForm  className='icon'/> Compaint form
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar