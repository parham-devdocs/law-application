import { Route, Routes } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';
import Home from './pages/Home';
import Docs from "./pages/docs";
import Profile from "./pages/profile";
import Login from "./pages/login";
function App() {
  return <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/docs" element={<Docs/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/login' element={<Login/>}/>
</Routes>
}

export default App