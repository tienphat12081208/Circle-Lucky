import React, { Component } from 'react';
import './App.css';
import Circle_Lucky from './component/Circle_Lucky';
class App extends Component {
  render() {
    return (
      <div className="circle-lucky">
       <h2 className="title-circle-lucky">Phát Đoàn Lì Xì Năm Mới</h2>
       <p className="content-circle-lucky">Vòng quay may mắn</p>
       <Circle_Lucky/>
    </div>
    );
  }
}

export default App;
