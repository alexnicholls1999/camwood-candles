function Dot({ dot }) {
  return (
    <div
      onClick={dot.onClick}
      className={`dot ${dot.active ? 'active' : ''}`}
      id={dot.id}
    />
  );
}

export default Dot;
