import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

// Gõ text => url (setSearchParams)
// Get từ url => về component gọi API (searchParams.get('key'))
const Search = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const [arrProduct, setArrProduct] = useState([])
  const k = searchParams.get('keyword');
  console.log(arrProduct);
  const formSearch = useFormik({
    initialValues: {
      keyword: "",
    },
    onSubmit: ({ keyword }) => {
      console.log(keyword);
      // Đưa từ khóa lên url
      setSearchParams({
        keyword:keyword
      })
    },
  });

  const getProductByKeyword = async () => {
    // Gọi API
    const res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product?keyword=${k}`,
      method: 'GET'
    });
    setArrProduct(res.data.content)
  }

  useEffect(() => {
    getProductByKeyword()
  },[k])

  return (
    <div className="container">
      <form className="frm-search mt-4" onSubmit={formSearch.handleSubmit}>
        <div className="input-group mb-3">
          <button className="input-group-button btn btn-success">Search</button>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="keyword"
              placeholder="keyword"
              name="keyword"
              onChange={formSearch.handleChange}
            />
            <label htmlFor="floatingInputGroup1">Search</label>
          </div>
        </div>
      </form>
      <h3 className="my-2">Search result</h3>
      <div className="container row">
        {arrProduct.map((prod) => {
          return <div className='col-md-4 mt-2' key={prod.id}>
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
  );
};

export default Search;
