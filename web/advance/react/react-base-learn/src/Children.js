import React from 'react';

export default class Children extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>This is a test from props.children: {this.props.children}</div>
        )
    }
}