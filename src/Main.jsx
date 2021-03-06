import React, { useContext, useEffect } from 'react';
import tableContext from './context/tableContext';
import Header from './components/Header';
import Filters from './components/Filters';
import Table from './components/Table';
import Footer from './components/Footer';
import getData from './services/getData';
import filtering from './utils/filtering';

export default function Main() {
  const {
    data,
    setData,
    setIsFetching,
    setFilteredData,
    filters } = useContext(tableContext);

  useEffect(() => {
    getData(setData, setIsFetching, setFilteredData);
  }, [setData, setIsFetching, setFilteredData]);

  useEffect(() => {
    filtering(data, filters, setFilteredData);
  }, [data, filters, setFilteredData]);

  useEffect(() => {
    filtering(data, filters, setFilteredData);
  }, [filters, setFilteredData, data]);
  return (
    <>
      <Header />
      <Filters />
      <main>
        <Table />
      </main>
      <Footer />
    </>
  );
}
