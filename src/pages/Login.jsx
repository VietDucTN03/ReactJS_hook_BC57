//rafce

import React from 'react'
import {useFormik} from 'formik'
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  const frmLogin = useFormik({
    initialValues: {  //initialValues giống với name trong input
      email: '',
      password: ''
    },
    onSubmit: (userLogin) => {
      console.log(userLogin);
      // Xử lí đăng nhập
      if (userLogin.email === 'admin' && userLogin.password === '123') {
        navigate('/profile')
      } else {
        alert('email or password is invalid');
        navigate('/forgot-password')
      }
    }
  })
  return (
    <div>
      <form onSubmit={frmLogin.handleSubmit} className='p-4'>
        <h3>Login</h3>
        <div className="form-group">
          <p>Email</p>
          <input type="text" className='form-control' id='email' name='email' onChange={frmLogin.handleChange}/>
        </div>
        <div className="form-group">
          <p>Password</p>
          <input type="text" className='form-control' id='password' name='password' onChange={frmLogin.handleChange}/>
        </div>
        <div className="form-group">
          <button type='submit' className='btn btn-success'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login