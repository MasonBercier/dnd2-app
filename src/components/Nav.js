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
            <ul className="navbar-nav">
                <AuthState/>
            </ul>
        </nav>
      </div>
  )
}




