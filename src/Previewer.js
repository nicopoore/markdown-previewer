import React from 'react';
import { connect } from 'react-redux';

const marked = require('marked')

marked.setOptions({
    breaks: true
})

class Previewer extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return(
            <div id="PreviewerWrapper" class="main-div">
                <div className="main-div-header">
                <h3>Preview</h3>
                </div>
                <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.props.input)}}>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    input: state.input
})

export default connect(mapStateToProps)(Previewer);