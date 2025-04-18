import React from 'react'
import { clientsReviews } from '../assets/data'
import "../styles/revs.scss"

function Revs() {
    return (
        <main className='main-revs'>
            <section className="hero-content">
                <h1 className='display-1'>Reviews</h1>
                <p className='fs-5'>Happy clients!</p>
            </section>
            <section className="reviews-section">
                {clientsReviews.map(client => {
                    return (
                    <div className="rev-card" key={client.id}>
                        <div className="user-data">
                            <img src={client.picUser} alt={`${client.username} pic`} />
                            <strong>{client.username}</strong>
                        </div>
                        <p>{client.stars}</p>
                        <hr />
                        <p className='review-card-text'>
                            {client.review}
                        </p>
                    </div>)
                })}
            </section>
        </main>
    )
}

export default Revs
