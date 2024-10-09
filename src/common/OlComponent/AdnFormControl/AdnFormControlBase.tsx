import React from 'react';
import { AdnFromControlProps } from './AdnFormControl.type';
import { FormControlContext, useFormControlProvider } from './useFormControl';

const AdnFormControlBase = (props: AdnFromControlProps) => {
  const context = useFormControlProvider<AdnFromControlProps>(props);
  const { children } = props;
  return (
    <FormControlContext.Provider value={context}>
      <div className='flex w-full gap-1 flex-col'>{children}</div>
    </FormControlContext.Provider>
  );
};

export { AdnFormControlBase };
