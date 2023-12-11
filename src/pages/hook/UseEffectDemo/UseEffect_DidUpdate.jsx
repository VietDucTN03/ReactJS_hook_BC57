import React, { useState, useEffect } from 'react'

const UseEffect_DidUpdate = () => {

    const [number, setNumber] = useState(1)
    const [like, setLike] = useState(1)

    useEffect(() => {
        //State nào thay đổi thì hàm này sẽ được kích hoạt (Thường dùng cho việc Call API tham số ví dụ: như các trang detail, edit, ...)
        console.log('change like');
    }, [like])

  return (
    <div className='container'>
        <h3>Number: {number}</h3>
        <button className='btn btn-success' onClick={() => {
            setNumber(number + 1)
        }}>+</button>
        <h3>Like: {like}</h3>
        <button className='btn btn-primary' onClick={() => {
            setLike(like + 1)
        }}>Like</button>
    </div>
  )
}

export default UseEffect_DidUpdate