import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings } from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className="topbar">
           <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Drinks</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMCQUM5eLopvVCoFNELLU8U6Z-BG-3-pSjRduyf2iXe8W-06YkfQsne_aoisok3lVqt0&usqp=CAU" alt="" className="topAvatar" />
            </div>
           </div>
        </div>
    )
}