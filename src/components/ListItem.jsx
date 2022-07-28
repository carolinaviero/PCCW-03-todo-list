import { useState } from 'react';

const ListItem = ({ todo, handleDelete, handleIsComplete, handleEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(todo.description);

    const handleEditing = (e) => {
        setValue(e.target.value)
      }

    const handleEditClick = (todo) => {
        setIsEditing(!isEditing);

        handleEdit(todo, value);
    }


    return (
        <div className="item">
            <button onClick={() => handleIsComplete(todo.id)}>{todo.isDone ? '☑️' : '⚪️'}</button>
            {isEditing ? <input value={value} onChange={e => handleEditing(e)}></input> : <p className={todo.isDone ? "cross-item" : ""}>{todo.description}</p>}
            <button onClick={() => handleEditClick(todo)}>{isEditing ? '✅' : '✍️'}</button>
            <button onClick={() => handleDelete(todo)}>❌</button>
        </div >
    )
}

export default ListItem;