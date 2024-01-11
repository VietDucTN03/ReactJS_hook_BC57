// Import
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Button, Space, Table } from "antd";
import { NavLink } from "react-router-dom";
import { getAllProductAPIAction, getAllProductAsyncThunkAction, setArrayProductAction } from "../../redux/Reducers/ProductReducer";

// Dữ liệu bên ngoài component (dữ liệu không đổi)
// const data = [
//     {
//       "id": 1,
//       "name": "Adidas Prophere",
//       "alias": "adidas-prophere",
//       "price": 350,
//       "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
//       "size": "[36,37,38,39,40,41,42]",
//       "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
//       "quantity": 995,
//       "deleted": false,
//       "categories": "[{\"id\":\"ADIDAS\",\"category\":\"ADIDAS\"},{\"id\":\"MEN\",\"category\":\"MEN\"},{\"id\":\"WOMEN\",\"category\":\"WOMEN\"}]",
//       "relatedProducts": "[2,3,5]",
//       "feature": true,
//       "image": "https://shop.cyberlearn.vn/images/adidas-prophere.png"
//     },
//     {
//       "id": 2,
//       "name": "Adidas Prophere Black White",
//       "alias": "adidas-prophere-black-white",
//       "price": 450,
//       "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
//       "size": "[36,37,38,39,40,41,42]",
//       "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
//       "quantity": 990,
//       "deleted": false,
//       "categories": "[{\"id\":\"ADIDAS\",\"category\":\"ADIDAS\"},{\"id\":\"MEN\",\"category\":\"MEN\"},{\"id\":\"WOMEN\",\"category\":\"WOMEN\"}]",
//       "relatedProducts": "[1,4,6]",
//       "feature": false,
//       "image": "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
//     },
// ];

const ProductManagement = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  // Lấy dữ liệu từ redux về
  const { arrProduct } = useSelector(state => state.productReducer)
  const dispatch = useDispatch();

  const getAllProduct = async () => {

    // Sau khi có giá trị từ API thì dispatch giá trị lên reducer
    // const res = await axios({
    //   url: 'https://shop.cyberlearn.vn/api/Product',
    //   method: 'GET'
    // });
    // const action = setArrayProductAction(res.data.content);

    /*
      action-thường: {type:'', payload:...}
      action-thunk: (dispatch) => {
        // Xử lí abc để có dữ liệu và dùng dispatch đưa lên redux
      }
    */

    // dispatch(action) // dispatch

    // Cách 1: create action thunk (tự code)
    // dispatch(getAllProductAPIAction)
    const action = getAllProductAPIAction();
    dispatch (action)
    
    // Cách 2: create asynction (thư viện)
    // const action = getAllProductAsyncThunkAction();
    // dispatch(action); 
  }

  useEffect(() => {
    // All API
    getAllProduct()
  }, [])

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    { //object thứ nhất = cột thứ nhất
      title: 'id', // Tiêu đề của từng column
      dataIndex: 'id',
      name: 'id',
      sorter: (a, b) => a.id - b.id,
      // defaultSortOrder: 'descend' // Xắp sếp giảm dần
    },
    {
      title: 'name', // Tiêu đề của từng column
      dataIndex: 'name',
      name: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      filters: [],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
    },
    {
      title: 'image', // Tiêu đề của từng column
      dataIndex: 'image',
      name: 'image',
      render: function (text, record, index) {
        // console.log('text', text);
        // console.log("record", record);
        // console.log("index", index);
        return <div>
          <img src={text} alt="..." width={50} height={50} />
        </div>
      }
    },
    {
      title: 'size', // Tiêu đề của từng column
      dataIndex: 'size',
      name: 'size',
      render: function (text, record, index) {
        const sizes = JSON.parse(text);
        return <div>
          {sizes?.map((number) => {
            return <span className="mx-2">{number}</span>
          })}
        </div>
      }
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      name: 'Action',
      render: (text, record, index) => {
        return <div>
          <NavLink to={`/detail/${record.id}`}>View Detail</NavLink>
        </div>
      }
    },
  ];
  return (
    <div className="container">
      <h3>Product Management</h3>
      <Table columns={columns} dataSource={arrProduct} onChange={handleChange} />
    </div>
  );
}

export default ProductManagement
