import React from 'react';

function ArrowBtn({ type = 'default', text = '', className, onClick }) {
  if (type === 'primary') {
    return (
      <button
        onClick={onClick}
        className={`arrow-btn arrow-primary btn-primary ${className}`}
      >
        {text}
      </button>
    );
  } else if (type === 'secondary') {
    return (
      <button
        onClick={onClick}
        className={`arrow-btn arrow-secondary btn-secondary ${className}`}
      >
        {text}
      </button>
    );
  } else {
    return (
      <button onClick={onClick} className={`arrow-btn ${className}`}>
        {text}
      </button>
    );
  }
}

export default ArrowBtn;
