import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { useContext } from 'react';
import { AuthContext } from './context/adminProvider';
import AdminNavigator from './navigator/AdminNavigator'
import DealerInfo from './components/DealerInfo';

function App() {

  const {isAuth} = useContext(AuthContext);

  if(isAuth.Admin){
    return <AdminNavigator/>
  }
  return (
    <div className="App">
      
      
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/sign-up" element={<Register/>}></Route>
        <Route path="/user" element={<DealerInfo/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
