import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Product.css'

const ProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [quantities, setQuantities] = useState({});
  const productsPerPage = 4;
  const totalProducts = 12;

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalProducts / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleIncreaseQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const handleDecreaseQuantity = (productId) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[productId] || 1;
      return {
        ...prevQuantities,
        [productId]: currentQuantity > 1 ? currentQuantity - 1 : 1,
      };
    });
  };

  // Assuming you have an array of products
  const products = [
    {
      id: 1,
      name: ' American Shih Tzu. ',
      image: 'https://images.unsplash.com/photo-1608096299210-db7e38487075?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     
      price:  2449.99,
     description:  'hdfgdjk'  // {age : undefined , behaviour : undefined  , id : undefined ,life_expectancy :undefined  , size :undefined , breed : undefined , color: undefined , origination : undefined }

      // Add other properties as needed
    },
    {
        id: 2,
        name: 'Golden Retriever',
        image: 'https://images.unsplash.com/photo-1599692392256-2d084495fe15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdvbGRlbiUyMHJldHJpZXZlciUyMHB1cHB5fGVufDB8fDB8fHww',
        description: 'The Golden Retriever is a Scottish breed of retriever dog of medium size. It is characterised by a gentle and affectionate nature and a striking golden coat.',
        Breed: 'Breed: Scottish',
         price: 12549.99,
        // Add other properties as needed
      },
      {
        id: 3,
        name: 'Pug',
        image: 'https://images.unsplash.com/photo-1530041686259-53d26f863313?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHB1ZyUyMHB1cHB5fGVufDB8fDB8fHww',
        description: 'The Pug is a breed of dog originally from China, with physically distinctive features of a wrinkly, short-muzzled face, and curled tail. .',
        Breed: 'Chinease',
         price: 5449.99,
        // Add other properties as needed
      },
      {
        id: 4,
        name: 'Beagle',
        image: 'https://images.unsplash.com/photo-1512546321483-c0468b7b8a95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmVhZ2xlJTIwcHVwcHl8ZW58MHx8MHx8fDA%3D',
        description: 'The beagle is a breed of small scent hound, similar in appearance to the much larger foxhound. The beagle was developed primarily for hunting hare, known as beagling.',
        Breed: 'Hound', 
        price:7549.99,
        // Add other properties as needed
      },
      {
        id: 5,
        name: 'Pomeranian',
        image: 'https://images.unsplash.com/photo-1559076728-a51fe1c1f97a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFBvbWVyYW5pYW4lMjBwdXBweXxlbnwwfHwwfHx8MA%3D%3D',
        description: 'The Pomeranian dog, or simply Pomeranian, is a breed of dog of the Spitz type that is named for the Pomerania region in north-west Poland and north-east Germany in Central Europe.',
        Breed: 'Spitz type', 
        price: 6449.99,
        // Add other properties as needed
      },
      {
        id: 6,
        name: 'German Shepherd',
        image: 'https://images.unsplash.com/photo-1619980226692-f0a82c95e0cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R2VybWFuJTIwU2hlcGhlcmQlMjBwdXBweXxlbnwwfHwwfHx8MA%3D%3D',
        description: 'The German Shepherd, also known in Britain as an Alsatian, is a German breed of working dog of medium to large size.',
        Breed: 'German', 
        price: 12549.99,
        // Add other properties as needed
      },
      {
        id: 1,
        name: 'Indian Spitz',
        image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SW5kaWFuJTIwU3BpdHolMjBwdXBweXxlbnwwfHwwfHx8MA%3D%3D',
        description: 'The Indian Spitz is a spitz dog breed belonging to the utility group. The Indian Spitz was one of the most popular dogs in India in the 1980s and 1990s',
        Breed: 'Spitz type',
         price: 7849.99,
        // Add other properties as needed
      },
      {
        id: 1,
        name: 'Dalmatian',
        image: 'https://images.unsplash.com/photo-1647980229618-8a551de4ea98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fERhbG1hdGlhbiUyMHB1cHB5fGVufDB8MHwwfHx8MA%3D%3D',
        description: 'The Dalmatian is a breed of dog, which has a white coat marked with black or brown-coloured spots. Originating as a hunting dog, it was also used as a carriage dog in its early days',
        Breed: 'Dalmatia type',
         price: 6849.99,
        // Add other properties as needed
      },
      {
        id: 1,
        name: 'Rottweiler',
        image: 'https://images.unsplash.com/photo-1567752881298-894bb81f9379?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Um90dHdlaWxlciUyMHB1cHB5fGVufDB8MHwwfHx8MA%3D%3D',
        description: 'The Rottweiler is a breed of domestic dog, regarded as medium-to-large or large. The dogs were known in German as Rottweiler Metzgerhund, meaning Rottweil butchers' ,
        Breed: 'German', 
        price: 14549.99,
        // Add other properties as needed
      },
      {
          id: 1,
          name: 'Labrador Retriever',
          image: 'https://images.unsplash.com/photo-1672838564731-48a201effbb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGFicmFkb3IlMjBSZXRyaWV2ZXIlMjBwdXBweXxlbnwwfDB8MHx8fDA%3D',
          description: 'The Labrador Retriever, or simply Labrador, is a British breed of retriever gun dog. It was developed in the United Kingdom from fishing dogs imported from the colony of Newfoundland,.',
          Breed: 'Labrador ', 
          price: 12349.99,
          // Add other properties as needed
        },
        {
          id: 1,
          name: 'Boxer',
          image: 'https://plus.unsplash.com/premium_photo-1664303028333-80fef943aea5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Qm94ZXIlMjBwdXBweXxlbnwwfDB8MHx8fDA%3D',
          description: 'The Boxer is a medium to large, short-haired dog breed of mastiff-type, developed in Germany. The coat is smooth and tight-fitting; colors are fawn, brindled, or white, with or without white markings.',
          price: 9849.99,
          // Add other properties as needed
        },
    // Add more product entries as needed
  ];
  

  // Calculate the range of products to display
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const displayedProducts = products.slice(startIndex, endIndex);

  return (
    <Container fluid className="mt-5" style={{ backgroundColor: 'black', color: 'white' }}>
           <Row>
        <Col xs={12}>
          <div className="d-flex justify-content-between">
            <div>{`Displaying ${startIndex + 1}-${endIndex} of ${totalProducts} products`}</div>
            <div>
              <p style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#gray' }}>Result: DOGS</p>
            </div>
            <Button variant="secondary" style={{ borderRadius: '10px', padding: '5px 20px', fontSize: '14px' , height: '40px'}}>{/* Sort button goes here */}Sort</Button>
          </div>
        </Col>
      </Row>
      
      <Row>
      {displayedProducts.map(product => (
          <Col key={product.id} xs={12} className="mb-3">
            <Card style={{ width: '100%', backgroundColor: 'black', border: '1px solid #333' }}>
              <Row noGutters>
                <Col xs={3}>
                  <Card.Img src={product.image} style={{ height: '100%', objectFit: 'cover' }} />
                </Col>
                <Col xs={6}>
                  <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fff' }}>{product.name}</Card.Title>
                    <Card.Text style={{ color: '#fff' }}>{product.description}</Card.Text>
                    <Card.Text style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#FDFD96' }}>{`Rs. ${product.price}`}</Card.Text>
                    <Card.Text style={{ color: '#66ff66' }}>Free Delivery</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <Button variant="primary">Add to Cart</Button>
                      <div className="d-flex quantity-buttons">
                      <Button variant="secondary" className="mr-4" style={{ marginRight: '5px' }}onClick={() => handleDecreaseQuantity(product.id)}>-</Button>
                      <Button variant="secondary" className="mr-4" style={{ marginRight: '5px' }}>
                        {quantities[product.id] || 1}</Button>
                      <Button variant="secondary" onClick={() => handleIncreaseQuantity(product.id)}>+</Button>
                    </div>
                      <Button variant="warning"  href="./Cart" >Buy Now</Button>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-3">
        <Col xs={12} className="d-flex justify-content-center">
        <Button variant="secondary" onClick={handlePrevPage}>
    Previous
  </Button>
  <Button variant="secondary" className="ml-5" onClick={handleNextPage}>
    Next
  </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;

// const Product = () => {
//   const [product, setProducts] = useState([]);
//   const [page,setPage] = useState(0)
//   const {data:Product, loading, error}
//   const fetchData = async(event) => {
//     try {
//       const {data:Product, loading, error} = useFetch(`${BASE_URL}/Product/${event.target.name}`);
    
//     }
//   }
  
//   const {data:tours, loading, error} = useFetch(`${BASE_URL}/Product=?page=${page}`);
//   // const {data:tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`);

//   useEffect(()=>{
//     // const pages = Math.ceil(tourCount/ 8) 
//     const pages = Math.ceil(8) 
//     setPageCount(pages);
//     window.scrollTo(0, 400)
//   },// [page, tourCount, tours])
//   [page, 8, tours])


//   return (
//     <>
//       <CommonSection title={"All Tours"} />
//       <section>
//         <Container>
//           <Row>
//             <SearchBar />
//           </Row>
//         </Container>
//       </section>
//       <section className="pt-0">
//         <Container>
//           {loading && <h4 className="text-center pt-5">Loading.....</h4>}
//           {error && <h4 className="text-center pt-5">{error}</h4>}
//           {
//             !loading && !error && (<Row>
//             {tours?.map(tour=> (
//               <Col lg="3" className="mb-4" key={tour._id}> 
//                 <TourCard tour={tour}  />
//               </Col>
//             ))}

//             <Col lg='12'>
//               <div className="pagination d-flex align-items-center
//                justify-content-center mt-4 gap-3">
//                 {[...Array(pageCount).keys()].map(number=>( 
//                   <span 
//                   key={number} 
//                   onClick={()=> setPage(number)}
//                   className={page===number ? 'active__page':  ''}
//                   >
//                     {number + 1}
//                   </span>
//                 ))}
//               </div>
//             </Col>
//           </Row>
//             )
//           }
         
//         </Container>
//       </section>
//       <Newsletter />
//     </> 
//   );   
  
// };

// export default Tours;