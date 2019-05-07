import React, { Component } from 'react';

import Moment from './Moment';
import Scss from './Scss';
import CssFile from './CssFile';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      functionList: [<Moment />, <div/>, <div />, <div />, <Scss />, <CssFile />],
      functionNum: 5,
    }
  }

  pachageSelect = (num) => {
    this.setState({
      functionNum: num,
    });
  }

  render() {
    const { functionList, functionNum } = this.state;
    return (
      <div className="App">
        <div className="useing-block">
          <div role="button" onClick={() => this.pachageSelect(0)} style={{ }} className="useing-table" name="Monent">moment</div>
          <div role="button" onClick={() => this.pachageSelect(1)} className="useing-table" name="React-avatar-editor">react-avatar-editor</div>
          <div role="button" onClick={() => this.pachageSelect(2)} className="useing-table" name="Lodash">lodash</div>
          <div role="button" onClick={() => this.pachageSelect(3)} className="useing-table" name="Classnames">classnames</div>
          <div role="button" onClick={() => this.pachageSelect(4)} className="useing-table" name="Scss">Scss</div>
          <div role="button" onClick={() => this.pachageSelect(5)} className="useing-table" name="Scss">CssTag</div>
        </div>
        <div className="detail-introduction">
          {functionList[functionNum]}
        </div>
      </div>
    );
  }
}

export default App;