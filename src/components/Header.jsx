import React from 'react';
import galacticorder from '../assets/galacticorder.svg';
import jediorder from '../assets/jediorder.svg';
import rebelalliance from '../assets/rebelalliance.svg';

export default function Header() {
  return (
    <header>
      <div className="icons-container">
        <img height={ 55 } width={ 55 } src={ galacticorder } alt="galactic order" />
        <img height={ 55 } width={ 55 } src={ jediorder } alt="jedi order" />
        <img height={ 55 } width={ 55 } src={ rebelalliance } alt="rebel alliance" />
      </div>
      <div className="title-container">
        <h1>Star Wars Planets</h1>
      </div>
    </header>
  );
}
