import React from "react";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import GradingIcon from "@mui/icons-material/Grading";
import "./Sldebar.css";
import { Link} from "react-router-dom"
import ReportIcon from "@mui/icons-material/Report";
import StorefrontIcon from "@mui/icons-material/Storefront";
export default function Slidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<div className="sidebarTitle">Dashboard</div>
					<ul className="side-list">
						<li className="sidelist-item active ">
							< Link to="/">
							<LineStyleIcon />
							Home
							</Link>
						</li>
						<li className="sidelist-item">
							{" "}
							<TimelineIcon />
							Analytics
						</li>
						<li className="sidelist-item">
							{" "}
							<TrendingUpIcon />
							sales
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<div className="sidebarTitle">Quick Menu</div>
					<ul className="side-list">
						<li className="sidelist-item ">
							
							<Link to="/users" >User
							<AccountCircleIcon /></Link>
					        
						</li>
						<li className="sidelist-item">
							<Link to="/products">
							{" "}
							<BusinessCenterIcon />
							Products
							</Link>
						</li>
						
						<li className="sidelist-item">
							{" "}
							<AttachMoneyIcon />
							Transaction
						</li>
						<li className="sidelist-item">
							{" "}
							<BarChartIcon />
							Reports
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<div className="sidebarTitle">Notification</div>
					<ul className="side-list">
						<li className="sidelist-item ">
							<EmailIcon />
							Mail
						</li>
						<li className="sidelist-item">
							{" "}
							<GradingIcon />
							Feedback
						</li>
						<li className="sidelist-item">
							{" "}
							<SendIcon />
							Message
						</li>
					</ul>
					<div className="sidebarTitle">staff</div>
					<ul className="side-list">
						<li className="sidelist-item ">
							<StorefrontIcon />
							Manage
						</li>
						<li className="sidelist-item">
							{" "}
							<TimelineIcon />
							Analytics
						</li>
						<li className="sidelist-item">
							{" "}
							<ReportIcon />
							Report
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
