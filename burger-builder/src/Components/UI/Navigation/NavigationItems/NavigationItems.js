import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link ="/" active>BURGER BUILDER</NavigationItem>
        <NavigationItem link ="/" >CHECK OUT!</NavigationItem>
    </ul>
);

export default NavigationItems;