import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Index extends React.Component{
	constructor(props){
		super(props);

		axios.get('http://gonona-lab.com/api/api/topCardNews')
		.then(function (response) {
			// handle success
			console.log(response);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
		.then(function () {
			// always executed
		});


	}
	render(){
		return(
			<div className="container">
				<p>Lorem Ipsum Dolor Set Amet</p>
			</div>
		);
	}
}

ReactDOM.render(<Index />, document.querySelector('#root'));