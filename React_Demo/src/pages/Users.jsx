import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
function Users(){
    const [users,setUsers]=useState([])
    const [loading,setLoading]=useState(true)
    const [search,setSearch]=useState('')
    const navigate=useNavigate()

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>{
            setUsers(data);
            setLoading(false);
        })
        .catch((err)=>{
            console.log(err);
            setLoading(false);
        }
        )
    },[])

    const goToDetails=(user)=>{
        navigate(`${user.id}`,{state:user})
    }
    const filteredUsers=users.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase()))
     

    if(loading){
        return <h3>Loading Users...</h3>
    }
    return(
         <div>
            <input type='text' placeholder='Search By Name' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
            <button onClick={()=>setUsers(filteredUsers)}>Search</button>
            <h2>User List</h2>
            {users.map((user)=>(
                <div key={user.id}>
                    <p>{user.name}</p>
                    <button onClick={()=>goToDetails(user)}>View Details</button>

                </div>

            ))}
             
             
         </div>
    )
}
export default Users;