
export default function BudgetList({ presupuestos, onSortAlphabetically, onSortByDate, onResetOrder, searchTerm, setSearchTerm }) {

  return (
    <div className="container-fluid col-8">
      <h4 className="ms-4 m-5">Pressupostos en curs:</h4>

      <div className="d-flex justify-content-between mb-4">
        <button className="btn btn-outline-primary" onClick={onSortAlphabetically}>Ordenar Alfabéticamente</button>
        <button className="btn btn-outline-primary" onClick={onSortByDate}>Ordenar por Fecha</button>
        <button className="btn btn-outline-primary" onClick={onResetOrder}>Reiniciar Orden</button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar presupuestos por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {presupuestos.length === 0 ? (
        <div className="card-body g-3 mb-5">
          <div className="align-items-center shadow bg-body-tertiary rounded pe-4 ps-5 mb-4">
            <p className="card-text ms-0 m-3 p-3">No hi ha pressupostos desats.</p>
          </div>
        </div>
      ) : (
        presupuestos.map(presupuesto => (
          <div className="card-body m-3 pb-1" key={presupuesto.id}>
            <div className="align-items-center shadow bg-body-tertiary rounded pe-4 ps-5 mb-4">
              <div className="col-12 col-md-12 text-center text-md-start">

                <div className="row mb-3 py-3">
                  <div className="col-12 col-md-4">
                    <div className="fs-2"><strong>{presupuesto.clientName}</strong></div>
                    <div>{presupuesto.budgetEmail}</div>
                    <div>{presupuesto.budgetPhone}</div>
                  </div>

                  <div className="col-12 col-md-6 my-auto">
                    <div className="ms-3"><strong>Serveis contractats:</strong></div>
                    <ul>
                      {presupuesto.services.map(service => {
                        let details = []
                        if (service.pages) details.push(`${service.pages} pàgines`)
                        if (service.languages) details.push(`${service.languages} llenguatges`)
                        return (
                          <li key={service.title}>
                            <strong>
                              {service.title}
                              {details.length > 0 && ` (${details.join(', ')})`}
                            </strong>
                          </li>
                        )
                      })}
                    </ul>
                  </div>

                  <div className="col-12 col-md-2 text-center">
                    <div>Total:</div>
                    <strong className="fs-1 text">{presupuesto.total}</strong> €
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
