import React from "react";
import Chart from "../components/chart/Chart";
import { UserData } from "../dummyData";
import FeturedInfo from "../components/FeturedInfo";
import "./home.css";
import WidgetSm from "../components/widgetSm/widgetSm";
import WidgetLg from "../components/widgetLg/widgetLg";

export default function Home() {
	return (
		<div className="home">
			<FeturedInfo />
 <div className="chart1">
			<Chart
				data={UserData}
				title="User Analytics"
				grid
				datakey="Active User"
			/>
			</div>

			<div className="homwWidget">
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
}
