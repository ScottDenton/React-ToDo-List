import React from 'react';

export class ToDo extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      items:[],
      userInput: '',
      storage: '',
    }
  }

//reloads data from local storage on refresh. If no previous list, resets items to 0
  componentWillMount(){
    if(localStorage.length === 0){
      this.setState({
        items:[]
      })} else {
        this.setState({
          items: JSON.parse(localStorage.getItem("list")),
        })
      }
    }

//when todo list is update(specifically when stuff is deleted), updates the local storage
  componentDidUpdate(prevProps, prevState){
    if (prevState.items.length !== this.state.items){
      const updatedList = JSON.stringify(this.state.items);
      localStorage.setItem("list", updatedList)
    }
  }

  onHandleChange(e){
    this.setState({
      userInput: e.target.value
    })
  }

  onAdd(){
    this.setState({
      items: [this.state.items, this.state.userInput].flat(),
      userInput: '',
      storage: localStorage.setItem("list", JSON.stringify([this.state.items, this.state.userInput].flat()))
    })
  }

  handleKeyPress(e){
    if(e.key === 'Enter') {
      this.onAdd()
    }
  }

  // the item to be deleted is passed from the bind call when its clicked
  handleDelete(itemToBeDeleted){
    let newItems = this.state.items.filter( (item) => {
      return item !== itemToBeDeleted
    });
    this.setState({
      items:newItems,
    })
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
            {(this.state.items).map((item, i) =>
               <li key ={i} className = 'listItems'>
               {item}
               < button onClick ={(this.handleDelete.bind(this, item))}> x</button>
               </li> )}
            </ul>
          </div>
        </div>
      </div> // end of 'todo' div

    )
  }
}
