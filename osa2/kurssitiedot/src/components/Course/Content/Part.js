import React from 'react';

const Part = ({ name, exercises }) => (
  <tr>
    <td>{name}</td> <td align="right">{exercises}</td>
  </tr>
);

export default Part;
