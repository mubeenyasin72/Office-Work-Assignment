import React, { Component } from 'react';
import CombineComponents from './Components/combineComponents';
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {  };
  // }
  render() {
    return (
      <React.Fragment>
        <div>
            <CombineComponents/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;