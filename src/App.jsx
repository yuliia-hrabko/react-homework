import React , { useEffect, useState }  from 'react';
import { Route,  Routes } from 'react-router-dom';


import Users from './screens/Users';
import Posts from './screens/Posts';
import NotFound from './screens/NotFound';



const App = () => {

  const [users, setUsers] = useState([]);
    // const navigate = useNavigate();

    const fetchUsers = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data)
        }
        catch (e) {
            console.error(e)
        }
    };

    useEffect(() => {
        fetchUsers()
    },[]);

  return (
    <Routes>
      <Route path='*' element={<NotFound/>}/>
      <Route path= "/">
        <Route index element={<Users users={users}/>}/>
        <Route path="/users/:id" element={<Posts users={users}/>}/>
      </Route>
    </Routes>
  );
};

export default App;  
