import React from 'react';

export class ToDo extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      items: props.initialItem,
      userInput: ''
    }
  }

  onAdd(){
    this.setState({
      items: [this.state.items, this.state.userInput].flat(),

    })
  }

  onHandleChange(e){
    this.setState({
      userInput: [e.target.value]
    })
  }

  onClick(){
    console.log(this.state.items)
  }

  deleteItem(event){
    console.log(this.parentNode)
  }

  render(){
    return(
      <div>
        <input
        value = {this.state.userInput}
        type = 'text' placeholder = "What needs to be done"
        onChange = {this.onHandleChange.bind(this)}/>
        <button
        className = 'btn btn-primary'
        onClick = {this.onAdd.bind(this)}> Add </button>
        <hr/>
        <div>
          <div> <ul>
            {this.state.items.map((item, i) => {
              return <li key ={i}> {item} </li> })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
