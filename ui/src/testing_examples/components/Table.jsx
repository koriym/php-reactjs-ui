// https://github.com/reactjs/react-php-v8js/blob/master/example/src/table.js

import React from 'react';

const Table = (props) => {
  const rows = props.data.map((row, i) => {
    const cells = row.map((cell, j) => (
      <td key={j}>{cell}</td>
    ));

    return <tr key={i}>{cells}</tr>;
  });

  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
};

Table.propTypes = {
  data: React.PropTypes.array.isRequired,
};

module.exports = Table;
