import React from 'react'

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.listItems = this.listItems.bind(this)
    }
    listItems() {
        console.log(this.props.arrayList);
        return this.props.arrayList.map((item, index)=> <li key={index}>{item} -- {index}</li>)
    }
    otherItems = this.props.arrayList.map((item, index)=> <li key={index}>{item} -- {index}</li>)
    render() {
        return (
            <ul>
                {this.listItems()}
                {this.otherItems}
            </ul>
        )
    }
}

