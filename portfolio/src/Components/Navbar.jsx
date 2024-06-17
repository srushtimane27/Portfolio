import React from 'react'
import "./../Css/navbar.css";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const homePage = useNavigate();
    const aboutPage = useNavigate();
    const servicesPage = useNavigate();
    const projectPage = useNavigate();
    const contactPage = useNavigate();


    async function homeRedirect(){
        homePage(`/`)
    }
    async function aboutRedirect(){
        aboutPage(`/about`)
    }
    async function skillsRedirect(){
        servicesPage(`/skills`)
    }
    async function projectRedirect(){
        projectPage(`/projects`)
    }
    async function contactRedirect(){
        contactPage(`contact`)
    }

  return (
    <div className='nav-screen'>
        <div className='one'>
            <div>Srushti</div>
        </div>
        <div className='two'>
            <div onClick={()=>homeRedirect()}>Home</div>
            <div onClick={()=>aboutRedirect()}>About</div>
            <div onClick={()=>skillsRedirect()}>Skills</div>
            <div onClick={()=>projectRedirect()}>Projects</div>
            <div onClick={()=>contactRedirect()}>Contact Me</div>
        </div>
    </div>
  )
}

export default Navbar