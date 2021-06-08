import {ActionType} from '../actions';

const initialState = {
    convertationsList: []
};

export const historyData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_CONVERTATION_TO_HISTORY_LIST:
      return {
        ...state,
        convertationsList: [...state.convertationsList, action.payload].slice(-10)
      };

    case ActionType.CLEAR_CONVERTATIONS_LIST:
      return {
        ...state,
        convertationsList: []
      };

    default: {
        return {
            ...state
        }
    }

  }
};
