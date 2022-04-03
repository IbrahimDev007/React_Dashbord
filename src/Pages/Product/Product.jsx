import React from 'react';
import './product.css';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import {ProductData} from "../../dummyData";
export default function Product() {
  return (
    <div className='product'>
        <div className="producttitleContainear">
            <h1 className="productTitle">Product</h1>
            <Link to="/newproducts">
                <button className='productButton' >create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
               <Chart data={ProductData} datakey="Sales" className="chart"title={'Sales Performance'}/> 
           
            </div>
            <div className="productTopRight">
            <div className="productInfoTop">
                <img  src="https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="productImage" />
                <span className="productname">Apple Airpod</span>
            </div>
            <div className="productInfoBottom">
               <div className="productInfoItem">
                <span className="productInfokey">Id:</span>
                <span className="productInfoValue">123</span>
                </div>
                <div className="productInfoItem">
                <span className="productInfokey">Sales:</span>
                <span className="productInfoValue">$123</span>
                </div>
                <div className="productInfoItem">
                <span className="productInfokey">Id:</span>
                <span className="productInfoValue">123</span>
                </div>
                <div className="productInfoItem">
                <span className="productInfokey">Active:</span>
                <span className="productInfoValue">Yes</span>
                </div>
                <div className="productInfoItem">
                <span className="productInfokey">In Stock:</span>
                <span className="productInfoValue">45</span>
                </div>
                
            </div>
            </div>
        </div>
        <div className="productBottom">
            
        </div>
    </div>
  )
}
