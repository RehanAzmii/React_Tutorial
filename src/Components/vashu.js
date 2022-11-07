import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'

const Vashu = () => {
    const {test} = useContext(DataContext);
    useEffect(()=>{
console.log(test)
    },[])
  return (
    <div>{test?.email}</div>
  )
}

export default Vashu