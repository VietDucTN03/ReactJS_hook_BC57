import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'

const ExHookFormik = () => {

    const frmRegister = useFormik({
        initialValues: {
            fullName: '',
            phone: '',
            email: '',
            password: ''
        },

        validationSchema:yup.object().shape({
            fullName: yup.string().required('fullname cannot be blank!'),
            phone: yup.number().required('phone cannot be blank!'),
            email: yup.string().required('email cannot be blank!').email('email is invalid').matches(/cybersoft/,'thiếu chứ cybersoft'),
            password: yup.string().required('password cannot be blank!').min(6, 'phải nhiều hơn 6 kí tự').max(10, 'phải ít hơn 10 kí tự')
        }),

        onSubmit: (value) => {
            console.log(value);
        }
    })

  return (
    <form className='container' onSubmit={frmRegister.handleSubmit}>
        <h3>Register form</h3>
        <div className="form-group">
            <p>Full Name</p>
            <input type="text" id='fullName' name='fullName' className='form-control' onChange={frmRegister.handleChange} onBlur={frmRegister.handleBlur}/>
            <p className='text text-danger'>
                {frmRegister.errors.fullName && frmRegister.errors.fullName}
            </p>
        </div>
        <div className="form-group">
            <p>Phone</p>
            <input type="text" id='phone' name='phone' className='form-control' onChange={frmRegister.handleChange} onBlur={frmRegister.handleBlur}/>
            <p className='text text-danger'>
                {frmRegister.errors.phone && frmRegister.errors.phone}
            </p>
        </div>
        <div className="form-group">
            <p>Email</p>
            <input type="text" id='email' name='email' className='form-control' onChange={frmRegister.handleChange} onBlur={frmRegister.handleBlur}/>
            <p className='text text-danger'>
                {frmRegister.errors.email && frmRegister.errors.email}
            </p>
        </div>
        <div className="form-group">
            <p>Password</p>
            <input type="text" id='password' name='password' className='form-control' onChange={frmRegister.handleChange} onBlur={frmRegister.handleBlur}/>
            <p className='text text-danger'>
                {frmRegister.errors.password && frmRegister.errors.password}
            </p>
        </div>
        <div className="form-group mt-2">
            <button className='btn btn-dark' type='submit'>Register</button>
        </div>
    </form>
  )
}

export default ExHookFormik