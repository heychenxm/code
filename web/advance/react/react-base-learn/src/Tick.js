import React from 'react';


// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   // highlight-next-line
//   ReactDOM.render(element, document.getElementById('tick'));
// }

// setInterval(tick, 1000);

class Tick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick();
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <div>{this.state.date.toLocaleTimeString()}</div>
        )
    }
}

export default Tick;