import React from 'react';
import classes from './Logo.module.css';
import logo from '../../assets/images/logo/burger.svg';


const Logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={logo} alt="Burger Builder co logo." />
    </div>
);

export default Logo;

