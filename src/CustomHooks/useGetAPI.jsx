import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useGetAPI = (url) => {
    const [data, setData] = useState({})

    const getAPI = async () => {
        const res = await axios({
            url:url,
            method:'GET'
        })
        setData(res.data)
    }
    
    useEffect(() => {
        getAPI();
    },[])
  return data
}

export default useGetAPI