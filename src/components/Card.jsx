
export default function Card({ title = "", description = "", price = 0, checked = false, onCheckChange, highlight = false, moneda = "€", extraContent = null, isDiscountApplied }) {

    return (
        <>

            <div className="container-fluid col-8">

                <div className={`row align-items-center shadow bg-body-tertiary rounded p-4 m-3 ${highlight ? "border border-success" : ""}`}>

                    <div className="col-12 col-md-8 text-center text-md-start">
                        <div className="card-body">
                            <div className="card-title fw-bold">{title}</div>
                            <div className="card-text fw-medium fs-6 mb-2"> {description} </div>
                        </div>
                    </div>


                    <div className="col-12 col-md-2 d-flex flex-column align-items-center justify-content-center">
                    <div className="card-title fw-bolder mb-2 text-center">
                     {isDiscountApplied && (
                            <h6 className="text-success mb-1">Ahorra un 20%</h6>
                        )}
                            {price.toFixed(2)} {moneda}

                            {isDiscountApplied && (
                            <div className="text-decoration-line-through text-muted">
                                {(price / 0.8).toFixed(2)} {moneda}
                            </div>
                        )}
                        </div>            
                        
                      
                    </div>


                    <div className="col-12 col-md-2 d-flex justify-content-center">
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={onCheckChange}
                            value={price}
                        />
                        <span className="ms-2">Afegir</span>
                    </div>

                    {extraContent && <div className="mt-3">{extraContent}</div>}

                </div>
            </div>
        </>
    )
}
