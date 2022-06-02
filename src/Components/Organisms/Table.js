import React from 'react';

function Table({ table }) {
  return (
    <>
      <h3>{table.title}</h3>
      <table className="products-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Dimensions</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {table.rows.map((row) => {
              return <td>{row}</td>;
            })}
          </tr>
          <tr className="secondary-row">
            {table.rows2.map((row) => {
              return <td>{row}</td>;
            })}
          </tr>
          <tr>
            {table.rows3.map((row) => {
              return <td>{row}</td>;
            })}
          </tr>
          <tr>
            {table.rows4.map((row) => {
              return <td>{row}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table;
