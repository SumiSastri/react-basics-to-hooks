import React from "react";

import { Link } from "react-router-dom";

const TableOfContentsBar = () => {
  return (
    <div className='card'>
      <Link to='/' className='toc-item'>
        <h4>Back to Table of Contents</h4>
      </Link>
      <ol>
        <Link to='/use-state' className='toc-item'>
          <li>The useState Hook</li>
        </Link>
        <Link to='/use-effect' className='toc-item'>
          <li>The useEffect Hook</li>
        </Link>
        <Link to='/use-context' className='toc-item'>
          <li>The useContext Hook</li>
        </Link>
        <Link to='/use-reducer' className='toc-item'>
          <li>The useReducer Hook</li>
        </Link>
      </ol>
    </div>
  );
};

export default TableOfContentsBar;
