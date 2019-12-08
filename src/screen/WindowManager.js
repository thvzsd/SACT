import React from 'react';

import '../css/WindowManager.css';

import exit from '../css/assets/exit.png';
import adm from '../css/assets/admin.png';



class WindowManager extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackWindow = this.handleBackWindow.bind(this)
    this.nextWindow = this.nextWindow.bind(this);
  }
  renderBack() {
    return (
      <img id="back" onClick={this.handleBackWindow} src={exit} alt='exit' />
    );
  }
  handleBackWindow(e) {
    if (this.state.windows.length > 1)
      this.setState({
        windows: this.state.windows.slice(0, this.state.windows.length - 1),
      })
  }

  nextWindow(window) {
    this.setState({
      windows: this.state.windows.concat(window)
    })
  }

  renderWindow() {
    return this.state.windows[this.state.windows.length - 1]; 
  }
  renderSeaseonInfo() {
    return (
      <table>
        <tr>
          <td><text id='logout'>Logout</text></td>
          <td id='x1' style={{width:'fit-content'}}><img id='adm-logo' src={adm} alt='admin' /></td>
          <td><text id='adm'>ADM</text> </td>
          
        </tr>
      </table>
    );
  }

  render() {
    return (
      <table aling='top' style={{width: '100%'}}>
        <tr>
          <td>
            {this.renderBack()}
          </td>
          <td style={{width: 'max-content'}}>
            {this.renderWindow()}
          </td>
          <td id='season-containder'>
            {this.renderSeaseonInfo()}
          </td>
        </tr>
      </table>
    );
  }
}

export default WindowManager;