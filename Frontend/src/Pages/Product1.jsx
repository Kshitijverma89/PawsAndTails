import React, { useState } from 'react';
import './Product.css'
import ProductCards from '../components/ProductCards';
import { useEffect } from 'react';
import useFetch from "../hooks/useFetch";
import { Container, Row, Col} from "reactstrap";
import { Button } from 'react-bootstrap';

const ProductPage = ({category}) => {
  console.log(category);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
 

  const [currentPage, setCurrentPage] = useState(1);
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
        }
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;

  const { data: products, loading, error } = useFetch(`http://localhost:8000/product/${category}`);
  console.log(products, loading);

  useEffect(() => {
    const pages = Math.ceil(products.length / 8)
    setPageCount(pages);
    window.scrollTo(0, 400)
  }, [page, products.length, products])


  console.log("products", products);

  return (
    <>
  
          {loading && <h4 className="text-center pt-5">Loading.....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {
            !loading && !error && (<Row>
            {products?.map(products=> (
              <Col lg="12"  key={products.productId}> 
              <ProductCards products={products}/>
              </Col>
            ))}

            <Col lg='12'>
              <div className="pagination d-flex align-items-center
               justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map(number=>( 
                  <span 
                  key={number} 
                  onClick={()=> setPage(number)}
                  className={page===number ? 'active__page':  ''}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
         
            )
          }
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
    </> 
  );   
  
};

export default ProductPage;