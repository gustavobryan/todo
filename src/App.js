import './App.css';
import Banner from './Components/Banner';
import Formulario from './Components/Formulario';
import Lista from './Components/Lista';
import { useState, useEffect, useCallback } from 'react';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs';

const API = "https://localhost:5000";

function App() {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <div className="App">
      <Banner />
      <Formulario />
      <Lista/>
    </div>
  );
}

export default App;
