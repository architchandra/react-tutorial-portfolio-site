import React from 'react';



const Portfolio = (props) => {
  return (
    <div>
      <h2>Portfolio</h2>
      <p>Portfolio ID is { props.match.params.id }</p>
    </div>
  );
};
export default Portfolio;