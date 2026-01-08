import {Link, Outlet} from 'react-router-dom'

function Dashboard(){
    return(
        <div>
            <h1>Dashboard Page</h1>
             <nav>
                <Link to='users'>Users</Link>
             </nav>
             <Outlet/>
        </div>
    )
}
export default Dashboard;