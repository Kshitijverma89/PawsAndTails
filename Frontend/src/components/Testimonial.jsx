// Testimonial.jsx
import React from "react";
import './Testimonial.css'; // Import your CSS file for styling

const testimonials = [
  {
    name: "Maria Smantha",
    avatar: "https://images.unsplash.com/photo-1555893205-6aa790755864?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGFjdG9yfGVufDB8fDB8fHww",
    quote: "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.",
  },
  {
    name: "Lisa Cudrow",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWN0b3J8ZW58MHx8MHx8fDA%3D",
    quote: "Neque cupiditate assumenda in maiores repudi mollitia architecto.",
  },
  {
    name: "John Smith",
    avatar: "https://images.unsplash.com/photo-1580518337843-f959e992563b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFjdG9yfGVufDB8fDB8fHww",
    quote: "Delectus impedit saepe officiis ab aliquam repellat rem unde ducimus.",
  },
  
];

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h3 className="testimonial-heading">Testimonials</h3>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="avatar">
              <img src={testimonial.avatar} alt={`${testimonial.name}'s Avatar`} />
            </div>
            <div className="testimonial-content">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
