// import { add, format} from "date-fns"
import React from 'react';
import TimeSeriesInput from '../../Input/TimeSerisInput';
import '../../App.css'
import './Home.css'
// import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import AuthContext from '../auth/AuthContext';
// import useAuth from '../auth/useAuth';



const Home: React.FC = () => {
  // const location = useLocation();
  // const dataReceived = location.state?.data;
  // console.log(dataReceived);

  const [user, setUser] = useState({ name: "" });

  useEffect(() => {
    const user = localStorage.getItem('user');
    console.log(user, "data")
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  async function Logout(e: any) {
    e.preventDefault();
    try {
      // const {logout} = useAuth();
      // logout();
      localStorage.removeItem('user');
      window.location.href = "/"
    }
    catch (e) {
      console.log(e)
    }
  }

  async function Admin(e: any) {
    e.preventDefault();
    try {
      window.location.href = "/admin"
    }
    catch (e) {
      console.log(e)
    }
  }


  return (
    <>
      <button className='logout-bt' onClick={Logout}>Logout</button>
      <button className='admin-bt' onClick={Admin}>Admin</button>

      {/* <div className="center-flex"><p>Electricity Theft Detection In Smart Grid</p><p>Hello {location.state.id} , Welcome!</p></div> */}
      <div className="center-flex"><p>Electricity Theft Detection In Smart Grid</p><p>Hello {user.name}, Welcome!</p></div>

      <img className="responsive-image" src={`../../public/image1.jpg`} alt="Example" />
      <div className="App">
        <h1>Time Series Data Input</h1>
        <TimeSeriesInput />
      </div>
    </>
  );
}



export default Home;
