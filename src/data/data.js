import React from 'react';
import { FaHome, FaClipboardList, FaUser, FaBox, FaChartLine, FaSignOutAlt,FaSignInAlt,FaCommentAlt } from 'react-icons/fa';
import './data.css'
const sidebarData = [
    {
        icon: <FaSignInAlt />,
        heading:""
        
    },
    {
        icon: <FaHome />,
        heading: "Home"
    },
    {
        icon: <FaUser />,
        heading: "Profile"
    },
    {
        icon: <FaChartLine />,
        heading: "Analytics"
    },
    {
        icon: <FaClipboardList />,
        heading: "Tasks"
    }
    ,
    {
        icon: <FaCommentAlt />,
        heading: "ChatBox"
    },
    {
        icon: <FaBox />,
        heading: "Inventory"
    },
    {
        icon: <FaSignOutAlt />,
        heading: "Logout"
    }
];

const Sidebar = () => {
    return (
        <div className="sidebar">
            {sidebarData.map((item, index) => (
                <div key={index} className="sidebar-item flex items-center p-2">
                    <div className="icon text-2xl mr-2">{item.icon}</div>
                    <div className="heading text-lg">{item.heading}</div>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
