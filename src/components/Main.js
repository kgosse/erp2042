/**
 * Created by kevin on 03/03/2016.
 */

import React from 'react';
import styleable from 'react-styleable';

import css from './Main.css';

@styleable(css)
class Main extends React.Component {
    render(){
        return (
            <div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
};

export default Main;
