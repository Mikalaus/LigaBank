import {NameSpace} from '../reducer';

export const getDate = (state) => state[NameSpace.CONVERTER].convertationDate;
export const getQuotation = (state) => state[NameSpace.CONVERTER].convertationValue;
export const getConvertableCurrency = (state) => state[NameSpace.CONVERTER].convertableCurrencyType;
export const getConvertedCurrency = (state) => state[NameSpace.CONVERTER].convertedCurrencyType;

