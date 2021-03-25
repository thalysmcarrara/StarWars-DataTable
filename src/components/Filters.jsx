import React, { useContext } from 'react';
import tableContext from '../context/tableContext';
import NumericForm from './NumericForm';
import ListOfFilters from './ListOfFilters';
import Sort from './Sort';
import bb8 from '../assets/bb8_1.svg';
import darth from '../assets/c3po.svg';

export default function Filters() {
  const { setFilters, filters } = useContext(tableContext);

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setFilters({ ...filters, [name]: { name: value } });
  };

  return (
    <section className="filters">
      <div className="darth">
        <img height={ 300 } width={ 300 } src={ darth } alt="darth vader" />
      </div>
      <div className="form-group">
        <div className="inputText-container">
          <input
            className="input-text"
            name="filterByName"
            size="lg"
            type="text"
            placeholder="Nome do Planeta"
            data-testid="name-filter"
            onChange={ (event) => handleInput(event) }
          />
        </div>
        <hr className="hr-large" />
        <NumericForm />
        <hr className="hr-large" />
        <Sort />
      </div>
      <ListOfFilters />
      <div className="bb8">
        <img height={ 200 } width={ 200 } src={ bb8 } alt="bb8" />
      </div>
    </section>
  );
}
