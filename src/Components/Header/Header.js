import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="">
        <ul>
            <Link to="/"><li>HomePage</li></Link>
            <Link to="/multiplication-table"><li>Prime Multiplication</li></Link>
            <Link to="/survey"><li>Survey</li></Link>
        </ul>
    </div>
  )
}
