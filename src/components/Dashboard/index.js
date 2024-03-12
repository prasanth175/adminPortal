import React from "react";
import { Component } from 'react';
import "./index.css"
import SideNavbar from "../SideNavbar"
class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard-container">
            <SideNavbar />
            <div className="dashboard-sub-container">
                <h1 className="dashboard-heading">Dashboard Overview</h1>
                <ul className="dashboard-cards">
                    <li className="card card-1">
                        <p className="card-heading">Total Products</p>
                        <p className="total-count">150</p>
                    </li>
                    <li className="card card-2">
                        <p className="card-heading">Orders Today</p>
                        <p className="total-count">150</p>
                    </li>
                    <li className="card card-3">
                        <p className="card-heading">Pending Shipments</p>
                        <p className="total-count">150</p>
                    </li>
                </ul>
                <div className="products-management">
                    <div className="heading-and-button-container">
                        <h1 className="products-heading">Products Management</h1>
                        <button className="add-product-btn">Add New Product</button>
                    </div>
                   
                    <table className="products-table">
                        <thead>
                        <tr>
                            <th className="table-header">PRODUCT NAME</th>
                            <th className="table-header">CATEGORY</th>
                            <th className="table-header">PRICE</th>
                            <th className="table-header">STOCK</th>
                            <th className="table-header">ACTIONS</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Product 1</td>
                            <td>Category A</td>
                            <td>$100.00</td>
                            <td>20</td>
                            <td>{/* Edit/Delete buttons can go here */}</td>
                        </tr>
                        {/* Add more table rows here for other products */}
                        </tbody>
                    </table>
                    </div>
            </div>
            </div>
                
        )
    }
}

export default Dashboard