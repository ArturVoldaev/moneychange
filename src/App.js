import React from 'react'
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import About from './About/About';
import Error from './Error/Error';
import WronWay from './WronWay/WronWay';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      a1: 1,
    }
  }

  render() {
    return(
      <div>
        <Header />
        <div className="container">
          <main>
            <Router>
              <Routes>
                <Route path='/' exact element={<Rate/>}/>
                <Route path='/main' exact element={<Rate/>}/>
                <Route path='/about' exact element={<About/>}/>
                <Route path='/worksplace' exact element={<Error/>}/>
                <Route path='/contact' exact element={<Error/>}/>
                <Route path='/taxes' exact element={<Error/>}/>
                <Route path='/ensirance' exact element={<Error/>}/>
                <Route path='*' element={<WronWay/>}/>
              </Routes>
            </Router>
            <div className="container" id="cookie_info">
              <div className="site-content">
                <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br/>В
                    частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
                    местоположения.&nbsp;<a href="/" className="btn btn-primary btn-sm">OK</a>
                </div>
              </div>
            </div>
          </main>
        </div>
      <Footer />  
      </div>
    );
  }
}

export default App;
