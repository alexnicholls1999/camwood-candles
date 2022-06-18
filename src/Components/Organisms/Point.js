import React from 'react';

function Point({ point }) {
  const pointClassNames =
    (point.isSecondary ? 'secondary' : 'primary') +
    (point.isThird ? ' order-3' : ' ') +
    (point.isLastPoint ? 'last-point' : '');

  return (
    <>
      <div className={`point ${pointClassNames}`}>
        <div className="point-content-container">
          <div className="point-icon" id={point.pointId}></div>
          <h4 className="point--title">{point.title}</h4>
          <p className="point--desc">{point.message}</p>
        </div>
      </div>
    </>
  );
}

export default Point;
