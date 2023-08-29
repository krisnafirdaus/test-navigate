import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Detail from './pages/Detail';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
