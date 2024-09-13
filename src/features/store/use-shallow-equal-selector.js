import { shallowEqual, useSelector } from 'react-redux';

export const useShallowEqualSelector = (selectorFn) => {
  return useSelector(selectorFn, {
    equalityFn: shallowEqual,
  });
};
