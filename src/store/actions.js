export const ActionType = {
    SET_CONVERTABLE_CURRENCY_AMOUNT:  `currency-converter/setConvertableCurrencyAmount`,
    SET_CONVERTABLE_CURRENCY_TYPE:  `currency-converter/setConvertableCurrencyType`,
    SET_CONVERTED_CURRENCY_AMOUNT:  `currency-converter/setConvertedCurrencyAmount`,
    SET_CONVERTED_CURRENCY_TYPE:  `currency-converter/setConvertedCurrencyType`,
    SET_CURRENCY_CONVERTATION_VALUE: `currency-converter/setCurrencyConvertationValue`,
    SET_CURRENCY_CONVERTATION_DATE: `currency-converter/setCurrencyConvertationDate`,
    ADD_CONVERTATION_TO_HISTORY_LIST: `convertation-history/addConvertationToHistoryList`,
    CLEAR_CONVERTATIONS_LIST: `convertation-history/clearConvertationsList`,
};

export const setConvertableCurrencyAmountAction = (amount) => ({type: ActionType.SET_CONVERTABLE_CURRENCY_AMOUNT, payload: amount});

export const setConvertableCurrencyTypeAction = (type) => ({type: ActionType.SET_CONVERTED_CURRENCY_TYPE, payload: type});

export const setConvertedCurrencyAmountAction = (amount) => ({type: ActionType.SET_CONVERTED_CURRENCY_AMOUNT, payload: amount});

export const setConvertedCurrencyTypeAction = (type) => ({type: ActionType.SET_CONVERTED_CURRENCY_TYPE, payload: type});

export const setCurrencyConvertationValueAction = (value) => ({type: ActionType.SET_CURRENCY_CONVERTATION_VALUE, payload: value});

export const setCurrencyConvertationDateAction = (date) => ({type: ActionType.SET_CURRENCY_CONVERTATION_DATE, payload: date});

export const addConvertationToHistoryListAction = (convertation) => ({type: ActionType.ADD_CONVERTATION_TO_HISTORY_LIST, payload: convertation})

export const clearConvertationsList = () => ({type: ActionType.CLEAR_CONVERTATIONS_LIST})