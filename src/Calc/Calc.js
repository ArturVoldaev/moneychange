import React from 'react'
import './Calc.css';


class Calc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: 0,
    };
  }

	static getDerivedStateFromProps(props, state) {
		return { rate: props.rate };
	}

	calcRate = (e) => {
		e.preventDefault();
		let elements = e.target.elements

		let coutCurrency = elements['cout-currency'].value;
		let typeCurrency = elements['type-currency'].value;

		this.setState({ result: (coutCurrency / this.state.rate[typeCurrency]) });
	}

  render() {
    return(
			<div>
				<h3> Калькулятор обмена</h3>
				<div className="block">
					<div>Я хочу продать</div>
					<div>
						<form onSubmit={this.calcRate}>
						<input type="number" defaultValue="150" name='cout-currency'/>
						<select name="type-currency" >
						{Object.keys(this.props.rate).map(elem => 
							(<option key={elem} value={elem}>{elem}</option>)
						)}
						</select>
						<input type='submit' value='calc'/>
						</form>
					</div>
					<div>
						<ul className="calc-res">
							<li>Вы получите:</li>
							<li>EUR {this.state.result.toFixed(2)}</li>
						</ul>
					</div>
				</div>
			</div>
    );
  }
}
export default Calc;
