import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './views/Login/index.tsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/login' Component={Login} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
