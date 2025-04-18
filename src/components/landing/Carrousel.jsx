import React from "react";
import { v4 as uuid } from "uuid";

const carrouselItems = [
  {
    id: uuid(),
    itemTitle: "🎮 Multiplayer Madness",
    itemDesciption: "Team up or go head-to-head with your friends in our high-end gaming zones.",
    itemImage: "./content-imgs/hero.png"
  },
  {
    id: uuid(),
    itemTitle: "🕹️ Enjoy with your friends",
    itemDesciption: "Relax with your friends in our place of gaming",
    itemImage: "./content-imgs/s2.png"
  },
  {
    id: uuid(),
    itemTitle: "🔥 Competitive Tournaments",
    itemDesciption: "Join weekly tournaments and show off your skills for glory and prizes.",
    itemImage: "./content-imgs/hero2.png"
  }
];

function Carrousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {carrouselItems.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {carrouselItems.map((item, index) => (
          <div key={item.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={item.itemImage} className="d-block w-100" alt={item.itemTitle} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{item.itemTitle}</h5>
              <p>{item.itemDesciption}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carrousel;
