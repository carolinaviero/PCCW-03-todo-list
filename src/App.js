import './App.css';
import { useState } from 'react';
import ListItem from './components/ListItem';
import Form from './components/Form';

function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: 'Walk the dog',
      isDone: true,
    }, 
    { 
      id: 2,
      description: 'Walk the other dog',
      isDone: false
    }, 
    { 
      id: 3,
      description: 'Walk the third dog', 
      isDone: false
    },
  ]);

  const handleOnTextChange = (e) => {
    setValue(e.target.value)
  }
  
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos, { id: todos.length + 1, description: value, isDone: false }]);
    setValue('');
  }

  const handleDelete = (todo) => {
    const filteredItems = todos.filter(item => item.id !== todo.id);
    
    setTodos(filteredItems);
  }

  const handleIsComplete = (id) => {
    const foundTask = todos.find(todo => todo.id === id);
    foundTask.isDone = !foundTask.isDone;

    const newEditedArray = todos.map((todo) => todo.id === id ? foundTask : todo);

    setTodos(newEditedArray)
  }

  const handleEdit = (task, newDescription) => {
    const newEditedArray = todos.map((todo) => todo.id === task.id ? { id: task.id, description: newDescription, isDone: task.isDone } : todo);

    setTodos(newEditedArray)
  }

  return (
    <div className="App">
      <h1>To do list</h1>
        {todos.map(item => <ListItem key={item.id} todo={item} handleDelete={handleDelete} handleIsComplete={handleIsComplete} handleEdit={handleEdit}></ListItem>)}
        <Form handleOnTextChange={handleOnTextChange} handleOnSubmit={handleOnSubmit} value={value} />
    </div>
  );
}

export default App;
