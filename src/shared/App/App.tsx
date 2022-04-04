import React, { useContext } from 'react';
import { countryContextMemo } from '../../context/countryContext';
import './App.css';

const App = () => {
  const { loading, showHideLoading } = useContext(countryContextMemo);
  console.log(loading, showHideLoading);

  return (
    <div className="app">
      qweqweqwe
    </div>
  );
};

export default App;
