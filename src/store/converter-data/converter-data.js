import {ActionType} from '../actions';

const initialState = {
    convertationValue: 0
};

export const converterData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CONVERTABLE_CURRENCY_AMOUNT:
      return {
        ...state,
        convertableCurrencyAmount: action.payload
      };

    case ActionType.SET_CONVERTABLE_CURRENCY_TYPE:
    return {
        ...state,
        convertableCurrencyType: action.payload
    };

    case ActionType.SET_CONVERTED_CURRENCY_AMOUNT:
      return {
        ...state,
        convertedCurrencyAmount: action.payload
      };

    case ActionType.SET_CONVERTED_CURRENCY_TYPE:
        return {
            ...state,
            convertedCurrencyType: action.payload
        };

    case ActionType.SET_CURRENCY_CONVERTATION_DATE:
        return {
            ...state,
            convertationDate: action.payload
        };


    case ActionType.SET_CURRENCY_CONVERTATION_VALUE:
        return {
            ...state,
            convertationValue: action.payload
        };
    

    default: {
        return {
            ...state
        }
    }

  }
};
