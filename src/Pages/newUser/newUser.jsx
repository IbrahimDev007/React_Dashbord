import React from "react";
import "./newUser.css";
export default function NewUser() {
	return (
		<div className="newUser">
			<h1 className="newuserTitle">New user</h1>
			<form action="" className="newuserForm">
				<div className="newUserItem">
					<label>Username</label>
					<input type="text" name="" id="" placeholder="john" />
				</div>
				<div className="newUserItem">
					<label>Full Name</label>
					<input type="text" name="" id="" placeholder="john Sena" />
				</div>
				<div className="newUserItem">
					<label>Email</label>
					<input type="Email" name="" id="" placeholder="john@mail.com" />
				</div>
				<div className="newUserItem">
					<label>Password</label>
					<input type="password" name="" id="" />
				</div>
				<div className="newUserItem">
					<label>Phone</label>
					<input type="phone" name="" id="" placeholder="john@mail.com" />
				</div>
				<div className="newUserItem">
					<label>Adress</label>
					<input type="Text" name="" id="" placeholder="Newyork||U.S.A" />
				</div>
				<div className="newUserItem">
					<label>Gender</label>
					<div className="newUserGender">
						<input type="radio" name="gender" id="male" value={"male"} />
						<label For="male">male</label>
						<input type="radio" name="gender" id="femmale" value={"female"} />
						<label For="female">female</label>
						<input type="radio" name="gender" id="other" value={"other"} />
						<label For="other">other</label>
					</div>
				</div>
				<div className="newUserItem">
					<label>Active</label>
					<select name="Gender" id="" className="newUserSelect">
						<option value="yes">yes</option>
						<option value="No">No</option>
					</select>
				</div>
            
			</form>
			<button className="newUserButton">create</button>
		</div>
	);
}
