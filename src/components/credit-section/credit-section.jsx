import React from 'react';
import PropTypes from 'prop-types';

const CreditSection = ({blackCard, whiteCard}) => {
    return (
        <section className="credit-section">
            <div className="credit-section__background-wrapper">
                <div className="credit-section__center-wrapper center-wrapper">
                    <div className="credit-section__credit">
                    <div className="credit-section__title">
                        <h1 className="credit-section__bank-name">Лига Банк</h1>
                        <span className="credit-section__description">Кредиты на любой случай</span>
                    </div>
                        <button type="button" className="credit-section__count-credit-button">Рассчитать кредит</button>
                    </div>
                    <div className="credit-section__credit-cards">
                        <img src={blackCard} alt="Логотип" className="credit-section__card credit-section__card--black" />
                        <img src={whiteCard} alt="Логотип" className="credit-section__card credit-section__card--white" />
                    </div>
                </div>
            </div>
        </section>
    )
}

CreditSection.propTypes = {
    blackCard: PropTypes.string,
    whiteCard: PropTypes.string
}

export default CreditSection;