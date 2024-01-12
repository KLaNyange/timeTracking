import './App.css';
import SideBar from './components/SideBar/SideBar';
import Cards from './components/Cards/Cards'
import data from './data.json'
import { useState } from 'react';

function App() {

  const [timing, setTiming] = useState('daily')

  function changeTiming(e){
    setTiming(e.target.innerText.toLowerCase())
  }


  return (
    <div className="App">
      <SideBar changeTiming = {changeTiming} timing={timing}/>
      <Cards data={data} timing={timing} />
    </div>
  );
}

export default App;
