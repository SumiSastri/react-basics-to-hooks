import React from "react";
import { Link } from "react-router-dom";

export default function TableOfContentsBar() {
  return (
    <div className="card">
      <Link to="/" className="toc-item">
        <h6>Home</h6>
      </Link>
      <ol>
        <Link to="/components" className="toc-item">
          <li>What is a component in React?</li>
        </Link>
        <Link to="/functional-components" className="toc-item">
          <li>What is a functional component?</li>
        </Link>
        <Link to="/class-components" className="toc-item">
          <li>What are class components? (Demos with examples)</li>
        </Link>
        <Link to="/counter-demo" className="toc-item">
          <li>What are async calls? (Counter demo)</li>
        </Link>
        <Link to="/event-handling" className="toc-item">
          <li>How does event-handling work in React?</li>
        </Link>
        <Link to="/conditional-rendering" className="toc-item">
          <li>What are the four ways you can render JSX conditionally?</li>
        </Link>
        <Link to="/map-and-render" className="toc-item">
          <li>How do you map and render list data?</li>
        </Link>
        <Link to="/forms" className="toc-item">
          <li>How do React forms differ from HTML forms?</li>
        </Link>
        <Link to="/higher-order-components" className="toc-item">
          <li>What is prop-drilling?</li>
        </Link>
        <Link to="/api-calls-with-axios" className="toc-item">
          <li>
            How to use the Axios Library with React to make external-API data
            calls
          </li>
        </Link>
      </ol>
    </div>
  );
}
