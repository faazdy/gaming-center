import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/main.scss"

function App() {
  return (
    <main className='main-body'>
        <section className="hero-content">
          <h1 className='display-1'>Center</h1>
          <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, accusamus vel alias, architecto asperiores in, ullam exercitationem quae autem illo aliquid vitae culpa odio! Labore doloribus ipsum accusamus saepe eos.</p>
          <div className="buttons">
            <button className='btn btn-primary'>A</button>
          </div>
        </section>
        <section className="about-section">
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
        <section className="services-section">
          <div className="text">
            <h2 className="display-4">Services</h2>
          </div>
          <div className="card-container">
            <div className="card">
              <img src="./icons/logo.png" alt="card" className='card-image'/>
              <h3 className="display-5">Service #</h3>
              <strong className=''>Get fun</strong>
            </div> 
          </div>
        </section>
    </main>
  )
}

export default App

