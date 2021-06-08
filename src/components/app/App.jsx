import React from 'react';
import logo from '../../img/logo.svg';
import blackCard from '../../img/black-card.png';
import whiteCard from '../../img/white-card.png';
import Header from '../header/header';
import CreditSection from '../credit-section/credit-section';
import CurrencyConverter from '../currency-converter/currency-converter';
import ConvertationHistory from '../convertation-history/convertation-history';
import Footer from '../footer/footer';

const App = () => {

    return (
        <div>
            <Header logo={logo}/>
            <CreditSection whiteCard={whiteCard} blackCard={blackCard}/>
            <CurrencyConverter/>
            <ConvertationHistory/>
            <Footer logo={logo}/>
        </div>
    );
}

export default App;
