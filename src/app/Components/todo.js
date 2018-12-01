import React from 'react';

export class ToDo extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      items: [],
      userInput: ''
    }
  }

  onAdd(){
    this.setState({
      items: [this.state.items, this.state.userInput].flat(),
      userInput: ''
    })
  }

  onHandleChange(e){
    this.setState({
      userInput: e.target.value
    })
  }

  // the item to be deleted is passed from the bind call on todo.js when its clicked
  handleDelete(itemToBeDeleted){
    let newItems = this.state.items.filter( (item) => {
      return item !== itemToBeDeleted
    });
    this.setState({
      items:newItems
    })
  }

  handleKeyPress(e){
    if(e.key === 'Enter') {
      this.onAdd()
    }
  }

  render(){
    return(
      <div className = "todo">
        <input
        className = "todo-input"
        value = {this.state.userInput}
        type = 'text' placeholder = "What needs to be done"
        onChange = {this.onHandleChange.bind(this)}
        onKeyPress = {this.handleKeyPress.bind(this)}
        />
        <button
        className = 'add-btn'
        onClick = {this.onAdd.bind(this)}> Add </button>
        <div className = 'wrapper'>
          <div className = 'todo-list'>
            <ul>
            {this.state.items.map( (item, i) =>
               <li key ={i} className = 'listItems'>
               {item}
               < button onClick ={this.handleDelete.bind(this, item)}> x</button>
               </li> )}
            </ul>
          </div>
        </div>

      </div> // end of 'todo' div

    )
  }
}
