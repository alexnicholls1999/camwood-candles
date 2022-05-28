function Button({ button }) {
  return (
    <button
      type={button.submit && 'submit'}
      className={`btn ${button.secondary ? 'btn-secondary' : 'btn-primary'}`}
      onClick={button.onClick}
    >
      {button.text}
    </button>
  );
}

export default Button;
