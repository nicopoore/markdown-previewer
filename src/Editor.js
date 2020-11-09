import React from 'react';
import { connect } from 'react-redux';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.dispatch({
            type: 'UPDATE',
            input: event.target.value,
        })}

    render() {
        return(
            <div id="EditorWrapper" class="main-div">
                <div className="main-div-header">
                <h3>Editor</h3>
                </div>
                <textarea 
                id="editor"
                value={this.props.input} 
                onChange={this.handleChange.bind(this)}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    input: state.input
})

export default connect(mapStateToProps)(Editor);