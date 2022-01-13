import React from 'react';
import './SidebarItem.css';

function SidebarItem({Icon, title}) {
    return (
        <div className='sidebar_item'>
            <div className="icon_container">
                {Icon && <Icon/>}
             </div>
            <span className='logo_title'>{title}</span>
        </div>
    )
}

export default SidebarItem
