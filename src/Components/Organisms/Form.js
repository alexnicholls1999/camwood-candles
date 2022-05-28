import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import Button from '../Atoms/Form/Button';
import ServerMessage from '../Atoms/Form/ServerMessage';

const serverMessageFunc = (err, isErr, res, isRes) => {
  if (err) return <ServerMessage error={isErr}>{err}</ServerMessage>;

  return (
    <ServerMessage result={isRes}>
      {res.status !== 0 ? res.status : ''} {res.text}
    </ServerMessage>
  );
};

const timeDelay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const emailPromise = (ref) =>
  new Promise((resolve, reject) => {
    emailjs
      .sendForm(
        'service_eqh051n',
        'template_azge4zy',
        ref,
        'user_Ab9Ia9hdcK1vI2gMo57JB'
      )
      .then(
        (result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        }
      );
  });

function Form() {
  const [result, setResult] = useState({
    text: '',
    status: 0,
  });
  const [error, setError] = useState('');
  const [isResult, setIsResult] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useRef(null);
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emptyForm = () => {
      timeDelay(5000).then(() => {
        setResult({
          text: '',
          status: 0,
        });
        setIsResult(false);

        const reset = () => {
          nameRef.current.value = '';
          emailRef.current.value = '';
          messageRef.current.value = '';
        };
        reset();
      });
    };

    try {
      const result = await emailPromise(form.current);
      setResult({
        text: result.text,
        status: result.status,
      });
      setIsResult(!isResult);
      emptyForm();
    } catch (err) {
      setError(err);
      setIsError(!isError);
    }
  };

  return (
    <>
      {serverMessageFunc(error, isError, result, isResult)}
      <form
        className="contact-form"
        ref={form}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="form-control">
          <label>Name</label>
          <input
            ref={nameRef}
            type="text"
            placeholder="Enter Name"
            name="name"
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter Email"
            name="email"
          />
        </div>
        <div className="form-control">
          <label>Message</label>
          <textarea
            ref={messageRef}
            type="text"
            cols={30}
            rows={8}
            placeholder="Enter Message"
            name="message"
          />
        </div>
        <Button button={{ secondary: true, text: 'Send' }} />
      </form>
    </>
  );
}

export default Form;
