import React from 'react'
import './Rate.css';
import Calc from '../Calc/Calc'


class Rate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
			currencyRate:{},
			some: '',
    };
		this.currency = ['RUB','CAD','USD'];
  };

	getRate = () => {
		fetch('http://api.exchangeratesapi.io/v1/latest?access_key=ee675349e58122437d81f12a9d848ce2')
		.then(data => {
			return data.json();
		})
		.then(data => {
			 let result = {};
			 for (let i = 0; i <this.currency.length; i++) {
				 result[this.currency[i]] = data.rates[this.currency[i]]
			 }
			 this.setState({currencyRate: result})
			 this.setState({date: data.date})
		})
	}

	componentDidMount() {
		this.getRate();
	}


  render() {
    return(
			<div> 
				<h3> Курс валют на {this.state.date}</h3>
				<div className="flex-container">
					{Object.keys(this.state.currencyRate).map(elem => 
						(
							<div className="block flex-item" key={elem}>
								<div className="currency-name">{elem}</div>
								<div className="currency-in">{this.state.currencyRate[elem].toFixed(2)}*</div>
								<p className="currency-out">Можно купить за 1 EUR*</p>
							</div>
						)
						)}
				</div>
				<Calc rate = {this.state.currencyRate} />
			</div>
    );
  }
}
export default Rate;
