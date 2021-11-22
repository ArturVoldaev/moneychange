import React from 'react'
import './Error.css';



class Error extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
  	};
	}

  render() {
    return(
			<div> 
				<h2>Тут ничего не нашлось, попробуйте перейте на следующую страницу в меню</h2>
			</div>
    );
  }
}
export default Error;
