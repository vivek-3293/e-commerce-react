import React from 'react';
import product1 from "../images/cloths/c6.webp";
import product2 from "../images/cloths/c9.webp";
import product3 from "../images/cloths/c5.webp";
import product4 from "../images/cloths/c4.webp";

const blogs = [
  {
    img: product1,
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, numquam?',
    link: 'https://www.hellofashionblog.com/'
  },
  {
    img: product2,
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, numquam?',
    link: 'https://www.itscasualblog.com/'
  },
  {
    img: product3,
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, numquam?',
    link: 'https://www.hellofashionblog.com/'
  },
  {
    img: product4,
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, numquam?',
    link: 'https://www.itscasualblog.com/'
  }
];

const Blog = () => {
  return (
    <div className="blogs" id="blog">
      <div className="blog-head text-center">
        <h1>Read <span>Blog's</span></h1>
      </div>
      <div className="blog">
        {blogs.map((blog, index) => (
          <div className="blogCard" key={index}>
            <img src={blog.img} alt={`Blog ${index + 1}`} />
            <p>{blog.text}</p>
            <a target="_blank" rel="noopener noreferrer" href={blog.link}>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
