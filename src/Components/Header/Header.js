import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

export default function Header() {
  return (
    <div className="heading-section">
        <ul className="heading-ul">
            <Link to="/" className="link"><li>HomePage</li></Link>
            <Link to="/multiplication-table"><li>PrimeMultiplication</li></Link>
            <Link to="/survey"><li>Survey</li></Link>
        </ul>
    </div>
  )
}
