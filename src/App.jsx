import { useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import './App.css'
import Header from './components/Header.jsx'
import opciones from './data/data.js'
import Card from './components/Card.jsx'
import Pages_and_Lenguages from './components/Pages_and_Lenguages.jsx'
import Home from './components/Home.jsx'
import NavButton from './components/NavButton.jsx'
import NotFound from './components/NotFound.jsx'
import CardForm from './components/CardForm.jsx'
import BudgetList from './components/BudgetList.jsx'




function App() {

  const [checkedState, setCheckedState] = useState(() => {
    const initialState = {}
    opciones.forEach((op) => {
      initialState[op.title] = false
    })
    return initialState
  })


  const [totalPresupuesto, setTotalPresupuesto] = useState(0)

  const [counters, setCounters] = useState({
    pages: 0,
    languages: 0
  })

const [presupuestos, setPresupuestos] = useState([])

  const handleCheckChange = (title) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }))
  }

  const handleCounterChange = (type, value) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [type]: Math.max(0, prevCounters[type] + value)
    }))
  }

  const isAnyServiceSelected = () => {
    return Object.values(checkedState).some(isChecked => isChecked)
  }

  useEffect(() => {
    const newTotal = opciones.reduce((acc, op) => {
      return checkedState[op.title] ? acc + op.price : acc
    }, 0)

    const newTotalWithPagesAndLanguages = newTotal + (counters.pages + counters.languages) * 30
    setTotalPresupuesto(newTotalWithPagesAndLanguages)
  }, [checkedState, counters])

  const handleSaveBudget = (budgetInfo) => {
    if (!isAnyServiceSelected()) {   
        alert("És obligatori afegir almenys un servei.")
        return
      }
   
    const selectedServices = opciones.filter(op=> checkedState[op.title]).map(op => {
      if (op.title === "Web") {
        return {
          ...op, pages: counters.pages, languages: counters.languages }
      }
      return op
    })

    const newBudget = {   
      id: new Date().getTime(),    
      clientName: budgetInfo.clientName,
      budgetPhone: budgetInfo.budgetPhone,
      budgetEmail: budgetInfo.budgetEmail,
      total: totalPresupuesto,
      services: selectedServices
    }

    setPresupuestos([...presupuestos, newBudget])

    const initialCheckedState = {}
    opciones.forEach(op => initialCheckedState[op.title] = false)
  
    setCheckedState(initialCheckedState)
    setCounters({ pages: 0, languages: 0 })
  }




  const opcionesList = opciones.map(op => {
    return (
    <Card 
    key={op.title} 
    title={op.title} 
    description={op.description} 
    price={op.price} 
    moneda="€" 
    checked={checkedState[op.title]} 
    onCheckChange={() => handleCheckChange(op.title)} 
    highlight={op.title === "Web" && checkedState[op.title]}
    extraContent={op.title === "Web" && checkedState[op.title]  && (
        <Pages_and_Lenguages
          pages={counters.pages}
          languages={counters.languages}
          onCounterChange={handleCounterChange}
        />
        )}
    />
   ) 
})      
   

return (
  <BrowserRouter>
    <Header />   
       
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/index" element={
        <>
          <div className='text-center'>
          <NavLink to="/"><NavButton  buttonName="Tornar a Inici"/></NavLink>
          </div>
          <div>{opcionesList}</div>
          <div className='d-flex justify-content-center text-center'>
            <div className="row w-75 m-4 d-flex align-items-end">
              <h4 className='col-12 col-md-8 d-flex justify-content-center justify-content-md-end pe-0'>Preu pressuposat:</h4>
              <h4 className='col-6 col-md-2 d-flex justify-content-end'>{totalPresupuesto}</h4>
              <h5 className='col-6 col-md-2 d-flex justify-content-start'>€</h5>
            </div>
          </div>
          <CardForm onSaveBudget={handleSaveBudget} isAnyServiceSelected={isAnyServiceSelected}/>
          <BudgetList presupuestos={presupuestos} />
        </>

        
      } />
<Route path='*' element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
)
}

export default App
