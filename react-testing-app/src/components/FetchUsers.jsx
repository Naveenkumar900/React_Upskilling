import {useEffect, useState} from 'react';
const FetchUsers=()=>{
    const [users,setUsers]=useState([])
    const [error,setError]=useState("");
    useEffect(()=>{
    (async()=>{
        try{
            const resp=await fetch('https://jsonplaceholder.typicode.com/users')
            if(!resp.ok) throw new Error('API failed')
            const data=await resp.json();
            setUsers(data);
        }catch{
         setError('Failed to Fetch Users');
        }
    })();
},[]
);

if(error) return <p>{error}</p>
if(!Array.isArray(users))
    return null;
return(
    <>
    {users.map((user)=>(
        <div key={user.id}>
            <h3>{user.name} {user.username}</h3>
            <p>Email: {user.email}</p>
        </div>
    ))}
    </>
)
}

export default FetchUsers;