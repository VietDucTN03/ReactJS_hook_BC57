import React from 'react'
import FormProduct from './FormProduct'

const CRUDProductHook = () => {
  return (
    <div className='container'>
        <h3>Product Management</h3>
        <FormProduct/>

        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>price</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default CRUDProductHook