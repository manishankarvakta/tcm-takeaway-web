import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    {/* <h2 className='text-2xl font-bold text-black'>Welcome to your Dashboard</h2> */}
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-neutral text-amber-400">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard">Personal Info</Link></li>
                        <li><Link to="/dashboard/updatepersonalinfo"><p className='text-left'>Update Personal Info</p></Link></li>
                        <li><Link to="/dashboard/perivousorders">Previous Orders</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;