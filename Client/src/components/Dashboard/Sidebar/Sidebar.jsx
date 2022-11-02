import "./sidebar.css"
import {LineStyle, Timeline, TrendingUp, Person,
     Storefront, Paid, Assessment, Mail,
     Message, Feedback, Report, ManageAccounts,
     } from "@mui/icons-material"
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                    <NavLink to="/dashboard">
                        <LineStyle className="sidebarIcon"/>
                        Home
                    </NavLink>
                    </li>
                    {/* <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li> */}
                    {/* <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                    </li> */}
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle"> Menú rápido </h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                    <NavLink to="/dashboard/users">
                        <Person className="sidebarIcon"/>
                        Users
                    </NavLink>
                    </li>
                    <li className="sidebarListItem">
                    <NavLink to="/dashboard/products">
                        <Storefront className="sidebarIcon"/>
                        Products
                        </NavLink>
                    </li>
                    {/* <li className="sidebarListItem">
                        <Paid className="sidebarIcon"/>
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <Assessment className="sidebarIcon"/>
                        Reports
                    </li> */}
                </ul>
            </div>
            {/* <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notificaciones</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Mail className="sidebarIcon"/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <Feedback className="sidebarIcon"/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <Message className="sidebarIcon"/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Personal</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <ManageAccounts className="sidebarIcon"/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <Report className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div> */}
        </div>
    </div>
    
  )
}
