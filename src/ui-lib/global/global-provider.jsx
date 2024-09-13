import { useReducer } from 'react';
import { GlobalContext } from './global-context';
import { GlobalErrorModal } from './global-error-modal';

const defaultValue = {
  isOpenErrorModal: false,
  errorModalData: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'openModal': {
      return {
        ...state,
        isOpenErrorModal: true,
        errorModalData: action.data,
      };
    }
    case 'closeModal': {
      return {
        ...state,
        isOpenErrorModal: false,
        errorModalData: null,
      };
    }
    default: {
      return state;
    }
  }
};
export const GlobalProvider = ({ children }) => {
  const [globalState, globalDispatch] = useReducer(reducer, defaultValue);

  return (
    <GlobalContext.Provider
      value={{
        globalState,
        globalDispatch,
      }}
    >
      {children}
      <GlobalErrorModal />
    </GlobalContext.Provider>
  );
};
