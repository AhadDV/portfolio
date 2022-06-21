import React from 'react'
import circle from './image/circle.jpg'
import './style/experience.css'

function Experience() {
  return (
    <section id="exp">
    <div class="container">
        <div class="row">
         <div className='col-lg-6 col-md-6 col-sm-12'>
            <h2>Experience</h2>
            <div className='expItem'>
                <img src={circle}></img>
                <h4>Full Stack Developer</h4>
                <p>Bars Team</p>
            </div>
            <div className='expItem'>
                <img src={circle}></img>
                <h4>Mentor "Full-Stack"</h4>
                <p>Code Academy</p>
            </div>
           
            <div className='expItem'>
                <img src={circle}></img>
                <h4>Full Stack Developer</h4>
                <p>Ozon Company</p>
            </div>

            
         </div>
         <div className='col-lg-6 col-md-6 col-sm-12'>
            <h2>Education</h2>
            <div className='expItem'>
                <img src={circle}></img>
                <h4>Programming</h4>
                <p>Code Academy</p>
            </div>
            <div className='expItem'>
                <img src={circle}></img>
                <h4>Tourism and Managment</h4>
                <p>Universty of Azerbaijan Tourism and Managment</p>
            </div>
            <div className='expItem'>
                <img src={circle}></img>
                <h4>English Language</h4>
                <p>Gold Language Academy</p>
            </div>
           
         </div>
     
        </div>

    </div>
</section>
  )
}

export default Experience