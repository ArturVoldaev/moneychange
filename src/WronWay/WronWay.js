import React from 'react'
import './WronWay.css';



class WronWay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
  	};
	}

  render() {
    return(
			<div> 
				<h2>Такая страница не найдена! Ошибка 404</h2>
			</div>
    );
  }
}
export default WronWay;
