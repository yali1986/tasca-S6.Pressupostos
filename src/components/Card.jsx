
export default function Card({title="", description="", price=0, check, moneda="€"}) {
    return (
        <>
            <div className="container-fluid col-8">

                <div className="row align-items-center shadow bg-body-tertiary rounded p-4 m-3">
                    <div className="col-4">
                        <div className="card-body">
                            <div className="card-title fw-bold">{title}</div>
                            <div className="card-text fw-medium fs-6 text"> {description} </div>
                        </div>
                    </div>

                    <div className="col-4 d-flex justify-content-center">                        
                            <div className="card-title fw-bolder mx-1"> { price } </div> 
                            <div>{ moneda }</div>                     
                    </div>

                    <div className="col-4 d-flex justify-content-end">                     
                         <div className="card-text"> {check} </div>                      
                    </div>



                </div>
                
            </div>
        </>
    )
}
