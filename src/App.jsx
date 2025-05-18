import { Routes, Route} from "react-router-dom";
import './App.css'
import HomePage from './components/HomePage';
import ParentProfile from './components/ParentProfile';
import Register from "./components/Register";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/profile" element={<ParentProfile/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App;
