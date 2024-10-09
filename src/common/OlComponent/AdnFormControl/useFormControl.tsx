import React from 'react';

export const FormControlContext = React.createContext({});

export function useFormControlProvider<T>(context: T) {
  return context;
}

export const useFormControlContext = () => {
  return React.useContext(FormControlContext);
};
