import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import { FaPaw ,FaHome ,FaDove ,FaFish , FaCat , FaDog} from 'react-icons/fa';

import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const dogImageURLs = [
    'https://images.unsplash.com/photo-1548658166-136d9f6a7e76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcGllc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHB1cHBpZXN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1619980296991-5c0d64b23950?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1616427828134-2a7ab9e3b065?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHB1cHBpZXN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1593134257782-e89567b7718a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHB1cHBpZXN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1620189507187-1ecc7e2e9cff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHB1cHBpZXN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1602250798140-fb1513d8f6a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHB1cHBpZXN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHB1cHBpZXN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHB1cHBpZXN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHB1cHBpZXN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1593134257782-e89567b7718a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHB1cHBpZXN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1620189507187-1ecc7e2e9cff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHB1cHBpZXN8ZW58MHx8MHx8fDA%3D',
  ];

  const catImageURLs = [
    'https://plus.unsplash.com/premium_photo-1677101626318-422def4d9b8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGtpdHRlbnN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1615789591457-74a63395c990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3V0ZSUyMGtpdHRlbnN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3V0ZSUyMGtpdHRlbnN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1602367810139-7a208cc7b39b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGN1dGUlMjBraXR0ZW5zfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGN1dGUlMjBraXR0ZW5zfGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_photo-1675848495392-6b9a3b962df0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGN1dGUlMjBraXR0ZW5zfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1583084602580-ff7d568021cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGN1dGUlMjBraXR0ZW5zfGVufDB8fDB8fHww7',
    'https://images.unsplash.com/photo-1615959417429-2140a2df2b7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGN1dGUlMjBraXR0ZW5zfGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_photo-1677181729163-33e6b59d5c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGN1dGUlMjBraXR0ZW5zfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1577696399928-7425c93e8ce5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGN1dGUlMjBraXR0ZW5zfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1602367810139-7a208cc7b39b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGN1dGUlMjBraXR0ZW5zfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGN1dGUlMjBraXR0ZW5zfGVufDB8fDB8fHww',
  ];

  
  const birdImageURLs = [
    'https://images.unsplash.com/photo-1562054438-9e28c06d1277?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlyZCUyMHBldHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1531360593661-93d8592f2576?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJpcmQlMjBwZXR8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1599062076043-94a78b3368ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJpcmQlMjBwZXR8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJpcmQlMjBwZXR8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1508144763612-c39d41eda06c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJpcmQlMjBwZXR8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1703417465970-e1b71f697cc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJpcmQlMjBwZXR8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1574068468668-a05a11f871da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJpcmQlMjBwZXR8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1597671144863-4addafa8a53e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJpcmQlMjBwZXR8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1578051696754-4652a8f67882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWNrZW58ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1703417465970-e1b71f697cc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJpcmQlMjBwZXR8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1574068468668-a05a11f871da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJpcmQlMjBwZXR8ZW58MHx8MHx8fDA%3D',
  ];

  const fishImageURLs = [
    'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlzaHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmlzaHxlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1673515785730-67054ee2962c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmlzaHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1513040260736-63dd0617fb66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZpc2h8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1585936529565-1871537209e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZpc2h8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1523585895729-a4bb980d5c14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZpc2h8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1671809039835-fd2073cb956a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZpc2h8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1543007168-5fa9b3c5f5fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZpc2h8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZpc2h8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1514503612056-e3f673b3f3bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZpc2h8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1513040260736-63dd0617fb66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZpc2h8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1585936529565-1871537209e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZpc2h8ZW58MHx8MHx8fDA%3D',
  ];

  

  const dogs = Array(12).fill(0).map((_, index) => ({
    id: index + 1,
    imageSrc: dogImageURLs[index],
    description: `Description for Dog ${index + 1}. Some quick example text to build on the product description.`,
  }));

  const cats = Array(12).fill(0).map((_, index) => ({
    id: index + 1,
    imageSrc: catImageURLs[index],
    description: `Description for Cat ${index + 1}. Some quick example text to build on the product description.`,
  }));

  const birds = Array(12).fill(0).map((_, index) => ({
    id: index + 1,
    imageSrc: birdImageURLs[index],
    description: `Description for Bird ${index + 1}. Some quick example text to build on the product description.`,
  }));

  const fishes = Array(12).fill(0).map((_, index) => ({
    id: index + 1,
    imageSrc: fishImageURLs[index],
    description: `Description for Fish ${index + 1}. Some quick example text to build on the product description.`,
  }));

  const reduceItems = (acc, cur, index) => {
    const groupIndex = Math.floor(index / 4);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(cur);
    return acc;
  };

  return (
    <div>
      <h2 className="header text-center">Hi! I am Doggo <FaDog/>...Take me to your home. <FaHome/></h2>
  
      {/* Dogs */}
      <Carousel interval={3000} className="mb-4">
        {dogs.reduce(reduceItems, []).map((group, groupIndex) => (
          <Carousel.Item key={groupIndex}>
            <div className="d-flex justify-content-around">
              {group.map((dog, dogIndex) => (
                <Card key={dogIndex} className="small-card">
                  <Card.Img variant="top" src={dog.imageSrc} className="small-image" />
                  <Card.Body>
                    <Card.Title>Dogs <FaDog/></Card.Title>
                    <Card.Text>{dog.description}</Card.Text>
                    <Button variant="primary" size="sm"> <a href ="/Product1" style={{ color: 'white', textDecoration: 'none' }} > Buy Now </a></Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
  
      {/* Cats */}
      <h2 className="header text-center">Hi! I am Meawwww <FaCat/>...Take me to your home. <FaHome/></h2>
      <Carousel interval={3000} className="mb-4">
        {cats.reduce(reduceItems, []).map((group, groupIndex) => (
          <Carousel.Item key={groupIndex}>
            <div className="d-flex justify-content-around">
              {group.map((cat, catIndex) => (
                <Card key={catIndex} className="small-card">
                  <Card.Img variant="top" src={cat.imageSrc} className="small-image" />
                  <Card.Body>
                    <Card.Title>Cats <FaCat/></Card.Title>
                    <Card.Text>{cat.description}</Card.Text>
                    <Button variant="primary" size="sm"> <a href ="/Product1" style={{ color: 'white', textDecoration: 'none' }} > Buy Now </a></Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <h2 className="header text-center">Hi! I am Birdiee <FaDove/>...Take me to your home. <FaHome/></h2>
  
  {/* Dogs */}
  <Carousel interval={3000} className="mb-4">
    {birds.reduce(reduceItems, []).map((group, groupIndex) => (
      <Carousel.Item key={groupIndex}>
        <div className="d-flex justify-content-around">
          {group.map((bird, birdIndex) => (
            <Card key={birdIndex} className="small-card">
              <Card.Img variant="top" src={bird.imageSrc} className="small-image" />
              <Card.Body>
                <Card.Title>Bird <FaDove/></Card.Title>
                <Card.Text>{bird.description}</Card.Text>
                <Button variant="primary" size="sm"> <a href ="/Product1" style={{ color: 'white', textDecoration: 'none' }} > Buy Now </a></Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Carousel.Item>
    ))}
  </Carousel>

  <h2 className="header text-center">Hi! I am Nemo <FaFish/>
...Fing me a home at your home. <FaHome/></h2>
  
  {/* Fish */}
  <Carousel interval={3000} className="mb-4">
    {fishes.reduce(reduceItems, []).map((group, groupIndex) => (
      <Carousel.Item key={groupIndex}>
        <div className="d-flex justify-content-around">
          {group.map((fish, fishIndex) => (
            <Card key={fishIndex} className="small-card">
              <Card.Img variant="top" src={fish.imageSrc} className="small-image" />
              <Card.Body>
                <Card.Title>Fish <FaFish/></Card.Title>
                <Card.Text>{fish.description}</Card.Text>
                <Button variant="primary" size="sm"> <a href ="/Product1" style={{ color: 'white', textDecoration: 'none' }}> Buy Now </a></Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
    </div>
  );
};

export default FeaturedProducts;