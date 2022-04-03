import React, { useState } from "react";
import "./userlist.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Userrows } from "../../dummyData";
import { Link, Outlet } from "react-router-dom";

export default function UserList() {
	const [data, setdata] = useState(Userrows);
	const handelDelete = (id) => {
		setdata(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{ field: "username", headerName: "User name", width: 130 },
		{
			field: "avatar",
			headerName: "User",
			width: 170,
			renderCell: (params) => {
				return (
					<div className="userImgContainer">
						<img className="userImg" src={params.row.avatar} alt="" />
						{params.row.username}
					</div>
				);
			},
		},
		{ field: "email", headerName: "Email", width: 150 },
		{ field: "tranjection", headerName: "Tranjection", width: 130 },
		{
			field: "action",
			headerName: "Action",
			width: 130,
			renderCell: (params) => {
				return (
					<>
						<Link to={`/user/${params.row.id}`}>
							<button className="userListedit">Edit</button>
						</Link>
						<DeleteOutlineIcon onClick={() => handelDelete(params.row.id)} />
						<Outlet />
					</>
				);
			},
		},
	];

	return (
		<div className="userList">
			<div className="dataTable">
				<DataGrid
					rows={data}
					columns={columns}
					pageSize={10}
					rowsPerPageOptions={[10]}
					checkboxSelection
					disableSelectionOnClick
				/>
			</div>
		</div>
	);
}
