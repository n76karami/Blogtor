import React , {useState , useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import D_Navbar from './D_Navbar';
import Cookies from 'universal-cookie';
import Loading from '../Notfound/Loading';

const cookies = new Cookies();


const Dashbordlayout = () => {

  const [isloading, setisLoading] = useState(true)
  const [current_user, setcurrent_user] = useState('');

  const token = cookies.get('token')

  const myfetch = () => {

    fetch('http://localhost:4000/user/me' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth": `ut ${token}`
      },
      body: JSON.stringify({})
    }).then((res) => res.json())
      .then((data) => {
        setcurrent_user(data)
        setisLoading(false)
      })
      // .finally(() => setisLoading(false));
   
  }

  useEffect(() => {
    
    if (token != undefined) {
        
      myfetch()
        
    }
    else {
      setisLoading(false) 
    }
  
    
  }, [])
 

  if (isloading) return <Loading />

  if(!current_user) return window.location.assign('/')

  return (
    <>
      <D_Navbar />
      <Outlet />
    </>
  )
}

export default Dashbordlayout;