import React from 'react';

const TableShow = (props) => {
	const rowsData = props.tableData.map((rowData,index)=>{
		return <tr key={index}>
					<td>{index+1}</td>
					<td>{rowData.title}</td>
					<td>{rowData.url}</td>
					<td>{rowData.author}</td>
					<td>{rowData.points}</td>
					<td>{rowData.num_comments}</td>
					<td>{rowData.created_at}</td>
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