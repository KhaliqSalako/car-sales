import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/manufacturers/">
                Manufacturer List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/manufacturers/new">
                Add New Manufacturer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/models/">
                Model List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/models/new">
                Add New Model
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/automobiles/">
                Automobile List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/automobiles/new">
                Add New Automobile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/employees/new">
                Add New Employee
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/customers/new">
                Add New Customer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/sales/">
                Sales List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/sales/new">
                Add New Sale
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/sales/history">
                Salesperson History
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  aria-current="page" to="/service_appointment">
                Appointment List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  aria-current="page" to="/service_appointment/new">
                Add an Appointment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  aria-current="page" to="/service_appointment/history">
                Appointment History
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  aria-current="page" to="/service_technician/new">
                Add Service Technician
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
