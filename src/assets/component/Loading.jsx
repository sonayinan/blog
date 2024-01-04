import React, { useEffect } from 'react'
import "../style/loading.scss"
import { useNavigate } from 'react-router-dom'
const Loading = () => {
    const navigate=useNavigate();//yönlendirmek demek. direkt pathi değiştiriyor.
    useEffect(()=>{
        setTimeout(()=>{
            navigate("sonay/anasayfa")
        },2000)
    })
  return (
    <div className='loading'>
        <img src="https://media2.giphy.com/media/MEF1VadKbQBdmd8LCn/giphy.gif?cid=ecf05e471upxoxzewgpeph1vtv0gr4m6soh7mhg7u9wl38td&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="load" />
    </div>
  )
}

export default Loading