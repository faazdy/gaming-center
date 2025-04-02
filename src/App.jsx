import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/main.scss"
import Nav from './components/landing/Nav'
import Carrousel from './components/landing/Carrousel'
import { services } from './assets/data'

function App() {
  return (
    <>
      <Nav />
      <main className='main-body'>
          <section className="hero-content">
            <h1 className='display-1'>Center</h1>
            <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, accusamus vel alias, architecto asperiores in, ullam exercitationem quae autem illo aliquid vitae culpa odio! Labore doloribus ipsum accusamus saepe eos.</p>
            <div className="buttons">
              <button className='btn btn-primary'>A</button>
            </div>
          </section>
          <section className="about-section" id='about-section'>
            <div className="text">
              <h2 className='display-4'>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero nostrum laborum numquam voluptas, quod vitae aspernatur minus dolor ullam esse fugit odio provident reprehenderit suscipit inventore expedita, quisquam voluptates sed.
              </p>
            </div>
            <div className="img">
              <img src="./content imgs/s1.png" alt="pic" className='img-fluid'/>
            </div>
          </section>
          <section className="services-section" id='services-section'>
            <div className="text">
              <h2 className="display-4">Services</h2>
              <p>
                Each service price is hourly.
              </p>
            </div>
            <div className="card-container">
              {services.map(service =>{
                return (
                <div className="card" key={service.id}>
                  <img src={service.icon} alt="card" className='card-image'/>
                  <h3 className="display-6">{service.nameService}</h3>
                  <strong className=''>${service.price}</strong>
                </div>
                )
              })}
               
            </div>
          </section>
          <div className="reviews-section">
            <div className="text">
              <h2 className='display-4'>Revs</h2>
            </div>
            <Carrousel />
          </div>
      </main>
    </>
  )
}

export default App

