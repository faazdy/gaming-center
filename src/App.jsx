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
          <h1 className='display-1'>GG Nexus</h1>
          <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, accusamus vel alias, architecto asperiores in, ullam exercitationem quae autem illo aliquid vitae culpa odio! Labore doloribus ipsum accusamus saepe eos.</p>
          <div className="buttons">
            <a href="#reserves-section" className='btn-cus'>COME TO PLAY!</a>
            <a href="#about-section" className='btn-cus secondary-cus'>ABOUT US</a>
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
            <img src="./content imgs/s1.png" alt="pic" className='img-fluid' />
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
            {services.map(service => {
              return (
                <div className="card" key={service.id}>
                  <img src={service.icon} alt="card" className='card-image' />
                  <h3 className="display-6">{service.nameService}</h3>
                  <strong className=''>${service.price}</strong>
                </div>
              )
            })}
          </div>
        </section>

        <section className="reviews-section" id="reviews-section">
          <div className="text">
            <h2 className='display-4'>Experiences</h2>
          </div>
          <Carrousel />
        </section>
        <section className="reserves-section" id='reserves-section'>
          <div className="text">
            <h2 className='display-4'>Do u wanna play here?</h2>
            <p>
              Complete the form and let's play!
            </p>
          </div>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="col-md-6">
              <label htmlFor="platform" className="form-label">Plataform</label>
              <select id="platform" className="form-select">
                <option value="">Select a plataform...</option>
                {services.map(option => {
                  return <option value={option.nameService} key={option.id}>{option.nameService}</option>
                })}
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="date" className="form-label">Date</label>
              <input type="date" className="form-control" id="date" />
            </div>
            <div className="col-md-3">
              <label htmlFor="time" className="form-label">Hour</label>
              <input type="time" className="form-control" id="time" />
            </div>
            <div className="col-12">
              <label htmlFor="comments" className="form-label">Comments (optional)</label>
              <textarea className="form-control" id="comments" rows="2"></textarea>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="termsAccepted" />
                <label className="form-check-label" htmlFor="termsAccepted">
                  Acept terms and conditions.
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-cs">Reserve</button>
            </div>
          </form>

        </section>
      </main>
      <footer>
        2025 | Gaming Center - Landing by <a href="https://fazdev-front.netlify.app/">Leonardo</a>
      </footer>
    </>
  )
}

export default App

