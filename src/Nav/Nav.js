import React from 'react'
import './Nav.css';




class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      a1: 1,
    }
  }

  render() {
    let itemMenu = this.props.navMenu;
    return(
      <div className="header-nav">
          <div className="container">
              <nav>
                  <ul>
                      {Object.keys(itemMenu).map(elem => <li key={elem}><a href={elem}>{itemMenu[elem]}</a></li>)}
                  </ul>
              </nav>
          </div>
      </div>
    );
  }
}

export default Nav;
//{Object.key(itemMenu).map(elem => <li><a href={elem}>11</a></li> )}