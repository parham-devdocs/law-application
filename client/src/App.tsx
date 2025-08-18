import { Route, Routes } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';
import Home from './pages/Home';
import Docs from "./pages/docs";
import Profile from "./pages/profile";
import Login from "./pages/login";
import DocDetail from "./pages/docDetail";
import NotFound from "./pages/notFound";
import CreateDoc from './pages/createDoc';
function App() {
  return <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/docs" element={<Docs/>}/>
  <Route path="/docs/create" element={<CreateDoc/>}/>
  <Route path="/docs/:id" element={<DocDetail/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='*' element={<NotFound/>}/>

</Routes>
}

export default App