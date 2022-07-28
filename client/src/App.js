import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { reducer, intialState } from './Reducer/reducer';
import { useNavigate } from 'react-router-dom';
import UpdateProfile from './Components/UpdateProfile';
import Header from './Components/Header';
import UserProfile from './Pages/UserProfile';



export const userContext = createContext();

const Routing = () => {
  const { state, dispatch } = useContext(userContext);
  const navigate = useNavigate()


  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    if (user) {
      dispatch({ type: "USER", payload: user })
      if (window.location.pathname.startsWith('/login') || window.location.pathname.startsWith('/register')) {
        navigate('/')
      }
    } else if (window.location.pathname.startsWith('/register')) {
      navigate('/register')
    } else {
      navigate('/login')
    }

  }, [])




  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:id" element={ <UserProfile/>} />
      <Route exact path="/updateprofile" element={<UpdateProfile/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}




function App() {
  const [state, dispatch] = useReducer(reducer, intialState);


  return (
    <userContext.Provider value={{ state, dispatch }} >
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </userContext.Provider>



  );
}

export default App;
