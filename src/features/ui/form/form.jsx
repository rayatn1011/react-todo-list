import { FormProvider } from 'react-hook-form';

export const Form = ({ className, children, onSubmit, methods, ...rest }) => {
  return (
    <FormProvider {...methods}>
      <form
        {...rest}
        className={className}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};
