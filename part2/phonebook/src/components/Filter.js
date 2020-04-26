import React from 'react';

const Filter = ({ value, onChange }) => (
  <div>
     <input value={value} onChange={onChange} placeholder="Search"/>
  </div>
);

export default Filter;
