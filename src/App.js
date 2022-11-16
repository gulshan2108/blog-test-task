import logo from './logo.svg';
import './App.css';
import IndexRoute from './Routes/Index';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <IndexRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
