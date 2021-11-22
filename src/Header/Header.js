import React from 'react'
import './Header.css';

import Nav from '../Nav/Nav';

let navMenu = {main:'Главная', worksplace:'Пункты обмена', contact:'Контакты', taxes:'Коммисия', ensirance:'Зона ответственности', about:'О нас' };

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      a1: 1,
    }
  }

  render() {
    
    return(
      <header>
        <div className="top-bar animate-dropdown"></div>
        <div className="main-header">
            <div className="container">
                <h1 className="site-title">React Lite Level</h1>
            </div>
        </div>
        <Nav navMenu={navMenu} />
      </header>
    );
  }
}
export default Header;
