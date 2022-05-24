import atoms from '../atoms.module.scss';

function Input({ input }) {
  return (
    <input className={atoms.input} type="text" onChange={input.onChange} />
  );
}

export default Input;
