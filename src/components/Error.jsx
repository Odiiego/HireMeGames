import React from 'react';
import './Error.scss';

const Error = ({ error }) => {
  const arr = [500, 502, 503, 504, 507, 508, 509];
  let msg;

  if (arr.includes(error)) {
    msg = 'O servidor falhou em responder, tente recarregar a página';
  } else if (error === 'O servidor demorou para responder, tente mais tarde') {
    msg = 'O servidor demorou para responder, tente mais tarde';
  } else {
    msg =
      'O servidor não conseguirá responder por agora, tente voltar novamente mais tarde';
  }

  return <h2 className="error-message">{msg}</h2>;
};

export default Error;
