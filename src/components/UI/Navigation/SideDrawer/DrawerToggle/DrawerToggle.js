import React from 'react'
import classes from './DrawerToggle.css'

const drawerToggle = props => <div className={classes.MobileOnly} onClick={props.toggleMenu}>MENU</div>

export default drawerToggle
