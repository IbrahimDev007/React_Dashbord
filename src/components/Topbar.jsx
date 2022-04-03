 import React from "react";
import "../components/Topbar.css";
import SettingsApplicationsTwoToneIcon from '@mui/icons-material/SettingsApplicationsTwoTone';
import CircleNotificationsTwoToneIcon from '@mui/icons-material/CircleNotificationsTwoTone';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
export default function Topbar() {
	return (
		<div className="topbar">
			<div className="topwrapper">
				<div className="topleft">
					<span className="logo">0.0</span>
				</div>
				<div className="topright">
					<div className="topbar-Icons-container">
						<div className="topbar-icon">
							<CircleNotificationsTwoToneIcon />
							<div className="topIcon-badge">2</div>
						</div>
						<div className="topbar-icon">
							<LanguageTwoToneIcon />
							<div className="topIcon-badge">2</div>
						</div>
						<div className="topbar-icon">
                            <SettingsApplicationsTwoToneIcon/>	
						</div>
                        <img src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?cs=srgb&dl=pexels-nitin-khajotia-1516680.jpg&fm=jpg" alt="" className="topAvatar" />
					</div>
				</div>
			</div>
		</div>
	);
}
