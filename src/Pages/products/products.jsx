import React, { useState } from 'react';
import "./products.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ProductsRows } from "../../dummyData";
import { Link, Outlet } from "react-router-dom";

 export default function Products() {
   const[data,setData]=useState(ProductsRows);
   const handelDelete=(id)=>{
     setData(data.filter((item)=>item !==id));
   };
   const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{ field: "name", headerName: "Product Name", width: 130 },
		{
			field: "imge",
			headerName: "Product Image",
			width: 170,
			renderCell: (params) => {
				return (
					<div className="userImgContainer">
						<img className="userImg" src={params.row.imge} alt="" />
						{params.row.username}
					</div>
				);
			},
		},
		{ field: "stock", headerName: "Stock", width: 150 },
		{ field: "Price", headerName: "Price", width: 130 },
		{
			field: "status",
			headerName: "Status",
			width: 130,
			renderCell: (params) => {
				return (
					<>
						<Link to={`/products/${params.row.id}`}>
							<button className="userListedit">Edit</button>
						</Link>
						<DeleteOutlineIcon onClick={() => handelDelete(params.row.id)} />
						<Outlet />
					</>
				);
			},
		},
	];

  return (<div className='products'>
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
  </div>);
}
