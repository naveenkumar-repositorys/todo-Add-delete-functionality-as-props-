// Write your code here
import './index.css'

const TodoItem = props => {
  const {list, deleteTodoItem} = props
  const {title, id} = list

  const onDelete = () => {
    deleteTodoItem(id)
  }

  return (
    <li className="listItemContainer">
      <p className="titleEl">{title}</p>
      <button className="buttonEl" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
