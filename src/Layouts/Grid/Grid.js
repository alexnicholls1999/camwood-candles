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

export function Row({ children, className, ...props }) {
  return (
    <div className={`${grid.row} ${className ? className : ''}`} {...props}>
      {children}
    </div>
  );
}

export function Col({
  sm,
  md,
  lg,
  xl,
  order,
  ordermd,
  orderlg,
  id,
  className,
  children,
}) {
  const columnClassNames =
    (sm ? `${grid[`col-${sm}`]} ` : '') +
    (md ? `${grid[`col-md-${md}`]} ` : '') +
    (lg ? `${grid[`col-lg-${lg}`]} ` : '') +
    (xl ? `${grid[`col-xl-${xl}`]} ` : '');

  return (
    <div
      id={id}
      className={`${columnClassNames} ${className ? className : ''}`}
    >
      {children}
    </div>
  );
}
