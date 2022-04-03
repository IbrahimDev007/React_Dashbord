import React from "react";
import {
	NavLink,
	Outlet,
	useLocation,
	useSearchParams,
    Link
} from "react-router-dom";

import { getInvoices } from "../data";
export default function Invoices() {
	let invoices = getInvoices();
	let [searchParams, setSearchParams] = useSearchParams();
	function QueryNavLink({ to, ...props }) {
		let location = useLocation();
		return <NavLink to={to + location.search} {...props}></NavLink>;
	}
    function BrandLink({ brand, ...props }) {
        let [params] = useSearchParams();
        let isActive = params.getAll("brand").includes(brand);
        return (
          <Link
            style={{ color: isActive ? "red" : "" }}
            to={`/shoes?brand=${brand}`}
            {...props}
          > {console.log(brand)}</Link>
        );
      }
	return (
		<div style={{ display: "flex" }}>
			<nav
				style={{
					borderRight: "solid 1px",
					padding: "1rem",
				}}
			>
				{" "}
				<input
					value={searchParams.get("filter") || ""}
					onChange={(event) => {
						let filter = event.target.value;
						if (filter) {
							setSearchParams({ filter });
						} else {
							setSearchParams({});
						}
					}}
				/>
				{invoices
					.filter((invoice) => {
						let filter = searchParams.get("filter");
						if (!filter) return true;
						let name = invoice.name.toLowerCase();
						return name.match(filter.toLowerCase());
					})
					.map((invoice) => (
						<NavLink
							style={({ isActive }) => {
								return {
									display: "block",
									margin: "1rem 0",
									color: isActive ? "red" : "",
								};
							}}
							to={`/invoices/${invoice.number}`}
							key={invoice.number}
						>
							{invoice.name}
						</NavLink>
					))}
			<BrandLink/>	
			</nav>
			<Outlet />
		</div>
	);
}
