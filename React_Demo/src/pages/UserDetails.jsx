import {useLocation, useParams} from 'react-router-dom'

function UserDetails(){
    const {state}=useLocation();
    const {id}=useParams();
    return(
         <div>
            <h3>User ID : {id}</h3>

            {state?(
                <>
                 <table border={1} cellPadding={10} style={{color:'black'}}>
                    <thead>
                        <tr> 
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                         
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{state.name}</td>
                            <td>{state.email}</td>
                            <td>{state.address.city}</td>
                             
                        </tr>
                    </tbody>


                 </table>
                </>
            ):(
                <p1>No User Detail Found</p1>
            )}
         </div>
    )
}
export default UserDetails;