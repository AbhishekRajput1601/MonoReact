import React from 'react'
import readUserData from '../services/readuserdata'
import { useEffect } from 'react';

const Data = () => {
    const [users, setUsers] = React.useState([]);   

   useEffect(() => {
        const fetchData = async () => {
            const data = await readUserData();
            setUsers(data);
        }
        fetchData();
    }, [])

    return (        
        <div>
            <h1>Read Data</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    )
}


export default Data