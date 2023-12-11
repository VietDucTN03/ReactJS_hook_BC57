import React, { useEffect } from 'react'

const UseEffect_UnMount = () => {

    useEffect(() => {
        const timeOut = setInterval(() => { //xét thời gian chạy
            console.log('call API');
        }, 2000);

        return () => {
            //Return trong bất kì useEffect nào cũng sẽ kích hoạt khi component đó mất khỏi gian diện
            clearInterval(timeOut)
        }

    }, [])

  return (
    <div>UseEffect_UnMount</div>
  )
}

export default UseEffect_UnMount