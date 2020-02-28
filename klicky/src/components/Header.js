import React from 'react';
import Timer from './Timer'

class Header extends React.Component {

    render() {
        return (
            <div className="Header">
                <br />
                <br />
                Header goes here hello :)
                <br />
                <Timer />
                <br /><br />
            </div>
        );
    };
};
export default Header;