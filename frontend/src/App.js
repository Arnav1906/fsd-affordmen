import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <div className="App">
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='*' element={<h1>404 Page Not Found</h1>} />
          <h1>Hello World!</h1>
        </div>
      </Routes>
    </Router>
  );
}

export default App;
