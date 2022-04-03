import React from "react";
import "./widgetLg.css";
export default function WidgetLg() {
	const Button=({type})=>{
  return<button className={"widgetLg"+type}>{type}</button>
    }
    
    return (
		<div className="widgetLg">
			<h3 className="widgetLgTitle">Latest Transaction</h3>
			<table className="widgetLgTable">
				<tr className="widgetLgTr">
					<th className="widgetLgTh">Customer</th>
					<th className="widgetLgTh">Data</th>
					<th className="widgetLgTh">Amount</th>
					<th className="widgetLgTh">Status</th>
				</tr>
				<tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://1.bp.blogspot.com/-0ZUMPsBahSo/X0vuBttwtWI/AAAAAAAAdwM/_0Nuxi-PWUsgTsLdAmGZqILPiJf7N2bdACLcBGAsYHQ/s1600/best%2Bdp%2Bfor%2Bwhatsapp%2B%25281%2529.jpg"
							alt=""
							className="widgetLgImg"
						/>
					<span className="widgetLgName">Susan Carol</span>
                    </td>
					<td className="widgetLgDate">3 jun 2021</td>
					<td className="widgetLgAmount">$122.00</td>
					<td className="widgetLgStatus"><Button type="Approved"/> </td>
				</tr>
                <tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://1.bp.blogspot.com/-0ZUMPsBahSo/X0vuBttwtWI/AAAAAAAAdwM/_0Nuxi-PWUsgTsLdAmGZqILPiJf7N2bdACLcBGAsYHQ/s1600/best%2Bdp%2Bfor%2Bwhatsapp%2B%25281%2529.jpg"
							alt=""
							className="widgetLgImg"
						/>
					<span className="widgetLgName">Susan Carol</span>
                    </td>
					<td className="widgetLgDate">3 jun 2021</td>
					<td className="widgetLgAmount">$122.00</td>
					<td className="widgetLgStatus"><Button type="Approved"/> </td>
				</tr><tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://1.bp.blogspot.com/-0ZUMPsBahSo/X0vuBttwtWI/AAAAAAAAdwM/_0Nuxi-PWUsgTsLdAmGZqILPiJf7N2bdACLcBGAsYHQ/s1600/best%2Bdp%2Bfor%2Bwhatsapp%2B%25281%2529.jpg"
							alt=""
							className="widgetLgImg"
						/>
					<span className="widgetLgName">Susan Carol</span>
                    </td>
					<td className="widgetLgDate">3 jun 2021</td>
					<td className="widgetLgAmount">$122.00</td>
					<td className="widgetLgStatus"><Button type="Approved"/> </td>
				</tr><tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://1.bp.blogspot.com/-0ZUMPsBahSo/X0vuBttwtWI/AAAAAAAAdwM/_0Nuxi-PWUsgTsLdAmGZqILPiJf7N2bdACLcBGAsYHQ/s1600/best%2Bdp%2Bfor%2Bwhatsapp%2B%25281%2529.jpg"
							alt=""
							className="widgetLgImg"
						/>
					<span className="widgetLgName">Susan Carol</span>
                    </td>
					<td className="widgetLgDate">3 jun 2021</td>
					<td className="widgetLgAmount">$122.00</td>
					<td className="widgetLgStatus"><Button type="Approved"/> </td>
				</tr><tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://1.bp.blogspot.com/-0ZUMPsBahSo/X0vuBttwtWI/AAAAAAAAdwM/_0Nuxi-PWUsgTsLdAmGZqILPiJf7N2bdACLcBGAsYHQ/s1600/best%2Bdp%2Bfor%2Bwhatsapp%2B%25281%2529.jpg"
							alt=""
							className="widgetLgImg"
						/>
					<span className="widgetLgName">Susan Carol</span>
                    </td>
					<td className="widgetLgDate">3 jun 2021</td>
					<td className="widgetLgAmount">$122.00</td>
					<td className="widgetLgStatus"><Button type="Approved"/> </td>
				</tr><tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://1.bp.blogspot.com/-0ZUMPsBahSo/X0vuBttwtWI/AAAAAAAAdwM/_0Nuxi-PWUsgTsLdAmGZqILPiJf7N2bdACLcBGAsYHQ/s1600/best%2Bdp%2Bfor%2Bwhatsapp%2B%25281%2529.jpg"
							alt=""
							className="widgetLgImg"
						/>
					<span className="widgetLgName">Susan Carol</span>
                    </td>
					<td className="widgetLgDate">3 jun 2021</td>
					<td className="widgetLgAmount">$122.00</td>
					<td className="widgetLgStatus"><Button type="Declined"/> </td>
				</tr><tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://1.bp.blogspot.com/-0ZUMPsBahSo/X0vuBttwtWI/AAAAAAAAdwM/_0Nuxi-PWUsgTsLdAmGZqILPiJf7N2bdACLcBGAsYHQ/s1600/best%2Bdp%2Bfor%2Bwhatsapp%2B%25281%2529.jpg"
							alt=""
							className="widgetLgImg"
						/>
					<span className="widgetLgName">Susan Carol</span>
                    </td>
					<td className="widgetLgDate">3 jun 2021</td>
					<td className="widgetLgAmount">$122.00</td>
					<td className="widgetLgStatus"><Button type="Panding"/> </td>
				</tr>
			</table>
		</div>
	);
}
