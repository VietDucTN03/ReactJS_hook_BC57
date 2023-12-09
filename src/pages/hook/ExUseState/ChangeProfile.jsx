import React, { useState } from 'react'

const ChangeProfile = () => {

    const [number, setNumber] = useState(1)
    console.log(number);
    
  return (
    <div className='container my-3'>
        <div className="card w-25">
            <img src={`https://i.pravatar.cc?u=${number}`} alt="..." />
            <div className='card-body'>
                <button className='btn btn-danger' onClick={() => {
                    setNumber(number - 1)
                }}>Prev</button>
                <button className='btn btn-primary mx-2' onClick={() => {
                    setNumber(number + 1)
                }}>Next</button>
            </div>
        </div>
    </div>
  )
}

export default ChangeProfile