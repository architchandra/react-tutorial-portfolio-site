import React from 'react';
import { Link } from 'react-router-dom';



const Portfolio = (props) => {
  return (
    <div>
      <h2>Portfolio</h2>
      <ul>
        <li>
          <Link to="/portfolio/1">Project One</Link>
        </li>
        <li>
        <Link to="/portfolio/2">Project Two</Link>
        </li>
      </ul>
    </div>
  );
};
export default Portfolio;