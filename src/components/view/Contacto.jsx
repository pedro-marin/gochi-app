import React from 'react'
import { useEffect } from 'react'

const Contacto = () => {

  useEffect(()=> {
    document.title = "mihuertafacil - Contacto";
  },[])

  return (
    <div>Contacto</div>
  )
}

export default Contacto