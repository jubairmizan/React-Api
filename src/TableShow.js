import React from 'react';

const TableShow = (props) => {
	
	function timeConverter(UNIX_timestamp){
	  var a = new Date(UNIX_timestamp * 1000);
	  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	  var year = a.getFullYear();
	  var month = months[a.getMonth()];
	  var date = a.getDate();
	  var hour = a.getHours();
	  var min = a.getMinutes();
	  var sec = a.getSeconds();
	  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
	  // return time;
	  return UNIX_timestamp;
	}

	const rowsData = props.tableData.map((rowData,index)=>{
		return <tr key={index}>
					<td>{index+1}</td>
					<td>{rowData.title}</td>
					<td><a href={rowData.url} target="_blank">{rowData.url}</a></td>
					<td>{rowData.author}</td>
					<td>{rowData.points}</td>
					<td>{rowData.num_comments}</td>
					<td>{ timeConverter(rowData.created_at) }</td>
				</tr>;
	});

	return (
		<div className="table-responsive">
			<table className="table table-bordered table-hover">
				<thead>
					<tr>
						<th>Sl</th>
						<th>Title</th>
						<th>Url</th>
						<th>Author</th>
						<th>Points</th>
						<th>Number of comments</th>
						<th>Created At</th>
					</tr>
				</thead>
				<tbody>
					{rowsData}
				</tbody>
			</table>
		</div> 
	);
}

export default TableShow;