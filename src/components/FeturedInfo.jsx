import React from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import "./fetureinfo.css";
export default function FeturedInfo() {
	return (
		<div className="fetureInfo">
			<div className="fetureditem">
				<div className="feturedTitle">Revenue</div>
				<div className="Moneycontainer">
					<span className="feturedeMone">$2,415</span>
					<span className="feturedeMoneRate">
						-11.4
						<KeyboardDoubleArrowDownIcon className="feturedicon nagative" />
					</span>
				</div>

				<div className="feturesub">Compare to last month</div>
			</div>
			<div className="fetureditem">
				<div className="feturedTitle">Sales</div>
				<div className="Moneycontainer">
					<span className="feturedeMone">$2,415</span>
					<span className="feturedeMoneRate">
						-1.4
						<KeyboardDoubleArrowDownIcon className="feturedicon nagative" />
					</span>
				</div>
				<div className="feturesub">Compare to last month </div>
			</div>
			<div className="fetureditem">
				<div className="feturedTitle">Cost</div>
				<div className="Moneycontainer">
					<span className="feturedeMone">$2,415</span>
					<span className="feturedeMoneRate">
						+2.4
						<ArrowCircleUpIcon className="feturedicon" />
					</span>
				</div>
				<div className="feturesub ">Compare to last month </div>
			</div>
		</div>
	);
}
