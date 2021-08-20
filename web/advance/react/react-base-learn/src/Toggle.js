import React from 'react';
import './index.css'

export default class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: false
        }
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        this.setState({
            isOn: !this.state.isOn
        })
    }

    render() {
        return (
            <div className="toggle-button" onClick={this.toggle}>{this.state.isOn?"开":"关"}</div>
        )
    }
}