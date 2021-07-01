import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Setup the initial context 
export const UserContext = React.createContext();

// create an exportable consumer
export const UserConsumer = UserContext.Consumer;

// create a provider 
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})

  useEffect( () => {
    axios.get(`/api/users/1`)
    .then( res => setUser(res.data))
    .catch( err => console.log(err))
  }, [])

  const updateUser = (id, user) => {
    axios.put(`/api/users/${id}`, { user })
    .then( res => setUser(res.data))
    .catch( err => console.log(err))
  }
  
  return (
    <UserContext.Provider value={{
      ...user,
      updateUser: updateUser
    }}>
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider;