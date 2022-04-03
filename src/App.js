import React from "react";
import Slidebar from "./components/Slidebar";
import Topbar from "./components/Topbar";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./Pages/UserList/UserList";
import User from "./Pages/User/User";
import NewUser from "./Pages/newUser/newUser";
import Products from "./Pages/products/products";
import Product from "./Pages/Product/Product";
// import { Link, Outlet } from "react-router-dom";

function App() {
	return (
		<div>
			{/* <h1>Bookkeeper</h1>
			<nav
				style={{
					borderBottom: "solid 1px",
					paddingBottom: "1rem",
				}}
			>
				<Link to="/invoices">Invoices</Link> |{" "}
				<Link to="/expenses">Expenses</Link> |{" "}
				
			</nav>

			<Outlet /> */}
			<BrowserRouter>
				<Topbar />
				<div className="container-sliddebar">
					<Slidebar />

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="Slidebar" element={<Slidebar />} />
						<Route path="users" element={<UserList />} />
						<Route path="user/:userId" element={<User />} />
                        <Route path="newUser" element={<NewUser />} />
						<Route path="products" element={<Products />} />
						<Route path="products/:productsId" element={<Product />} />
                        <Route path="newproducts" element={<NewUser />} />
						<Route
							path="*"
							element={
								<main style={{ padding: "1rem" }}>
									<p>There's nothing here!</p>
								</main>
							}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
