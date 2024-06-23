import NavButton from "./NavButton"
import { NavLink } from "react-router-dom"

export default function Home() {
  return (
    <div className="text-center m-5 p-4">
      <h1>Benvingut al teu generador de pressupostos</h1>
      <h5 className="m-5">Calcula el preu de la pàgina web que necessites a mida</h5>
      <NavLink to="/index"><NavButton buttonName="Pressupostar" /></NavLink>     
    
    </div>
  )
}
