import './App.css';
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <Header />
      <select>
        <h2>국내 코로나 현황</h2>
        <div className="contents"></div>
      </select>
    </div>
  );
}

export default App;
