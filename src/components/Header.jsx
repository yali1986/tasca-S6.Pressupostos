import fondoHeader from "../assets/fondoHeader.jpeg"


export default function Header() {
  return (
    <div className="card text-center m-5 w-75 mx-auto p-5" 
    style={{ backgroundImage: `url(${fondoHeader})`, border:"none" }}
    >   
  
     <h1>Aconsegueix la millor qualitat</h1> 
    </div>
  )
}
