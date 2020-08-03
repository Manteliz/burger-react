import React from 'react'
import Logo from '../../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Backdrop from '../../Backdrop/Backdrop'

const sideDrawer = props => {
    let attachedClasses
    attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.show) attachedClasses = [classes.SideDrawer, classes.Open]
    
    return(
        <React.Fragment>
            <Backdrop show={props.show} cancel={props.closeHandler} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    )
}

export default sideDrawer