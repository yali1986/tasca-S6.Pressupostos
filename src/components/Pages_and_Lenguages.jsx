import { useState } from "react"



export default function Pages_and_Lenguages({ pages, languages, onCounterChange }) {

    return (
        <>               

            <div className="row mb-2 row text-start text-end-lg">
              <div className="col-12 col-md-8 d-flex align-items-center fw-medium fs-6 justify-content-center justify-content-md-end">Nombre de pàgines</div>

              <div className="col-12 col-md-4 pe-xl-5 d-flex align-items-center justify-content-center justify-content-md-end">
                <button 
                  className="btn btn-outline-secondary rounded-circle me-2"
                  onClick={() => onCounterChange('pages', -1)}
                >-</button>
                <div className="nombre">{pages}</div>
                <button 
                  className="btn btn-outline-secondary rounded-circle ms-2"
                  onClick={() => onCounterChange('pages', 1)}
                >+</button>
              </div>
            </div>


    
            <div className="row text-start text-end-lg">
              <div className="col-12 col-md-8 d-flex align-items-center fw-medium fs-6 justify-content-center justify-content-md-end">Nombre de llenguatges</div>


              <div className="col-12 col-md-4 pe-xl-5 d-flex align-items-center justify-content-center justify-content-lg-end">
                <button 
                  className="btn btn-outline-secondary rounded-circle me-2"
                  onClick={() => onCounterChange('languages', -1)}
                >-</button>
                <div className="nombre">{languages}</div>
                <button 
                  className="btn btn-outline-secondary rounded-circle ms-2"
                  onClick={() => onCounterChange('languages', 1)}
                >+</button>
              </div>

            </div>         
       
        </>
      )
}
