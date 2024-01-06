//rafce

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from "react-router-dom";
import useGetAPI from '../CustomHooks/useGetAPI';

const TrangChuCustomHook = () => {

//   const [arrProduct, setArrProduct] = useState([]);
//   console.log('arrProduct', arrProduct)

//   const getAllProductApi = async () => {
//     const res = await axios({
//       url: 'https://shop.cyberlearn.vn/api/Product',
//       method: 'GET'
//     });
//     setArrProduct(res.data.content);
//   }

//   useEffect(() => {
//     getAllProductApi()
//   },[])

    const data = useGetAPI('https://shop.cyberlearn.vn/api/Product');

    const arrProduct = data.content;
  return (
    <div className='container'>
      <h3>Home</h3>
      <div className="row">
        {arrProduct?.map((prod) => {
          return <div className='col-4 mt-2' key={prod.id}>
            <NavLink className="card" style={{textDecoration:'none'}} to={`/detail/${prod.id}`}>
              <img src={prod.image} alt="..." />
              <div className="card-body">
                <h3>{prod.name}</h3>
                <p>{prod.price}</p>
                <NavLink className='btn btn-dark' to={`/detail/${prod.id}`}>View detail</NavLink>
              </div>
            </NavLink>
          </div>
        })}
      </div>
    </div>
  )
}

export default TrangChuCustomHook