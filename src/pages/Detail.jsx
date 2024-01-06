//rafce

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Detail = () => {

  const [prodDetail, setProdDetail] = useState({})
  console.log('prodDetail', prodDetail);

  // Lấy giá trị từ thanh url thông qua param trên thẻ route
  const params = useParams()  // Lấy giá trị id trên thanh param

  const getProductById = async () => {
    // console.log(params.id);
    const res = await axios({
      url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`,
      method:'GET'
    })
    setProdDetail(res.data.content)
  }

  useEffect(() => {
    // Call API
    getProductById()
  },[params.id])

  return (
    <div className='container'>
      <h3>Detail</h3>
      <div className="row">
        <div className="col-4">
          <img src={prodDetail.image} alt="..." height={300}/>
        </div>
        <div className="col-8">
          <h3>{prodDetail.name}</h3>
          <p>{prodDetail.description}</p>
          <div className="mt-2">
            {prodDetail.size?.map((number) => {
              return <button className='btn btn-primary m-1'>{number}</button>
            })}
          </div>
          <button className='btn btn-dark'>Add to cart<i className='fa fa-cart-plus'></i></button>
        </div>
      </div>
      <h3>Related Products</h3>
      <div className="row">
        {prodDetail.relatedProducts?.map((prod) => {
          return <div className='col-md-4' key={prod.id}>
            <div className="card">
              <img src={prod.image} alt="..." />
              <div className="card-body">
                <h3>{prod.name}</h3>
                <p>{prod.price} $</p>
                <NavLink className={'btn btn-dark'} to={`/detail/${prod.id}`}>View detail</NavLink>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Detail