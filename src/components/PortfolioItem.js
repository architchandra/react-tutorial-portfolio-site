import React from 'react';



const PortfolioItem = (props) => {
  return (
    <div>
      <h2>Look at what I have done</h2>
      <p>The ID for this is {props.match.params.id}</p>
    </div>
  );
};
export default PortfolioItem;