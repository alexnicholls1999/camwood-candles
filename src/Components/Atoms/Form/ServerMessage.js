import React from 'react';

function ServerMessage({ error, result, children }) {
  return (
    <div
      className={`serverMessage ${error && 'serverErr'} ${
        result && 'serverResult'
      }`}
    >
      {children}
    </div>
  );
}

export default ServerMessage;
