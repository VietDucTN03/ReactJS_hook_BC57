import React, { useRef, useState } from 'react'
import ChildComponent from './ChildComponent';
//useRef: Thường sử dụng để lưu lại các giá trị sau mỗi lần render (setState, dispatch Redux). Thường dùng cho form
//Ngoài ra useRef còn được dùng để tham chiếu (dom đến) 1 thẻ html hoặc thẻ component, khi dom đến thẻ component thì ta có thể truy xuất được tất cả thuộc tính và phương thức của component đó

const ExHookUseRef = () => {
    const [like,setLike] = useState(1);

    const refLogin = useRef({
        username: '',
        password:''
    })

    // const [userLogin, setUserLogin] = useState({
    //     username: '',
    //     password: ''
    // })
    // console.log(userLogin);

    const handleChangeInput = (e) => {
        const {id, value} = e.target;
        refLogin.current[id] = value;

        // setUserLogin({
        //     ...userLogin,
        //     [id]:value
        // })
    }

    const refDom = useRef()

    //tránh load lại web
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refLogin.current);

        //Ngoài ra ref cũng dùng để dom đến các thẻ tuy nhiên ta có thể quản lý được dễ dàng thông qua biến ref trên component đó
        refDom.current.className = 'btn btn-dark'
    }

    //Sử dụng useRef đến các Component khác
    const refDomChildComponent = useRef()

  return (
    <form className='container' onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="form-group">
            <p>Username</p>
            <input type="text" className='form-control' id='username' name='username' onInput={handleChangeInput}/>
        </div>
        <div className="form-group">
            <p>Password</p>
            <input type="text" className='form-control' id='password' name='password' onInput={handleChangeInput}/>
        </div>
        <div className="form-group mt-2">
            <button className='btn btn-success' ref={refDom}>Login</button>
        </div>

        <button className='btn btn-danger m-2' onClick={()=>{
            setLike(like + 1)
        }}><i className="fa fa-heart fa-2x"></i>{like}</button>

        <ChildComponent ref={refDomChildComponent}/>

        <button className='btn btn-primary mt-2' onClick={() => {
            let state = refDomChildComponent.current.state;
            console.log(refDomChildComponent.current.setState({
                number: state.number + 1
            }));
        }}>Get element Component</button>
    </form>
  )
}

export default ExHookUseRef