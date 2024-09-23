import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todoItemList: initialTodosList}

  deleteTodoItem = uniqueNo => {
    const {todoItemList} = this.state
    const filterResult = todoItemList.filter(eachUser =>
     eachUser.id !== uniqueNo,
    )
    this.setState({todoItemList: filterResult})
  }

  render() {
    const {todoItemList} = this.state
    return (
      <div className="bg-container">
        <div className="todos-card">
          <h1 className="headingEl">Simple Todos</h1>
          <ul className="todosContainer">
            {todoItemList.map(eachItem => (
              <TodoItem list={eachItem} key={eachItem.id} deleteTodoItem={this.deleteTodoItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
