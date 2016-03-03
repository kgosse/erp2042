/**
 * Created by kevin on 03/03/2016.
 */

import React from 'react';
import styleable from 'react-styleable';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

import LeftNav from 'material-ui/lib/left-nav';

import css from './Home.css';

@styleable(css)
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render(){
        return (
            <div>
                <AppBar
                    title="ERP2042"
                    onLeftIconButtonTouchTap={this.handleToggle}
                    iconElementRight={
                        <IconMenu
                            iconButtonElement={
                                <IconButton><MoreVertIcon /></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                        >
                            <MenuItem primaryText="Se déconnecter" />
                        </IconMenu>
                    }
                />

                <LeftNav
                    width={200}
                    docked={false}
                    open={this.state.open}
                    onRequestChange={this.handleToggle}
                >
                    <AppBar
                        title="Menu"
                        showMenuIconButton={false}
                    />
                    <MenuItem checked={true}>Accueil</MenuItem>
                    <MenuItem>Rapport</MenuItem>
                </LeftNav>
            </div>
        )
    }
}

Home.contexType = {
    router: React.PropTypes.object
};

export default Home;
