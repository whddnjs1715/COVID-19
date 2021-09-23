import './App.css';
import Header from './components/header'
import { useState, useEffect } from 'react'
import Contents from './components/Contents';
import { Bar } from 'react-chartjs-2'

function App() {
  const [confirmedData, setConfirmedData] = useState({
        
  })
  return (
    <div className="App">
      <Header />
      <Contents/>
      <Bar 
                        data={confirmedData}
                        options={
                            {title:{display: true, text: "누적 확진자 추이", fontSize: 16}},
                            {legend: {display: true, position: "bottom"}}
                        }
                    />
    </div>
  );
}

export default App;
