import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./about.css";
import Aboutsection from '../Shared/Aboutsection';
import Image1 from '../assets/images/ava-2.jpg';
import Image2 from '../assets/images/ava-3.jpg';
import Image3 from '../assets/images/ava-4.jpg';
import Image4 from '../assets/images/ava-5.jpg';
import Image5 from '../assets/images/ava-6.jpg';

const TeamMemberCard = ({ name, image, description }) => (
    <div className="team-member-card">
      <img src={image} alt={`${name}'s Photo`} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );



const About = () => {
    const team = [
        {
          name: 'Kshitij Verma',
          image: Image1,
          description:
            'Rishabh is our dedicated pet enthusiast. With a deep love for animals, he ensures that every pet in our care receives the attention and care they deserve.',
        },
        {
          name: 'Anuja Gupta',
          image: Image2,
          description:
            'Anuja is our customer relations expert. She works tirelessly to match families with the perfect pet and provides ongoing support to ensure a smooth transition for both the pet and the new owner.',
        },
        {
          name: 'Namrata B',
          image: Image3,
          description:
            'Namrata is our health and wellness advocate. She oversees the well-being of all our pets, ensuring they are healthy, happy, and ready to become a cherished member of your family.',
        },
        {
          name: 'Sudhanshu Singh',
          image: Image4,
          description:
            'Sudhanshu is our tech guru. He ensures that our website and technology platforms run seamlessly, making the adoption process user-friendly and efficient.',
        },
        {
          name: 'Rishabh Agarwal',
          image: Image5,
          description:
            'Ksitij is our creative mind. From designing our website to curating engaging content, he adds the artistic touch that makes [Your Pet Shop] a delightful experience for pet lovers.',
        },
      ];
  return <>
  <Aboutsection title={""} />
  <section className='sec'>
  
  <Container className='conn'>
    <Row>
        <Col lg="12">
            
           <div className="container">
            
                <div className='heading'>
                    <h2>About us</h2>
                </div>
                
                <div className='content'>
                    <p> Welcome to our pet-loving community! At Paws-N-Tails, we are
          passionate about connecting families with their furry companions. Our
          journey began with the simple belief that every home deserves the joy
          and companionship that a pet brings.
                    </p>
                </div>
                
            </div>
        </Col>
        <Col lg="12">
            <div className="container ">
                <div className='heading'>
                    <h2>Our Mission</h2>
                </div>
                <div className='content'>
                    <p>Our mission at Paws-N-Tails is to provide loving homes for every
          pet. We strive to match our customers with the perfect furry friend,
          ensuring a lifetime of happiness for both the pet and their new
          family. We are committed to ethical practices, responsible
          breeding, and promoting the well-being of all animals.
                    </p>
                </div>
            </div>
        </Col>
        <Col lg="12">
            <div className="container ">
                <div className='heading'>
                    <h2>Our Team</h2>
                </div>
                <br></br>
         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', color: 'grey',  }}>
          {team.map((teammate, index) => (
            <div key={index} style={{ width: '30%', textAlign: 'center', margin: '10px' }}>
              <img
                src={teammate.image}
                alt={teammate.name}
                style={{ width: '80%', height: '70%', borderRadius: '50%' }}
              />
              <h4 style={{ color: 'white',  }}>{teammate.name}</h4>
              <p>{teammate.description}</p>
            </div>
          ))}
        </div>
                
                
            </div>
        </Col>
    </Row>
  </Container>
  
  </section>
</>
}

export default About;