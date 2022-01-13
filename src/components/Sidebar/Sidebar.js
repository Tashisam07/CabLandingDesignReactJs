import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import "./Sidebar.css";
import SidebarItem from "./component/SidebarItem";

function Sidebar() {
	return (
		<div className="sidebar_container">
			<img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png" alt='logo'/>
			<MenuIcon
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					fontSize: '40px',
					rotate: '90deg'
				}}
			/>
			<div className="sidebar_items">
				<SidebarItem Icon={HomeIcon} title='Home'/>
				<SidebarItem Icon={LocationOnIcon} title='Recent'/>
				<SidebarItem Icon={PersonIcon} title='Profile'/>
				<SidebarItem Icon={AccountBalanceWalletIcon} title='Wallet'/>
			</div>
		</div>
	);
}

export default Sidebar;
