import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../Components/UI/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/UI/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: false, 
        }
    }

    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer: false});
    }

    toggleSideDrawerHandler = () => {
        this.setState((prevState) => {
          return {showSideDrawer: !prevState.showSideDrawer}
        });
    }



    render() {
      return (
        <Aux>
          <Toolbar sideDrawerOpened={this.toggleSideDrawerHandler} />
          <SideDrawer
            show={this.state.showSideDrawer}
            closed={this.closeSideDrawerHandler}
          />
          <main className={classes.Content}>{this.props.children}</main>
        </Aux>
      );
    }
}

export default Layout;