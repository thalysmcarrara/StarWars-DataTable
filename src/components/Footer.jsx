import React from 'react';
import github from '../assets/github.svg';
import linkedIn from '../assets/linkedin.svg';

const Footer = () => (
  <footer>
    <p>
      Author:
      <span style={ { marginLeft: 20 } }>Thalys Matias Carrara</span>
    </p>
    <div className="social-medias">
      <a rel="noreferrer" href="http://github.com" target="_blank"><img src={ github } style={ { width: 55, height: 55 } } alt="github icon" /></a>
      <a rel="noreferrer" href="http://linkedin.com" target="_blank"><img src={ linkedIn } style={ { width: 55, height: 55 } } alt="github icon" /></a>

    </div>
  </footer>
);

export default Footer;
