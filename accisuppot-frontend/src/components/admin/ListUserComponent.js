import { useEffect, useState } from "react"
import UserService from "../../service/UserServices/UserService"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import "../admin/Button.css"

const ListUserComponent = () => {
    const [users, setUsers]=useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        UserService.getAllUsers().then((Response)=>{
            setUsers(Response.data)
            console.log(Response.data);
        }).catch(error =>{
            console.log(error);
        })
    })
    const updateUser = (id) => {
        navigate(`/edit-user/${id}`)
    }
  return (
    <div className="container">
        <br/> <br/> 
        
        <br/>
        <nav className="">



        <div  style={{ width: "100%" }} className="p-3 mb-2 bg-success text-white " >
            

        <Link to="/add-user"  className="btn btn btn-warning mb-2 text" >Add New User</Link>
        <Link to="/add-user" className="btn btn btn-warning mb-2 btn-spacing  text">Add New Hospital</Link>
        <Link to="/add-user" className="btn btn btn-primary  mb-2 btn-spacing  text ">Logout</Link>
        <br></br>
        
        </div>
        </nav>
        <br></br>
        <table className="table table-bordered table-dark table-striped">

            <thead>
             <tr>
                <th>User Id</th>
                <th>Name </th>
                <th>Mobile No</th>
                <th>Email Id </th>
                <th>Role</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>{
                users.map(
                    user =>
                    <tr key ={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName+" "+ user.lastName}</td>
                        <td>{user.mobileNo}</td>
                        <td>{user.emailId}</td>
                        <td>{user.role}</td>
                        <td>  <button className="btn btn-info" onClick={() => updateUser(user.id)} >Update</button></td>
                        <td>  <button className="btn btn-danger" onClick={() => updateUser(user.id)} >Delete</button></td>
                    </tr>)
                
                }
            </tbody>


        </table>
      
    </div>
  )
}

export default ListUserComponent
