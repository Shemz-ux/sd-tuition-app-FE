import { Routes, Route} from "react-router-dom";
import './App.css'
import HomePage from './components/HomePage';
import ParentProfile from './components/ParentProfile';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/profile" element={<ParentProfile/>}/>
      </Routes>
    </>
  )
}

export default App;
