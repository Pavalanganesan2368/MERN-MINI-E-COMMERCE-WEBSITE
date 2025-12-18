import React, { Fragment, useEffect, useState } from 'react'
import ProductCart from '../components/ProductCart'
import { useSearchParams } from 'react-router-dom';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${baseUrl}/products?${searchParams}`)
    .then((response) => response.json())
    .then((data) => setProducts(data.products))
  }, [searchParams])
  return (
    <Fragment>
      <h1 id="products_heading">Latest Products</h1>
      <section id="products" className="container mt-5">
        <div className="row">
          {products.map((product, index) => <ProductCart product={product} keys={index}/>)}
        </div>
      </section>
    </Fragment>
  )
}

export default Home