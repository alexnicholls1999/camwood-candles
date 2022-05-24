import atoms from '../atoms.module.scss';

function Button({ button }) {
  return (
    <button
      className={button.secondary ? atoms.btnSecondary : atoms.btnPrimary}
      onClick={button.onClick}
    >
      {button.text}
    </button>
  );
}

export default Button;
