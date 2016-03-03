/**
 * Created by kevin on 03/03/2016.
 */

import React from 'react';
import styleable from 'react-styleable';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';


import css from './Login.css';

@styleable(css)
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 1};
    }

    handleChange = (event, index, value) => this.setState({value});

    render(){
        return (
            <div className={this.props.css.root}>
                <div className={this.props.css.card}>
                    <h3>Choisissez un utilisateur</h3>
                    <div>
                        <SelectField value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={1} primaryText=""/>
                            <MenuItem value={2} primaryText="THIRION Guillaume"/>
                            <MenuItem value={3} primaryText="SUBRAMANIAM Vijaï"/>
                            <MenuItem value={4} primaryText="MORTIER Nicolas"/>
                            <MenuItem value={5} primaryText="CHARPENTIER Boris"/>
                        </SelectField>
                    </div>
                    <div className={this.props.css.button}>
                        <RaisedButton label="Se connecter" secondary={true}  />
                    </div>
                </div>
            </div>
        )
    }
};

export default Login;
