import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './context/adminProvider';
import AdminNavigator from './navigator/AdminNavigator'
import DealerInfo from './components/DealerInfo';
import NotFound from './components/Notfound';
import { check } from './api/user';
import Loading from './components/Loading';

function App() {

  const {isAuth} = useContext(AuthContext);
  const [loading ,setLoading] = useState(false);

  useEffect( ()=>{
    const checkServer = async()=>{
      setLoading(true);
      const res = await check();
      console.log(res);
      setLoading(false);
    }

    checkServer();
  })
  if(isAuth.Admin){
    return <AdminNavigator/>
  }
  return (
    <div>
      {loading?(<Loading/>):(<div className="App">
      
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/sign-up" element={<Register/>}></Route>
        <Route path="/user" element={<DealerInfo/>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>)}
    </div>
    
  );
}

export default App;
