import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import './App.css';
import Topbar from './components/topBar/Topbar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Write from './pages/write/Write';
import { useContext } from 'react';
import { Context } from './context/Context';



function App() {
  const {user} =  useContext(Context)
  return (
    
        <BrowserRouter >
        <div className="App">
      <Topbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={user?<Home/>:<Login />} />
        <Route path="/signup" element={<Register />}/>
          <Route path="/write" element={user?<Write/>:<Login/> } />
          <Route path="/settings" element={user?<Settings />:<Login/>} />
          <Route path="/post/:postId" element={<Single />} />
      </Routes>
      </div>
    </BrowserRouter>

    
  );
}

export default App;
