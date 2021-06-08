import React from 'react';
import PropTypes from 'prop-types';

const Convertation = ({convertation}) => {
    return (
        <li className="convertation-history__convertation">
            <span className="convertation-history__date">{convertation.date}</span>
            <span className="convertation-history__convertable">{convertation.convertableAmount} {convertation.convertableCurrency}</span>
            <span className="convertation-history__converted">{convertation.convertedAmount} {convertation.convertedCurrency}</span>
        </li>
    )
}

Convertation.propTypes = {
    convertation: PropTypes.shape({
        date: PropTypes.string,
        convertableAmount: PropTypes.string,
        convertableCurrency: PropTypes.string,
        convertedAmount: PropTypes.string,
        convertedCurrency: PropTypes.string
    })
  }

export default Convertation;