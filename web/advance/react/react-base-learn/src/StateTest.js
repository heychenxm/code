import React from 'react'

export default class StateTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: props.num
        }
        // this.setNum = this.setNum.bind(this);       // 需要进行绑定使用
    }
    // setNum() {
    //     this.setState({
    //         num: "hello world"
    //     })
    // }
    setNum = (e) => {
        // SyntheticBaseEvent 合成基事件
        console.log('%c 🥤 e: ', 'font-size:12px;background-color: #42b983;color:#fff;', e);
        this.setState({
            num: "HELLO WORLD"
        })
    }
    render() {
        return (
            <div onClick={this.setNum}>{this.state.num}</div>
            // <div onClick={this.setNum.bind(this)}>{this.state.num}</div>
        )
    }
}