import './App.css';
import NavBar from './Components/NavBar'; 
import Header from './Components/Header';
import { RoutesInit } from './Routes/RoutesInit';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header/>
      <RoutesInit/>
    </div>
  );
}

export default App;
