import React from 'react'
import './style/contact.css'

function Contact() {
  return (
    <section id="contact">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h2>Contact</h2>
            </div>
            <div className="col-md-12">
                <p className="contactinfo">
                    <a href="tel:+994515619425">+994 51 561 94 25</a>
                </p>
                <p className="contactinfo">
                    <a href="ahad.taghiyev@gmail.com">ahad.taghiyev@gmail.com</a>
                </p>
              
              
                <p>
                    <a target="_blank" href="https://github.com/AhadDV"><i className="fab fa-github"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/ahad-tagh%C4%B1yev-707129233/"><i
                            className="fab fa-linkedin-in"></i></a>
                    <a target="_blank" href="https://wa.me/994515619425"><i className="fab fa-whatsapp"></i></a>
                    <a target="_blank" href="https://www.facebook.com/ehed.tagyev.14"><i
                            className="fab fa-facebook"></i></a>
                </p>
            </div>
          
            <div className="col-md-12 disclaimer">
                <p>© Ahad Taghiyev. All Rights Reserved. </p>
                    
            </div>
        </div>
    </div>
</section>
  )
}

export default Contact