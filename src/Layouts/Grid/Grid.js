import grid from './grid.module.scss';

export function Container({ children, fluid, className }) {
  return (
    <div
      className={`${fluid ? grid.containerFluid : grid.container} ${className}`}
    >
      {children}
    </div>
  );
}

export function Row({ children, className }) {
  return <div className={`${grid.row} ${className}`}>{children}</div>;
}

export function Col({ sm, md, lg, xl, className, children }) {
  const columnClassNames =
    (sm ? `${grid[`col-${sm}`]} ` : '') +
    (md ? `${grid[`col-md-${md}`]} ` : '') +
    (lg ? `${grid[`col-lg-${lg}`]} ` : '') +
    (xl ? `${grid[`col-xl-${xl}`]} ` : '');

  return <div className={`${columnClassNames} ${className}`}>{children}</div>;
}
