import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <h1>Inicio</h1>
      <Link to="/contact">Ir a Contacto</Link>
    </div>
  )
}
