import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

export default function ListOfFilters() {
  const {
    columns,
    setColumns,
    setFilters,
    filters,
    filters: { filterByNumericValues },
  } = useContext(tableContext);

  const handleClick = ({ target: { name } }) => {
    const filterTurnToSelect = filterByNumericValues.filter(
      ({ column }) => column === name,
    );
    const filterTurnToFilter = filterByNumericValues.filter(
      ({ column }) => column !== name,
    );
    setFilters({ ...filters,
      filterByNumericValues: filterTurnToFilter });
    setColumns([...columns, filterTurnToSelect[0].column]);
  };
  return (
    <div className="container-list-item">
      <h1>Filtros utilizados</h1>
      <div className="container-list-filters">
        {filterByNumericValues.map((filter) => {
          const { column } = filter;

          return (
            <div className="container-deleted-filters" key={ column }>
              <div className="list-item" data-testid="filter">
                <div className="text-filter-container">{column}</div>
                <input
                  type="button"
                  name={ column }
                  onClick={ handleClick }
                  className="button-delete-filter"
                />
              </div>
              <hr />
            </div>

          );
        })}
      </div>
    </div>
  );
}
