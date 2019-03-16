import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Index extends React.Component{
	constructor(props){
		super(props);

		axios.get('http://gonona-lab.com/api/api/topCardNews')
		.then(function (response) {
			// handle success
			console.log('rrr'+response);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
		.then(function () {
			// always executed
		});


	}

	async apiLoad(){
		const response = await axios.get('https://hn.algolia.com/api/v1/search');

		console.log('Response Data will load here '+ JSON.stringify(response.data.hits.length));
	}

	render(){
		return(
			<div className="container">
				<p>Lorem Ipsum Dolor Set Amet</p>

				<button onClick={this.apiLoad}>Click to get Api Data</button>
			</div>
		);
	}
}

ReactDOM.render(<Index />, document.querySelector('#root'));