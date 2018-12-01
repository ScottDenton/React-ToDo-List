import React from 'react';
import {render} from 'react-dom';
import {Header} from './app/Components/header';
import {ToDo} from './app/Components/todo';
import {Footer} from './app/Components/footer'

class App extends React.Component {

  render(){
    return(
      <div className = 'App'>
        <div>
          <div>
            <Header/>
          </div>
        </div>

        <div >
            <ToDo/>
        </div>
        <div className = 'footer'>
          <Footer />
        </div>

      </div>

    )
  }



}
render(<App/>, document.getElementById('root'))
