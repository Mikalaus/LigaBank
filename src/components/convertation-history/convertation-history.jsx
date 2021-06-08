import React from 'react';
import Convertation from './convertation';
import {connect} from 'react-redux';
import {getConvertationsList} from '../../store/history-data/selectors';
import {clearConvertationsList} from '../../store/actions';
import {nanoid} from 'nanoid';
import PropTypes from 'prop-types';

const ConvertationHistory = ({convertationsList, onClearHistory}) => {

    const resetButtonClickHandler = () => {
        onClearHistory();
    }

    return (
        <section className="convertation-history">
            <div className="convertation-history__center-wrapper center-wrapper">
                <h2 className="convertation-history__title">История конвертации</h2>
                <div className="convertation-history__convertations">
                    <ul className="convertation-history__convertations-list">
                        {
                            [...convertationsList].reverse().map((convertation) => {
                                return (
                                <Convertation
                                    convertation={convertation}
                                    key={nanoid()}
                                />
                                );
                            })
                        }
                    </ul>
                </div>
                <button type="reset" className="convertation-history__clean-history" onClick={resetButtonClickHandler}>Очистить историю</button>
            </div>
        </section>
    )
}

ConvertationHistory.propTypes = {
    convertationsList: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string,
        convertableAmount: PropTypes.string,
        convertableCurrency: PropTypes.string,
        convertedAmount: PropTypes.string,
        convertedCurrency: PropTypes.string
    })),
    onClearHistory: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        convertationsList: getConvertationsList(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    onClearHistory() {
        dispatch(clearConvertationsList());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConvertationHistory);