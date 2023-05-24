import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

export default function Header() {
  return (
    <div className="heading-section">
        <ul className="heading-ul">
          <Link to="/multiplication-table" className="link"><li>PrimeMultiplication</li></Link>
          <Link to="/" className="link"><li>Tourism Form</li></Link>
        </ul>
    </div>
  )
}
