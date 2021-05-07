import React from "react";
import "./Card.css";

function Card({ heading, views, downloads, likes, src }) {
  return (
    <div className="card">
      <a className="card">
        <img className="thumb" src={src}></img>
        <article>
          <h1>{heading}</h1>
          <p>
            <span>Views :</span> {views}
          </p>
          <p>
            <span>Downloads :</span>
            {downloads}
          </p>
          <p>
            <span>Likes :</span>
            {likes}
          </p>
          <span>Kezz Bracey</span>
          <div className="tags">
            <p className="tag">#fun</p>
            <p className="tag">#comedy</p>
            <p className="tag">#enjoy</p>
          </div>
        </article>
      </a>
    </div>
  );
}

export default Card;
