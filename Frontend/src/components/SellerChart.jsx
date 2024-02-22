import React from "react";
import { Pie } from 'react-chartjs-2';

function SellerProductSalesChart() {
  const sellerData = [
    { sellerName: 'Product1-DOG', totalSales: 500 },
    { sellerName: 'Product2-CAT', totalSales: 700 },
    { sellerName: 'Product3-BIRD', totalSales: 300 },
    { sellerName: 'Product4-FISH', totalSales: 900 }
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5 mb-3 mt-3">
          <Pie
            width={300}
            height={200}
            data={{
              labels: sellerData.map(seller => seller.sellerName),
              datasets: [{
                label: 'Sales',
                data: sellerData.map(seller => seller.totalSales),
                backgroundColor: [
                  'rgba(0, 112, 137)',
                  'rgba(54, 162, 235)',
                  'rgba(255, 206, 86)',
                  'rgba(75, 192, 192)',
                  
                ],
                borderWidth: 1,
              }]
            }}
            options={{
              responsive: true,
              plugins: {
                title: {
                  fontSize: 30,
                  text: 'Seller Product Sales',
                  display: true,
                  font: { size: 20 }
                },
                legend: {
                  labels: {
                    font: { size: 15 }
                  }
                }
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SellerProductSalesChart;
