import './index.css';
import { CgDarkMode } from "react-icons/cg";
import { useState } from 'react';
import SearchForm from './search';
import Articles from './news';
function App() {

  const [mode, setMode] = useState(true);
  const modeHandler = () => {
    if (mode) {
      document.body.style.color = '#eee';
      document.body.style.backgroundColor = '#333'
    } else {
      document.body.style.color = '#333';
      document.body.style.backgroundColor = '#eee'
    }
    setMode(!mode)
  }

  return (
    <>
      <CgDarkMode onClick={() => modeHandler()} className='mode' />
      <SearchForm />
      <Articles />
    </>
  );
}

export default App;
