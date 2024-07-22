import React from 'react';
import Reviewm1 from "../images/custemers/m1.jpg";
import Reviewm2 from "../images/custemers/m2.jpg";
import Reviewm3 from "../images/custemers/m3.jpg";

const reviewsData = [
  {
    id: 1,
    image: Reviewm1,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, eius magni.",
  },
  {
    id: 2,
    image: Reviewm2,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, eius magni.",
  },
  {
    id: 3,
    image: Reviewm3,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, eius magni.",
  },
];


const CustomerReview = () => {
  return (
    <div className="customer" id="review">
      <div className="review-head text-center">
        <h1>Customer <span>Review</span></h1>
      </div>
      <div className="reviews">
        {reviewsData.map(review => (
          <div className="rCard mb-3" key={review.id}>
            <img src={review.image} alt={`Review ${review.id}`} />
            <p>{review.text}</p>
            <button>More.</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerReview;
