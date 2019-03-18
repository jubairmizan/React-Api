import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TableShow from './TableShow';

class Index extends React.Component{
	state = {apiData:[]};

	apiLoad = async () =>{
		const response = await axios.get('https://hn.algolia.com/api/v1/search');
		
		// const response = await axios.get('http://globe.farmersmarket.asia/api/test');
		/*
			Once you try to get any api response from a domain you have to pass a code on .htaccess by api domain


		    <IfModule mod_headers.c>
		    	Header set Access-Control-Allow-Origin "*"
		    </IfModule>

		    After put the code on api .htaccess file then you are go to able the response   
		*/
		



		// console.log('Response Data will load here '+ JSON.stringify(response.data.hits));
		
		console.log(response);
		return false;
		this.setState({apiData:response.data.hits});
	}
	apiReset = async () =>{
		this.setState({apiData:[]});
	}

	render(){
		let tableLength;
		let tableShow;

		if(this.state.apiData.length>0){
			tableLength = <p style={{ marginTop:'20px' }}>Data Found : {this.state.apiData.length}</p>;
			
			tableShow = <TableShow tableData={this.state.apiData} />;
		}else{
			tableLength = <p style={{ marginTop:'20px' }}> No Data Found </p>;
		}

		return(
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<p>Click the button and see the api lists of table</p>

						<button className="btn btn-info" onClick={this.apiLoad}>Click to get Api Data</button>
						<button className="btn btn-warning" style={{ marginLeft:'10px' }} onClick={this.apiReset}>Reset</button>
					</div>

					<div className="col-md-12">
						{tableLength}
						{tableShow}
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Index />, document.querySelector('#root'));
