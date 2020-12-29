import React from 'react';
import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    <div
      className={[classes.DrawerToggle, props.mobileOnly].join(' ')}
      onClick={props.sideDrawerOpened}
    >
        <div></div>
        <div></div>
        <div></div>

    
      
    </div>
);

export default drawerToggle;