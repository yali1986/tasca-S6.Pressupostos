import { useState } from 'react'

import './App.css'

import Header from './components/Header.jsx'
import opciones from './data/data.js'
import Card from './components/Card.jsx'


function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const opcionesList = opciones.map(op => {
    return <Card key={op.title} title={op.title} description={op.description} price={op.price} moneda="€" checked={isChecked} onCheckChange={handleCheckChange} aria-label={"Afegir"}/>
  })


  return (
    <>
      <Header />
      <div>{opcionesList} </div>
      <div className='d-flex justify-content-center'>
        <div className="row w-75 p-4 m-5 d-flex justify-content-end align-items-end">
          <h2 className='col d-flex justify-content-end pe-0'>Preu pressuposat: 0 </h2>
          <h5 className='col-1 d-flex justify-content-start p-1'>€</h5>
        </div>
      </div>
    </>
  )
}


export default App
