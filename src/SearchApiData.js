import React from 'react';

const SearchApiData = (props) => {	
	const apiData = JSON.parse(props.tableData);

	return (
		<div className="table-responsive">
			<table className="table table-bordered table-hover">
				<thead>
					<tr>
						<th>Sl</th>
						<th>Title</th>
						<th>Body</th>
						<th>User Id</th>
					</tr>
				</thead>
				<tbody>
					<tr key={apiData.id}>
						<td>1</td>
						<td>{apiData.title}</td>
						<td>{apiData.body}</td>
						<td>{apiData.userId}</td>
					</tr>
				</tbody>
			</table>
		</div> 
	);
}

export default SearchApiData;