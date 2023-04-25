import './App.css';
import Banner from './Components/Banner';
import { useState, useEffect, useCallback } from 'react';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs';

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      id: Math.random,
      title,
      time,
      done:false
    }
    console.log(todo)

    setTime('')
    setTitle('');
  };

  return (
    <div className="App">
      <Banner />

      <div className='form-todo'>
        <h2>Insira sua próxima tarefa:</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='title'>O que você vai fazer?</label>
            <input
              type='text'
              name='title'
              placeholder='Título da tarefa'
              onChange={(e) => setTitle(e.target.value)}
              value={title || ''}
              required
            />
             <input
              type='number'
              name='time'
              placeholder='Título da tarefa'
              onChange={(e) => setTime(e.target.value)}
              value={time || ''}
              required
            />
          </div>
          <input type='submit' value='enviar'></input>
        </form>
      </div>
    </div>
  );
}

export default App;
