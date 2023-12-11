import React, { useCallback, useState } from 'react'
import Comment from './Comment';

const HookUseCallBack = () => {
  let [like, setLike] = useState(1);
  let [number, setNumber] = useState(1);

  const renderLike = () => {  //id: 111, 2222
    return `Like ${like}`
  }

  const callBackRenderLike = useCallback(renderLike, [like])  //id: 111 
  //Khi dependency like thay đổi thì useCallback sẽ cache lại địa chỉ lần thay đổi gần nhất

  return (
    <div className="m-5">
        <button className='btn btn-secondary my-2' onClick={() => {
          setNumber(number + 1)
        }}>{number}</button>
        <br />
        Like: {like} ♥
        <br />
        <span style={{ cursor: 'pointer', color: 'red', fontSize: 35 }} onClick={() => {
            setLike(like + 1)
        }}>♥</span>
        <br />
        <br />
        <Comment renderLike={callBackRenderLike} />
    </div>
  )
}

export default HookUseCallBack