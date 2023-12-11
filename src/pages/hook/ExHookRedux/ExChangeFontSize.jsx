import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFontSizeAction } from '../../../redux/Reducers/ChangeFontSizeReducer';

const ExChangeFontSize = () => {

    //lấy phần tử trên redux về
    const {fSize} = useSelector(state => state.changeFontSizeReducer)
    const dispatch = useDispatch();

    const handleChangeFontSize = (size) => {  //payload trong đây là size
        const action = changeFontSizeAction(size)
        dispatch(action);
    }

  return (
    <div className='container'>
        <h3>Change Font-Size</h3>
        <p style={{fontSize: fSize}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, rem.</p>
        <button className='btn btn-primary m-2' onClick={() => {
            handleChangeFontSize(1)
        }}>+</button>
        <button className='btn btn-danger' onClick={() => {
            handleChangeFontSize(-1)
        }}>-</button>
    </div>
  )
}

export default ExChangeFontSize