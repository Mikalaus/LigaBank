import React, { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import {fetchCurrencyList} from '../../store/api-actions';
import {addConvertationToHistoryListAction} from '../../store/actions';
import {getQuotation} from '../../store/converter-data/selectors';
import {connect} from 'react-redux';
import {getWeekAgo, getDate} from '../../util';
import PropTypes from 'prop-types';

const CurrencyConverter = ({quotation, onCurrencyQuotation, onHistoryList}) => {

    const [convertationDate, setConvertationDate] = useState(new Date());
    const [convertableCurrency, setConvertableCurrency] = useState(`RUB`);
    const [convertedCurrency, setConvertedCurrency] = useState(`USD`);
    const [convertableAmount, setConvertableAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);

    useEffect(() => {
        onCurrencyQuotation(convertableCurrency, convertedCurrency, getDate(convertationDate));
    }, [convertableCurrency, convertedCurrency, convertationDate])

    useEffect(() => {
        convertableAmountInputHandler();
    }, [quotation])

    const convertableAmountInputHandler = () => { 
        const CONVERTABLE = document.querySelector('.converter-input__amount--convertable');
        const CONVERTED = document.querySelector('.converter-input__amount--converted');

        CONVERTABLE.value = +CONVERTABLE.value
        CONVERTED.value = Math.ceil(CONVERTABLE.value * quotation * 10000) / 10000;
        setConvertableAmount(CONVERTABLE.value);
        setConvertedAmount(CONVERTED.value);
    
    }

    const convertedAmountInputHandler = () => {
        const CONVERTABLE = document.querySelector('.converter-input__amount--convertable');
        const CONVERTED = document.querySelector('.converter-input__amount--converted');

        CONVERTED.value = +CONVERTED.value
        CONVERTABLE.value = Math.ceil(CONVERTED.value / quotation * 10000) / 10000;
        setConvertableAmount(CONVERTABLE.value);
        setConvertedAmount(CONVERTED.value);
        
    }

    const convertableCurrencyButtonHandler = () => (evt) => {
        setConvertableCurrency(evt.target.value);
    }

    const convertedCurrencyButtonHandler = () => (evt) => {
        setConvertedCurrency(evt.target.value);
    }

    const submitButtonClickHandler = () => (evt) => {
        evt.preventDefault();
        onHistoryList({
            date: getDate(convertationDate),
            convertableAmount: convertableAmount,
            convertableCurrency: convertableCurrency,
            convertedAmount: convertedAmount,
            convertedCurrency: convertedCurrency,
        })
    }

    return (
        <section className="currency-converter">
            <div className="currency-converter__center-wrapper center-wrapper">
                <form action="post" className="currency-converter__form">
                    <h2 className="currency-converter__title">Конвертер валют</h2>
                    <div className="currency-converter__converter">
                        <div className="currency-converter__converter-input converter-input">
                            <label htmlFor="convertable-amount" className="converter-input__label">У меня есть</label>
                            <div className="converter-input__inputs">
                                <input className="converter-input__amount converter-input__amount--convertable" id="convertable-amount" type="number" defaultValue="0" onChange={convertableAmountInputHandler}/>
                                <div className="converter-input__select-wrapper">
                                    <select className="converter-input__type" defaultValue="RUB" onChange={convertableCurrencyButtonHandler()}>
                                        <option value="RUB">RUB</option>
                                        <option value="USD">USD</option>
                                        <option value="EUR">EUR</option>
                                        <option value="GBP">GBR</option>
                                        <option value="CNY">CNY</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="currency-converter__converter-input converter-input">
                            <label htmlFor="converted-amount" className="converter-input__label">Хочу приобрести</label>
                            <div className="converter-input__inputs">
                                <input className="converter-input__amount converter-input__amount--converted" id="converted-amount" type="number" defaultValue="0" onChange={convertedAmountInputHandler}/>
                                <div className="converter-input__select-wrapper">
                                    <select className="converter-input__type" defaultValue="USD" onChange={convertedCurrencyButtonHandler()}>
                                        <option value="RUB">RUB</option>
                                        <option value="USD">USD</option>
                                        <option value="EUR">EUR</option>
                                        <option value="GBP">GBR</option>
                                        <option value="CNY">CNY</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="currency-converter__submit-block">
                        <DatePicker
                        onChange={setConvertationDate}
                        value={convertationDate}
                        maxDate={new Date()}
                        minDate={getWeekAgo()}
                        format={"dd.MM.yyyy"}
                        />
                        <button type="submit" className="currency-converter__submit-button" onClick={submitButtonClickHandler()}>Сохранить результат</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

CurrencyConverter.propTypes = {
    quotation: PropTypes.number,
    onCurrencyQuotation: PropTypes.func,
    onHistoryList: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        quotation: getQuotation(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    onCurrencyQuotation(convertableCurrency, convertedCurrency, date) {
        dispatch(fetchCurrencyList(convertableCurrency, convertedCurrency, date));
    },

    onHistoryList(convertationInfo) {
        dispatch(addConvertationToHistoryListAction(convertationInfo))
    }
});

export {CurrencyConverter};
export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConverter);