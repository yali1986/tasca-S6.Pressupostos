import { useState } from 'react'

import './App.css'

import Header from './components/Header.jsx'
import opciones from './data/data.js'
import Card from './components/Card.jsx'


function App() {
 const opcionesList = opciones.map(op => {
return <Card key={op.title} title={op.title} description={op.description} price={op.price} moneda={op.moneda} check={op.check}/>
 })


  return (
    <>
    <Header />
      <div>{opcionesList} </div>
    </>
  )
}


export default App
