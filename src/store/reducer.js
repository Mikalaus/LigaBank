import {combineReducers} from 'redux';
import {converterData} from './converter-data/converter-data';
import {historyData} from './history-data/history-data';

export const NameSpace = {
  CONVERTER: `CONVERTER`,
  HISTORY: `HISTORY`
};

export default combineReducers({
  [NameSpace.CONVERTER]: converterData,
  [NameSpace.HISTORY]: historyData,
});
