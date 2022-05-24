import React from 'react';

function Label({ label }) {
  return <label htmlFor={label.htmlFor}>{label.name}</label>;
}

export default Label;
