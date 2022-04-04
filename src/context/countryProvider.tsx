import React, { FC, useState } from 'react';
import { countryContextMemo, countryContextDefaultValues } from './countryContext';
import { ICountryContextType } from './types';

const CountryProvider: FC = ({ children }) => {
  const [errors, setErrors] = useState<any>(countryContextDefaultValues.errors);
  const addErrors = (incomingError: any) => setErrors(incomingError);

  const [loading, setLoading] = useState<boolean>(countryContextDefaultValues.loading);
  const showHideLoading = (isLoading: boolean) => setLoading(isLoading);

  const value: ICountryContextType = {
    errors,
    addErrors,
    loading,
    showHideLoading,
  };

  return (
    <countryContextMemo.Provider value={value}>
      {children}
    </countryContextMemo.Provider>
  );
};

export default CountryProvider;
