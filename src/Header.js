import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="HeaderWrapper">
                <h1 id="app-title">Markdown Previewer</h1>
                <span id="credit">by <a id="credit-name" href="https://www.linkedin.com/in/nicolas-poore/" target="_blank" rel="noopener noreferrer">Nicolás Poore</a></span>
            </div>
        )
    }
}

export default Header;