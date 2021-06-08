import React from 'react';
import PropTypes from 'prop-types';

const Header = ({logo}) => {

    return (
        <header className="header">
            <div className="header__center-wrapper center-wrapper">
            <div className="header__logo logo">
                <img className="logo__image" src={logo} alt="Логотип" />
                <div className="logo__name">
                    ЛИГА Банк
                </div>
            </div>
            <nav className="header__navigation">
                <ul className="header__nav-items">
                    <li className="header__nav-item"><a href="services.html" className="header__nav-link">Услуги</a></li>
                    <li className="header__nav-item"><a href="loan.html" className="header__nav-link">Рассчитать кредит</a></li>
                    <li className="header__nav-item header__nav-item--active"><a href="#" className="header__nav-link">Конвертер валют</a></li>
                    <li className="header__nav-item"><a href="contacts.html" className="header__nav-link">Контакты</a></li>
                    <li className="header__nav-item"><a href="questions.html" className="header__nav-link">Задать вопрос</a></li>
                </ul>
            </nav>
            <div className="header__log-in">
                Войти в Интернет-банк
            </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    logo: PropTypes.string
}
  

export default Header;