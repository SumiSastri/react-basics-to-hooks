import React from "react";
import { Link } from "react-router-dom";

export default function TableOfContentsBar() {
  return (
    <div className="card">
      <Link to="/" className="toc-item">
        <h6>Home</h6>
      </Link>
      <ol>
        <Link to="/use-state" className="toc-item">
          <li>The useState Hook</li>
        </Link>
        <Link to="/use-effect" className="toc-item">
          <li>The useEffect Hook</li>
        </Link>
        <Link to="/use-context" className="toc-item">
          <li>The useContext Hook</li>
        </Link>
      </ol>
    </div>
  );
}
