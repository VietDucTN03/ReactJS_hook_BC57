import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUserCommentAction, updateUserCommentAction } from '../../../redux/Reducers/ChatReducer';

const ExChatDemo = () => {

    const {userComment, arrayComment} = useSelector((state) => state.chatReducer);
    // console.log('state redux', userComment);
    // console.log('state redux', arrayComment);

    // const [userContent, setUserContent] = useState({
    //     name: '',
    //     content: ''
    // })

    //Sử dụng hook useDispatch thay cho this.props.dispatch
    const dispatch = useDispatch();

    const handleChangeValue = (e) => {
        const {id, value} = e.target;
        // console.log('id', id);
        // console.log("value", value);

        //Gửi dữ liệu lên redux
        const payload = {
            id: id,
            value: value
        }
        const action = updateUserCommentAction(payload);
        //Gửi dữ liệu action lên redux
        dispatch(action)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = userComment;
        const action = addUserCommentAction(payload);

        //Dispatch action lên redux
        dispatch(action);
    }

  return (
    <div className='container'>
        <h3>Demo Chat</h3>
        <div className="card">
            <div className="card-header">
                {arrayComment.map((usComment) => {
                    return <div className="d-flex mt-2" key={usComment.name}>
                        <div style={{width: '10%'}}>
                            <img src={`https://i.pravatar.cc?u=${usComment.name}`} alt="..." style={{width: 50}}/>
                            <h5>{usComment.name}</h5>
                        </div>
                        <div style={{width: '90%'}}>
                            <p>{usComment.content}</p>
                        </div>
                    </div>
                })}
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <h3>Name: </h3>
                        <input type="text" className='form-control' id='name' value={userComment.name} onInput={handleChangeValue}/>
                    </div>
                    <div className="form-group">
                        <h3>Content: </h3>
                        <input type="text" className='form-control' id='content' value={userComment.content} onInput={handleChangeValue}/>
                    </div>
                    <div className="form-group my-2">
                        <button className='btn btn-primary' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ExChatDemo