import React from 'react'
import pactecno from './Images/pactecno.png'
import homeservice from './Images/home.png'
import beacon from './Images/beacon.az.png'
import ozon from './Images/ozon.png'
import wolt from './Images/wolt.png'
import darx from './Images/darx.png'
import './style/project.css'
function Index() {
  return (
   <section id='project'>
   
   <div className='title'>
    <p>Projects</p>
   </div>
   <div className='projects'>
    <div className='row'>
        <div className='project col-lg-4  col-md-6 col-sm-12'>
          <a rel='noreferre' target='_blank' href='https://pactecno.az/'>
          <img src={pactecno}/>
          </a>
        </div>
        <div className='project col-lg-4 col-md-6 col-sm-12'>
          <a rel='noreferre' target='_blank' href='https://myhomeservice.az/'>
          <img src={homeservice}/>
          </a>
        </div>
        <div className='project col-lg-4 col-md-6 col-sm-12'>
          <a rel='noreferrer' target='_blank' href='http://ramazanmanage-001-site1.itempurl.com/'>
          <img target='_blank' src={beacon}/>
          </a>
        </div>
        <div className='project col-lg-4 col-md-6 col-sm-12'>
          <a rel='noreferre' href='https://ozonaptek.az/bio'>
          <img src={ozon}/>
          </a>
        </div>
        <div className='project col-lg-4 col-md-6 col-sm-12'>
          <a rel='noreferre' target='_blank' href='http://ahad085-001-site1.itempurl.com/'>
          <img src={wolt}/>
          </a>
        </div>
        <div className='project col-lg-4 col-md-6 col-sm-12'>
          <a rel='noreferre' href='https://darx.az/'>
          <img src={darx}/>
          </a>
        </div>
    </div>
   </div>

   </section>
  )
}

export default Index