import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Card, Row, Col, Container } from 'react-bootstrap';

const SearchResultsPage = ({searchItem}) => {
    console.log(searchItem)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('query');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSearchResults = async () => {
            
            try {
                console.log(searchItem);
                const response = await axios.get(`http://localhost:8000/product/${searchItem}`);
                console.log(response.data.product)
                setSearchResults(response.data.product);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching search results:', error);
                setLoading(false);
            }
        };

        // if (searchItem) {
            fetchSearchResults();
        // } else {
            // setLoading(false);
        // }
    }, [searchItem]);

    return (
        <div>
          <h1>Search Results</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {searchResults.map(result => (
                <li key={result?.productId}>
                  <Container fluid className="mt-5" style={{ backgroundColor: 'black', color: 'white' }}>
                    <Row>
                      <Col key={result.productId} xs={12} className="mb-3">
                        <Card style={{ width: '100%', backgroundColor: 'black', border: '1px solid #333' }}>
                          <Row noGutters>
                            <Col xs={3}>
                              <Card.Img src={result.imageLink} style={{ height: '100%', objectFit: 'cover' }} />
                            </Col>
                            <Col xs={6}>
                              <Card.Body>
                                <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#ad8cd4' }}>{result.productName}</Card.Title>
                                <Card.Text style={{ color: '#fff' }}>Breed : {result.description.breed}</Card.Text>
                                <Card.Text style={{ color: '#fff' }}>Age : {result.description.age} years</Card.Text>
                                <Card.Text style={{ color: '#fff' }}>color : {result.description.color}</Card.Text>
                                <Card.Text style={{ color: '#fff' }}>LifeExpectancy : {result.description.lifeExpectancy} years</Card.Text>
                                <Card.Text style={{ color: '#fff' }}>size : {result.description.size} in length</Card.Text>
                                <Card.Text style={{ color: '#fff' }}>Origination : {result.description.origination}</Card.Text>
                                <Card.Text style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#FDFD96' }}>{`Rs. ${result.price}`}</Card.Text>
                              </Card.Body>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
   
};

export default SearchResultsPage;

// return (
    //     <div>
    //         <h1>Search Results</h1>
    //         {loading ? (
    //             <p>Loading...</p>
    //         ) : (
    //             <ul>
    //                 {searchResults.map(result => (
    //                     <li key={result?.productId}>
    //                         <h2>{result?.productName}</h2>
                            
                           
    //                     </li>
    //                 ))}
    //             </ul>
    //         )}
    //     </div>
    // );