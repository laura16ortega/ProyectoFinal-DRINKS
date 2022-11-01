import { NavLink } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'



const Sidebar = () => {
  return (
    <div className="sidebar bg-light">
        <ul>
            <li>
                <NavLink to="/dashboard"  className="text-dark" ><FaIcons.FaHome  className="me-2"/> Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/products"  className="text-dark" ><FaIcons.FaRegChartBar  className="me-2"/>Productos</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/users"  className="text-dark" ><FaIcons.FaUsers  className="me-2"/>Usuarios</NavLink>
            </li>
        </ul>
    </div>
  )

}

export default Sidebar