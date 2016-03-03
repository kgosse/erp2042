/**
 * Created by kevin on 03/03/2016.
 */

import React from 'react';

class Main extends React.Component {
    render(){
        return (
            <div>
                <h1>Main Component !</h1>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
};

export default Main;
