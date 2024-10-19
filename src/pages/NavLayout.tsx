import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { setLoggedIn, setUsername } from '../store/LoginSlice';
import MainNavbar from '../components/MainNavbar';

function NavLayout(){
    const dispatch = useAppDispatch();

  
  useEffect(() => {
    const username = localStorage.getItem('username');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn && username) {
      dispatch(setUsername(username));  
      dispatch(setLoggedIn(true));  
    }
  }, [dispatch]);
    return(<>
        <MainNavbar/>
        <Outlet/>
    </>);
}

export default NavLayout;