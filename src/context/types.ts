export interface ICountryContextType {
  errors: string;
  addErrors: (error: any) => void;
  loading: boolean,
  showHideLoading: (bool: boolean) => void,
};
