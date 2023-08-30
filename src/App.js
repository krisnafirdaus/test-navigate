import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Detail from './pages/Detail';
import Product from './pages/Product';
import Grid from './pages/Grid';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path=":id" element={<Product />} />
        <Route path="/grid" element={<Grid />} />
      </Route>
    </Routes>
  );
}

export default App;
