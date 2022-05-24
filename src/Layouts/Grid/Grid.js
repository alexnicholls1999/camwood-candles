import grid from "./grid.module.scss";

export function Container({ children }) {
  return <div className={grid.container}>{children}</div>;
}

export function Row({ children }) {
  return <div className={grid.row}>{children}</div>;
}

export function Col({ sm, md, lg, xl, className, children }) {
  const columnClassNames =
    (sm ? `${grid[`col-${sm}`]} ` : '') +
    (md ? `${grid[`col-md-${md}`]} ` : '') +
    (lg ? `${grid[`col-lg-${lg}`]} ` : '') +
    (xl ? `${grid[`col-xl-${xl}`]} ` : '');

  return (
    <div className={`${columnClassNames} ${className || ''}`}>{children}</div>
  );
}
