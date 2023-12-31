import React, { useState } from 'react';
import './Product1.css'
import ProductCards from '../Components/ProductCards';
import { useEffect } from 'react';
import useFetch from "../hooks/useFetch";
import { Container, Row, Col} from "reactstrap";

const ProductPage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data: products, loading, error } = useFetch(`http://localhost:8000/product/dogs`);
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
    </> 
  );   
  
};

export default ProductPage;