import React from 'react';
import {render} from 'react-dom';
import {Header} from './app/Components/header';
import {ToDo} from './app/Components/todo';

class App extends React.Component {
constructor (){
  super();
  this.state = {
    initialItem: []
  }
}



  render(){
    return(
      <div className = 'container'>
        <div className = 'row'>
          <div className = 'col-xs-10 cols-xs-offset-1'>
            <Header/>
          </div>
        </div>

        <div className = 'row'>
          <div className = 'col-xs-10 cols-xs-offset-1'>
            <ToDo
            initialItem = {this.state.initialItem}>

            </ToDo>
          </div>
        </div>

      </div>

    )
  }



}
render(<App/>, document.getElementById('root'))
