import React, {Component} from 'react';
import Counter from "./components/counter";

class App extends Component {

  state = {
    numberCounters: 0,
    arr: [],
  };

  addCounter() {
    this.setState({numberCounters: this.state.numberCounters +1});
    this.state.arr.push(<Counter/>);
  };

  deleteCounter(index) {
    this.setState(this.state.arr.splice(index, 1));
    console.log(this.state.arr);
  }
  render() {
    return (
        <>
          <button onClick={this.addCounter.bind(this)}>Add counter</button>
          {this.state.arr.map((item, index) => {
            return <div key={index}>{item}<button onClick={this.deleteCounter.bind(this, index)}>Delete counter</button></div>
          })}

        </>
    )
  }
}

export default App;
