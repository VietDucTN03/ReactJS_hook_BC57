import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleInputProductAction } from '../../../../redux/Reducers/CRUDProductReducer';

const FormProduct = () => {

    //Lấy state form về từ redux
    //Hook Selector
    const {productInfo} = useSelector(state => state.crudProductReducer);

    //Hook Dispatch
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const {id, value} = e.target;
        //Tạo ra payload từ id và value người dùng thao tác trên thẻ
        const payload = {id, value};
        const action = handleInputProductAction(payload);

        dispatch(action)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className='container'>
        <form className="card" onSubmit={handleSubmit}>
            <div className="card">
                <div className="card-header">Product</div>
                <div className="card-body">
                    <div className="form-group">
                        <p>ID</p>
                        <input type="text" className='form-control' id='id' value={productInfo.id} onInput={handleChange}/>
                    </div>
                    <div className="form-group">
                        <p>Name</p>
                        <input type="text" className='form-control' id='name' value={productInfo.name} onInput={handleChange}/>
                    </div>
                    <div className="form-group">
                        <p>Price</p>
                        <input type="text" className='form-control' id='price' value={productInfo.price} onInput={handleChange}/>
                    </div>
                </div>
                <div className="card-footer">
                    <button type='submit' className='btn btn-success'>Add Product</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default FormProduct