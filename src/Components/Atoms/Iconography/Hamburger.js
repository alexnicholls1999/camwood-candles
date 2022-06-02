function Hamburger({ onClick }) {
  return (
    <div className="mobile-btn" onClick={onClick}>
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Hamburger;
