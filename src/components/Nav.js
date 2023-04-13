import React from 'react';
import { Link } from 'react-router-dom';
import AuthState from "./AuthState";

export default function Nav() {
  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Dnd React
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/charactersheet"> Character Sheet</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/createcharacter">Create Character</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/newclassselect">Class</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/raceselect">Race</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/alignmentselect">Alignment</Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                  <AuthState/>
                  </Link>
                </li>
            </ul>
          </div>
        </nav>
      </div>
  )
}




