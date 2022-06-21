import { faL } from '@fortawesome/free-solid-svg-icons'
import {useState,useEffect} from 'react'
import './style/header.css'
import Pdf from '../Resume/CV.pdf'
function Index() {
  const[IsNavbarToggle,setNavbarToggle]=useState(false)
  const[IsMore,SetMore]=useState(false)
    const activeHandeler=(e)=>{
      var items=document.querySelectorAll(".head-item")
      items.forEach(item => {
        if (item.classList.contains("active")) {
            item.classList.remove("active")
        }
        e.classList.add("active")
      });
    }
    const navbarToggle=()=>{
      setNavbarToggle(IsNavbarToggle?false:true)
     
    }

    useEffect(() => {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 100) {
            SetMore(true)
          } else {
             SetMore(false)
          }
      });
  }, []);
    
   
  return (


   <header className={IsMore?'scroll':null}>
    <div className='container'>
          <div className='row'>
            <div className='dev-name col-lg-5 col-md-4 col-sm-4'>
                <h2 className='developer-name'>Ahad Taghiyev</h2>
            </div>

            <div className='nav-bar col-md-7 col-sm-7'>
             <div className='navbar'>
                <ul>
                    <a href='#intro'><li onClick={(e)=> activeHandeler(e.target)} className='head-item active'>Intro</li></a>
                    <a href='#project'><li onClick={(e)=>activeHandeler(e.target)} className='head-item'>Projects</li></a>
                    <a href='#skills'><li onClick={(e)=>activeHandeler(e.target)} className='head-item'>Skills</li></a>
                    <a href='#exp'><li onClick={(e)=>activeHandeler(e.target)} className='head-item'>Exp. & Edu.</li></a>
                    <a href='#contact'><li onClick={(e)=>activeHandeler(e.target)} className='head-item'>Contact</li></a>
                    <a  href={Pdf}><li style={{color:"blue"}}>Resume</li></a>
                </ul>
             </div>
            </div>

            <div className='mobile-navbar col-md-8 col-sm-7'>
            <div  className='bar-icon'>
            <i onClick={()=>navbarToggle()} className="fa-solid fa-bars"></i>
              <div className={IsNavbarToggle?"activebar mobile-menu":"mobile-menu"}>
                <ul>
                <a href='#intro'><li onClick={(e)=> activeHandeler(e.target)} className='head-item active'>Intro</li></a>
                    <a href='#project'><li onClick={(e)=>activeHandeler(e.target)} className='head-item'>Projects</li></a>
                    <a href='#skills'><li onClick={(e)=>activeHandeler(e.target)} className='head-item'>Skills</li></a>
                    <a href='#exp'><li onClick={(e)=>activeHandeler(e.target)} className='head-item'>Exp&Edu</li></a>
                    <a href='#contact'><li onClick={(e)=>activeHandeler(e.target)} className='head-item'>Contact</li></a>
                    <a target='_blank' href={Pdf}><li style={{color:"blue"}}>Resume</li></a>
                </ul>
              </div>
            </div>
             </div>
          </div>
    </div>
   </header>
  )
}

export default Index