import React, { Component } from 'react';

import Moment from './Moment';
import Scss from './Scss';
import CssFile from './CssFile';
import Docker from './Docker';
import ReactDates from './ReactDates';
import F2eCategoryPicker from './F2eCategoryPicker';
import ReactSlider from './ReactSlider';
import ReactSwipper from './ReactSwipper';
import NewSwiper from './NewSwiper';
import TruncateLongText from './TruncateLongText';
import InputOnSafari from './InputOnSafari';
import ToXlsx from './ToXlsx';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      functionList: [
      <Moment />,
      <div/>,
      <div />,
      <div />,
      <Scss />,
      <CssFile />,
      <Docker />,
      <ReactDates />,
      <F2eCategoryPicker />,
      <ReactSlider />,
      <ReactSwipper />,
      <NewSwiper />,
      <TruncateLongText />,
      <InputOnSafari />,
      <ToXlsx />
    ],
      functionNum: 14,
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
          <div role="button" onClick={() => this.pachageSelect(5)} className="useing-table" name="CssTag">CssTag</div>
          <div role="button" onClick={() => this.pachageSelect(6)} className="useing-table" name="Docker">Docker</div>
          <div role="button" onClick={() => this.pachageSelect(7)} className="useing-table" name="ReactDates">ReactDates</div>
          <div role="button" onClick={() => this.pachageSelect(8)} className="useing-table" name="F2eCategoryPicker">F2eCategoryPicker</div>
          <div role="button" onClick={() => this.pachageSelect(9)} className="useing-table" name="ReactSlider">ReactSlider</div>
          <div role="button" onClick={() => this.pachageSelect(10)} className="useing-table" name="ReactSwipper">ReactSwipper</div>
          <div role="button" onClick={() => this.pachageSelect(11)} className="useing-table" name="NewSwiper">NewSwiper</div>
          <div role="button" onClick={() => this.pachageSelect(12)} className="useing-table" name="TruncateLongText">TruncateLongText</div>
          <div role="button" onClick={() => this.pachageSelect(13)} className="useing-table" name="input">input on safari</div>
          <div role="button" onClick={() => this.pachageSelect(14)} className="useing-table" name="input">to xlsx</div>
        </div>
        <div className="detail-introduction">
          {functionList[functionNum]}
        </div>
      </div>
    );
  }
}

export default App;
