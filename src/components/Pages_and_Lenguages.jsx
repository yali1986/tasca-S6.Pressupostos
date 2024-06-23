import { useState } from "react"
import HelpWindow from "./HelpWindow"



export default function Pages_and_Lenguages({ pages, languages, onCounterChange }) {

  const pagesHelpContent = (

    <>
      <div className="row mx-auto">
        <strong className="text-center fs-3 mb-3">Número de pàginas</strong>

        <p>
          Afegeix les pàgines que necessitis per a dur a terme el teu projecte. El cost de cada pàgina és de 30€.
        </p>
      </div>
    </>
  )

  const languagesHelpContent = (
    <>
      <div className="row mx-auto">
        <strong className="text-center fs-3 mb-3">Número de llenguatges</strong>

        <p className="text-center">
          Afegeix les llenguatges que tindrà el teu projecte. El cost de cada llenguatge és de 30€.
        </p>
      </div>
    </>
  )

  return (
    <>

      <div className="row text-start text-end-lg mb-2">
        <div className="col-12 col-md-8 d-flex align-items-center fw-medium fs-6 justify-content-center justify-content-md-end">Nombre de pàgines

          <button
            type="button"
            className="btn btn-info btn-sm ms-2"
            data-bs-toggle="modal"
            data-bs-target="#pagesHelpModal"
          >
            <i className="fas fa-info-circle">Ajuda</i>
          </button>

        </div>

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
        <div className="col-12 col-md-8 d-flex align-items-center fw-medium fs-6 justify-content-center justify-content-md-end">Nombre de llenguatges

          <button
            type="button"
            className="btn btn-info btn-sm ms-2"
            data-bs-toggle="modal"
            data-bs-target="#languagesHelpModal"
          >
            <i className="fas fa-info-circle">Ajuda</i>
          </button>
        </div>

        <div className="col-12 col-md-4 pe-xl-5 d-flex align-items-center justify-content-center justify-content-md-end">
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

      <HelpWindow id="pagesHelpModal" content={pagesHelpContent} />
      <HelpWindow id="languagesHelpModal" content={languagesHelpContent} />

    </>
  )
}
