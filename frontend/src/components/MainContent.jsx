import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import './MainContent.css';

const MainContent = () => {
  const slides = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Love My Dog',
      description: 'Providing Trained Service Animals to Individuals with Disabilities...',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Love My Cat',
      description: 'Providing Trained Service Animals to Individuals with Disabilities...',
    },
    {
      imageUrl: 'https://plus.unsplash.com/premium_photo-1661882144626-692d2bb8a07e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Love My Bird',
      description: 'Providing Trained Service Animals to Individuals with Disabilities...',
    },
  ];

  return (
    <Carousel interval={3000}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img src={slide.imageUrl} className="d-block w-100" alt={`Slide ${index + 1}`} />
        <Carousel.Caption>
          <div className="caption-text left-align">
            <h3 className="big-bold header">Love My Pets</h3>
            <p>
              Providing Trained Service Animals to Individuals with Disabilities
              <br />
              Love My Dog is a nonprofit organization with a primary mission to provide trained service animals to individuals with disabilities. We fund these services through a range of training programs and fundraising initiatives, such as our product line and container homes.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
      </Carousel>
      
  );
}

export default MainContent;