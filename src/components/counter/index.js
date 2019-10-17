import React, {Component} from 'react';

class Counter extends Component {

    state = {
        increment: 0,
    };

     handleClick()  {
        this.setState({increment: this.state.increment +1})
    };

    render() {
        return (
            <>
                Current number: {this.state.increment}
                <button onClick={this.handleClick.bind(this)}>Increase number</button>
            </>
        );
    }
}

export default Counter;
