import { createContext, useMemo } from 'react';
import { ICountryContextType } from './types';

export const countryContextDefaultValues: ICountryContextType = {
  errors: '',
  addErrors: () => {},
  loading: true,
  showHideLoading: () => {},
};

// const countryContext = createContext<ICountryContextType>(countryContextDefaultValues);
// useMemo(() => countryContext, []);
export const countryContextMemo = createContext<ICountryContextType>(countryContextDefaultValues);
