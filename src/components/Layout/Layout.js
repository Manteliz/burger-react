import React, { Component } from 'react'
import classes from './Layout.css'
import Toolbar from '../UI/Navigation/Toolbar/Toolbar'
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showingSideDrawer: false
    }

    toggleSideDrawer = () => this.setState( prevState => {
        return({showingSideDrawer: !prevState.showingSideDrawer})
        })

    render() {
        return(
            <React.Fragment>
                <Toolbar toggleMenu={this.toggleSideDrawer}/>
                <SideDrawer show={this.state.showingSideDrawer} closeHandler={this.toggleSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout