import { useState, useEffect } from 'react'
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
  const [originalPresupuestos, setOriginalPresupuestos] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isDiscountApplied, setIsDiscountApplied] = useState(false)

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
      const opPrice = isDiscountApplied ? op.price * 0.8 : op.price
      return checkedState[op.title] ? acc + opPrice : acc
    }, 0)


    const totalWithPagesAndLanguages = newTotal + (counters.pages + counters.languages) * 30
    setTotalPresupuesto(totalWithPagesAndLanguages)
  }, [checkedState, counters, isDiscountApplied])

  const handleSaveBudget = (budgetInfo) => {
    if (!isAnyServiceSelected()) {
      alert("És obligatori afegir almenys un servei.")
      return
    }

    const selectedServices = opciones.filter(op => checkedState[op.title]).map(op => {
      const opPrice = isDiscountApplied ? op.price * 0.8 : op.price
      if (op.title === "Web") {
        return {
          ...op,
          price: opPrice,
          pages: counters.pages,
          languages: counters.languages
        }
      }

      return { ...op, price: opPrice }
    })

    const newBudget = {
      id: `${budgetInfo.clientName}-${Date.now()}`,
      clientName: budgetInfo.clientName,
      budgetPhone: budgetInfo.budgetPhone,
      budgetEmail: budgetInfo.budgetEmail,
      total: totalPresupuesto,
      services: selectedServices,
      date: new Date().toISOString()
    }

    setPresupuestos([...presupuestos, newBudget])
    setOriginalPresupuestos([...presupuestos, newBudget])


    setCheckedState(Object.keys(checkedState).reduce((acc, key) => ({ ...acc, [key]: false }), {}))
    setCounters({ pages: 0, languages: 0 })
    setIsDiscountApplied(false)
  }


  const toggleDiscount = () => {
    setIsDiscountApplied(!isDiscountApplied);
  }


  const handleSortAlphabetically = () => {
    const sortedPresupuestos = [...presupuestos].sort((a, b) => a.clientName.localeCompare(b.clientName))
    setPresupuestos(sortedPresupuestos)
  }

  const handleSortByDate = () => {
    const sortedPresupuestos = [...presupuestos].sort((a, b) => new Date(b.date) - new Date(a.date))
    setPresupuestos(sortedPresupuestos)
  }

  const handleResetOrder = () => {
    setPresupuestos(originalPresupuestos)
  }


  const filteredPresupuestos = presupuestos.filter(presupuesto =>
    presupuesto.clientName.toLowerCase().includes(searchTerm.toLowerCase())
  )


  const opcionesList = opciones.map(op => {
    const discountedPrice = isDiscountApplied ? op.price * 0.8 : op.price
    return (
      <Card
        key={op.title}
        title={op.title}
        description={op.description}
        price={discountedPrice}
        moneda="€"
        checked={checkedState[op.title]}
        onCheckChange={() => handleCheckChange(op.title)}
        highlight={op.title === "Web" && checkedState[op.title]}
        extraContent={op.title === "Web" && checkedState[op.title] && (
          <Pages_and_Lenguages
            pages={counters.pages}
            languages={counters.languages}
            onCounterChange={handleCounterChange}
          />
        )}
        isDiscountApplied={isDiscountApplied}
      />
    )
  })



  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/index"
          element={
            <>
              <div className="text-center">
                <NavLink to="/">
                  <NavButton buttonName="Volver a Inicio" />
                </NavLink>
              </div>

              <div className="row text-center mb-4">
                <p className='col text-end me-3'>Pagament mensual</p>
                <div className='form-check form-switch col text-start'>

                  <input
                    type='checkbox'
                    className='form-check-input col'
                    checked={isDiscountApplied}
                    onChange={toggleDiscount}
                  />
                  <label className='ms-3'>Pagament anual</label>
                </div>
              </div>


              <div>{opcionesList}</div>
              <div className="d-flex justify-content-center text-center">
                <div className="row w-75 m-4 d-flex align-items-end">
                  <h4 className='col-12 col-md-8 d-flex justify-content-center justify-content-md-end pe-0'>
                    Precio presupuestado:
                  </h4>
                  <h4 className='col-6 col-md-2 d-flex justify-content-end'>{totalPresupuesto}</h4>
                  <h5 className='col-6 col-md-2 d-flex justify-content-start'>€</h5>
                </div>
              </div>

              <CardForm onSaveBudget={handleSaveBudget} isAnyServiceSelected={isAnyServiceSelected} />
              <BudgetList
                presupuestos={filteredPresupuestos}
                onSortAlphabetically={handleSortAlphabetically}
                onSortByDate={handleSortByDate}
                onResetOrder={handleResetOrder}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App