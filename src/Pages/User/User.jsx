import React from "react";
import "./User.css";
import PersonIcon from "@mui/icons-material/Person";
import LocationSearchingOutlined from "@mui/icons-material/LocationSearchingOutlined";
import CalendarToday from "@mui/icons-material/CalendarToday";
import MailOutlined from "@mui/icons-material/MailOutlined";
import PhoneAndroidOutlined from "@mui/icons-material/PhoneAndroidOutlined";
import { Publish } from "@mui/icons-material";

export default function User() {
	return (
		<div className="user">
			<div className="userContainer">
				<h1 className="userTitle">Edit User</h1>
				<button className="userAddButton">Create</button>
			</div>
			<div className="userContainer">
				<div className="userShow">
					<div className="userShowTop">
						<img
							src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
							alt=""
							className="userShowImg"
						/>

						<div className="ShowTopTitle">
							<span className="userShowUsername">James bond</span>
							<span className="userShowTittle">Softwer Enginear </span>
						</div>
					</div>
					<div className="userShowBottom">
                    <span className="userShowTitle">Account Details:</span>
						<div className="userShowInfo">
							
							<PersonIcon classname="UserIcon" />
							<span className="showInfoTitle">JamesBond99</span>
						</div>
						<div className="userShowInfo">
							<CalendarToday classname="UserIcon" />
							<span className="showInfoTitle">10/12/1996</span>
						</div>
						<div className="userShowInfo">
							<PhoneAndroidOutlined classname="UserIcon" />
							<span className="showInfoTitle">+880 1727886667</span>
						</div>
						<div className="userShowInfo">
							<MailOutlined classname="UserIcon" />
							<span className="showInfoTitle">jamesbond@mail.com</span>
						</div>
						<div className="userShowInfo">
							<LocationSearchingOutlined classname="UserIcon" />
							<span className="showInfoTitle">Newyork||U.S.A </span>
						</div>
						<div className="userShowInfo">
							<PersonIcon classname="UserIcon" />
							<span className="showInfoTitle">JamesBond99</span>
						</div>
					</div>
				</div>
				<div className="userUpdate">
                    <span className="userUpdateTitle">Edit:</span>
                    <form action="" className="userUpdateForm">
                        <div className="userupdateleft">
                           <div className="useUpdateitem">
                               <label >Username:</label>
                               <input type="text" name="" id="" className ="UserupdateInput"placeholder="jamesbond" />
                           </div>
                           <div className="useUpdateitem">
                               <label >FullName:</label>
                               <input type="text" name="" id="" className ="UserupdateInput"placeholder="jamesbond" />
                           </div>
                           <div className="useUpdateitem">
                               <label >Phone:</label>
                               <input type="text" name="" id="" className ="UserupdateInput"placeholder="+880 1727886667" />
                           </div>
                           <div className="useUpdateitem">
                               <label >Email:</label>
                               <input type="text" name="" id="" className ="UserupdateInput"placeholder="jamesbond@mail.com " />
                           </div>
                           <div className="useUpdateitem">
                               <label >Adress:</label>
                               <input type="text" name="" id="" className ="UserupdateInput"placeholder="Newyork||U.S.A" />
                           </div>
                        </div>
                        <div className="userupdateRight">
							<div className="updateUpload">
								<img src="https://hollywoodneuz.net/wp-content/uploads/2013/03/Zac-Efron-1.jpg" alt="" className="updateImg" />
							<label htmlFor="file">
								<Publish/>
								</label>
								<input type="file" name="" id="" style={{display:"none"}} />	
							</div>
							<button className="userUpdateButton">Update</button>	
						
						</div>
                    </form>
                </div>
			</div>
		</div>
	);
}
