import axios from 'axios';
import React from 'react';
import AllProduct from '../AllProduct/AllProduct';
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';

export default function AllProducts() {
  function getProducts() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products');
  }

  let { data, isLoading } = useQuery("Prod", getProducts, {
    // Optional: Add caching, refetching, etc. settings here if needed
  });

  // Show loading spinner if data is still being fetched
  if (isLoading) return <Loading />;

  // Slice the last 7 products from the data response
  const last7Products = data?.data.data.slice(-7);

  return (
    <>
      <div className="container ">
        <div className="title father">
          <h2>All Products.</h2>
          <h1 className="child">All Products.</h1>
        </div>

        <div className="row">
          {last7Products?.map((val) => (
            <AllProduct key={val._id} data={val} />
          ))}
        </div>
      </div>
    </>
  );
}
