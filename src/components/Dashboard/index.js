import React from "react";
import { Component } from 'react';
import "./index.css"
import SideNavbar from "../SideNavbar"
class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard-container">
            <SideNavbar />
            <div>
                <h1>Dashboard Overview</h1>
                <ul>
                    <li>
                        <p>Total Products</p>
                        <p>150</p>
                    </li>
                    <li>
                        <p>Orders Today</p>
                        <p>150</p>
                    </li>
                    <li>
                        <p>Pending Shipments</p>
                        <p>150</p>
                    </li>
                </ul>
                <div>
                    <h1>Products Managment</h1>
                </div>
            </div>
            </div>
                
        )
    }
}

export default Dashboard