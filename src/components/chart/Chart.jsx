import React from "react";
import "./chart.css";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

export default function Chart({ title, datakey, grid, data }) {
	return (
		<div className="chart" >
			<h3 className="chartTitle">{title}s</h3>
			<ResponsiveContainer width='100%'  aspect={7/1} >
				<LineChart
					width={300}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Line type="monotone" dataKey={datakey} stroke="#5550bd" />
					{grid && <CartesianGrid stroke="lightblue" strokeDasharray="5 5" />}
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
