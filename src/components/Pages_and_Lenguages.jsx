import { useState } from "react"



export default function Pages_and_Lenguages({ pages, languages, onCounterChange }) {

    return (
        <>
          <div className="col">
            <div className="row mb-2">
              <div className="col fw-medium fs-6">Nombre de pàgines</div>
              <div className="col d-flex align-items-center">
                <button 
                  className="btn btn-outline-secondary rounded-circle me-2"
                  onClick={() => onCounterChange('pages', -1)}
                >-</button>
                <div>{pages}</div>
                <button 
                  className="btn btn-outline-secondary rounded-circle ms-2"
                  onClick={() => onCounterChange('pages', 1)}
                >+</button>
              </div>
            </div>
    
            <div className="row">
              <div className="col fw-medium fs-6">Nombre de llenguatges</div>
              <div className="col d-flex align-items-center">
                <button 
                  className="btn btn-outline-secondary rounded-circle me-2"
                  onClick={() => onCounterChange('languages', -1)}
                >-</button>
                <div>{languages}</div>
                <button 
                  className="btn btn-outline-secondary rounded-circle ms-2"
                  onClick={() => onCounterChange('languages', 1)}
                >+</button>
              </div>
            </div>
          </div>
        </>
      )
}
