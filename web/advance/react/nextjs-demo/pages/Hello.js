import React from 'react';
import Link from 'next/link'

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const name = this.props.name;
        return (
            <>
                <div>HELLO, {name}</div>
                <Link href='/about'>
                    <a>🚀go to about🚀</a>
                </Link>
            </>
        )
    }
}