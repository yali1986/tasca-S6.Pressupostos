import { useState } from "react"

export default function CardForm({ onSaveBudget, isAnyServiceSelected }) {

    const [clientName, setClientName] = useState("")
    const [budgetPhone, setBudgetPhone] = useState("")
    const [budgetEmail, setBudgetEmail] = useState("")

    const handleSave = () => {      

        if (clientName && budgetPhone && budgetEmail) {
            onSaveBudget({ clientName, budgetPhone, budgetEmail })
            setClientName("")
            setBudgetPhone("")
            setBudgetEmail("")
        } else {
            alert("Si us plau, completa tots els camps.")
        }
    }

    return (
        <div className="container-fluid col-8">
          <div className="align-items-center shadow bg-body-tertiary rounded p-4 m-3">
            
            <div className="card-body col-12">

              <div className="row g-2 align-items-center"> 

                <div className="col-12 col-lg-4">
                  <label htmlFor="clientName" className="form-label visually-hidden">Nom</label>
                  <input
                    type="text"
                    id="clientName"
                    className="form-control"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Nom"
                  />
                </div>
    
                <div className="col-12 col-lg-4">
                  <label htmlFor="budgetPhone" className="form-label visually-hidden">Telèfon</label>
                  <input
                    type="text"
                    id="budgetPhone"
                    className="form-control"
                    value={budgetPhone}
                    onChange={(e) => setBudgetPhone(e.target.value)}
                    placeholder="Telèfon"
                  />
                </div>
    
                <div className="col-12 col-lg-4">
                  <label htmlFor="budgetEmail" className="form-label visually-hidden">Email</label>
                  <input
                    type="text"
                    id="budgetEmail"
                    className="form-control"
                    value={budgetEmail}
                    onChange={(e) => setBudgetEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
    
                <div className="col-auto mx-auto">
                  <button className="btn btn-success " onClick={handleSave}>Sol·licitar pressupost →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}
