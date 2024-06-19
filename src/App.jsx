import { useState, useEffect} from 'react'

import './App.css'

import Header from './components/Header.jsx'
import opciones from './data/data.js'
import Card from './components/Card.jsx'


function App() {

  const [checkedState, setCheckedState] = useState(() => {
    const initialState = {}
    opciones.forEach((op) => {
      initialState[op.title] = false
    })
    return initialState
  })


  const [totalPresupuesto, setTotalPresupuesto] = useState(0)

  const handleCheckChange = (title) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }))
  }

  useEffect(() => {
    const newTotal = opciones.reduce((acc, op) => {
      return checkedState[op.title] ? acc + op.price : acc
    }, 0)
    setTotalPresupuesto(newTotal)
  }, [checkedState])


  const opcionesList = opciones.map(op => {
    return <Card 
    key={op.title} 
    title={op.title} 
    description={op.description} 
    price={op.price} 
    moneda="€" 
    checked={checkedState[op.title]} 
    onCheckChange={() => handleCheckChange(op.title)} aria-label={"Afegir"}/>
  })


  return (
    <>
      <Header />
      <div>{opcionesList} </div>
      <div className='d-flex justify-content-center'>
        <div className="row w-75 p-4 m-5 d-flex justify-content-end align-items-end">
          <h2 className='col d-flex justify-content-end pe-0'>Preu pressuposat: {totalPresupuesto} </h2>
          <h5 className='col-1 d-flex justify-content-start p-1'>€</h5>
        </div>
      </div>
    </>
  )
}

export default App
