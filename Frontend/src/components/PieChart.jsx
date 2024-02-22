import React,{useState, useEffect} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend,  Title} from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend, Title);

function Piechart()
{
  const [products, setProducts]= useState([]);
  const [price, setPrice]=useState([]);
  useEffect( ()=>{
    const getproducts=[];
    const getprice=[];
   const getdata= async()=>{
     const reqData= await fetch('http://localhost:8000/product/all');
     const resData= await reqData.json();
     console.log(resData.product);
     for(let i=0; i<resData.product.length; i++)
     {
      getproducts.push(resData.product[i].productName);
      getprice.push(parseFloat(resData.product[i].price));
     }     
     setProducts(getproducts);
     setPrice(getprice);
   }
 getdata();
  },[]);
    
    return(
        <React.Fragment>
            <div className="container-fluid">
          
            <div className="row">               
                <div className="col-md-5 mb-3 mt-3 ">
            <Pie 
               width={300}
                height={200}
                data={{                                          
                labels: products,
                datasets: [
                    {
                      label: 'Rs Price',
                      data: price,
                      backgroundColor: [
                        'rgba(0, 112, 137)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(153, 150, 255)',
                        'rgba(255, 159, 64)',
                        'rgba(255, 109, 64)',
                        'rgba(125, 169, 34)',
                        'rgba(225, 99, 251)',
                        'rgba(225, 99, 101)',
                        'rgba(0, 112, 137)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(153, 102, 255)',
                        'rgba(255, 159, 64)',
                        'rgba(255, 109, 64)',

                        'rgb(0,112,137)',
                        'rgba(54, 162, 235 )',
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(153, 102, 255)',
                        'rgba(255, 159, 64)',
                        'rgba(255, 109, 64)',
                        'rgba(125, 169, 34)',
                        'rgba(225, 99, 251)',
                        'rgba(225, 99, 101)',
                        
                      ],
                    //   borderColor: [
                    //     'rgba(255, 99, 132, 1)',
                    //     'rgba(54, 162, 235, 1)',
                    //     'rgba(255, 206, 86, 1)',
                    //     'rgba(75, 192, 192, 1)',
                    //     'rgba(153, 102, 255, 1)',
                    //     'rgba(255, 159, 64, 1)',
                    //     'rgba(255, 109, 64, 0.6)',
                    //     'rgba(125, 169, 34, 0.8)',
                    //     'rgba(225, 99, 251, 0.3)',
                    //     'rgba(225, 99, 101, 0.4)',                        
                    //   ],
                      borderWidth: 1,
                      //hoverOffset:20
                      offset: [20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]                     
                    },
                  ],
            }}

            options={{                 
                responsive: true,         
                plugins:{
                    title:{
                        fontSize: 30,
                        text:'Product Chart',
                        display: true ,
                        font:{ size:20}   
                    },
                    legend:{
                      labels:{
                        font:{size:15}
                      }
                    }                        
                 },                
               }}    
             />
            </div>
        </div>
    </div>
    </React.Fragment>
    );

}
export default Piechart;