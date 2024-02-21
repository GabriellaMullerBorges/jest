import { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState(['Java', 'JavaScript', 'C#']);
  const [isClicked, setIsClicked] = useState(false);

  function addList() {
    setList((state) => [...state, 'Python']);
    setIsClicked(true); // Altera o estado para indicar que o botão foi clicado
  }

  return (
    <>
      <h1 className='test'>Projeto de Teste</h1>
      <button
        onClick={addList}
        style={{ backgroundColor: isClicked ? 'red' : 'initial' }} // Muda a cor do botão para vermelho se foi clicado
      >
        Adicionar
      </button>
      <ul className='lista'>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
