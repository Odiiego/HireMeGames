import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__note">
        Este site foi criado como parte do processo de seleção da{' '}
        <a href="https://www.appmasters.io/"> App Masters</a>. Espero que
        gostem! Me diverti muito ao desenvolve-lo e fiquei extremamente
        satisfeito com o resultado alcançado.
      </p>
      <p className="footer__note">
        Muito Obrigado pela oportunidade de participar, mal posso esperar para
        trabalhar com vocês! <b>xD</b>
      </p>
      <p id="signature" className="loader">
        <a href="https://github.com/Odiiego">
          Diego <br /> Paula
        </a>
      </p>
    </footer>
  );
}

export default Footer;
