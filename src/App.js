import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ContextState from './state/ContextState';

const App = () => {
  return (
    <BrowserRouter>
      <ContextState>
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/second' element={<SecondPage />} />
        </Routes>
      </ContextState>
    </BrowserRouter>
  );
}

export default App;
