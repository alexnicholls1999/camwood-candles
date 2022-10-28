import React from 'react';

export default class Table extends React.Component {
  renderTableHeader() {
    return this.props.headings.map((heading, index) => (
      <th key={index}>{heading}</th>
    ));
  }

  renderTableData() {
    return this.props.data.map((data, index) => {
      const { id, productName, dimensions, cost } = data;
      return (
        <tr key={id}>
          <td>{productName}</td>
          <td>{dimensions}</td>
          <td>{cost}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <>
        <h3>{this.props.title}</h3>
        <table className='products-table'>
          <thead>
            <tr>{this.renderTableHeader()}</tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </>
    );
  }
}
