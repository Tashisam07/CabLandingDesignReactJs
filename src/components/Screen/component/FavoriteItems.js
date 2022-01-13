import React from 'react';
import './FavoriteItems.css';

function FavoriteItems({Icon, title, location}) {
    return (
        <div className='fav_container'>
            <div className="logo_container">
                {Icon && <Icon className='logo'/>}
             </div>
            <div className="info_container">
                <span className='title'>{title}</span>
                <span className='location_container'>{location}</span>
    
            </div> 
        </div>
    )
}

export default FavoriteItems
