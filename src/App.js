import React from 'react';
import Provider from './context/Provider';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Provider>
      <Main />
    </Provider>
  );
}

export default App;
