import { Routes, Route} from "react-router-dom";
import './App.css'
import HomePage from './components/HomePage';
import ParentProfile from './components/ParentProfile';
import Register from "./components/Register";
import AddChild from "./components/AddChild";
import ChildProfile from "./components/ChildProfile";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/profile" element={<ParentProfile/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/addChild" element={<ChildProfile/>}/>
      </Routes>
    </>
  )
}

export default App;
