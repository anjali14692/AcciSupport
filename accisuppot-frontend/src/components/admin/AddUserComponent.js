import React, { useState, useEffect } from 'react'; 
import UserService from '../../service/UserServices/UserService';


import {useNavigate, useParams } from 'react-router-dom';

const AddUserComponent = () => {
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [emailId,setEmailId]=useState("")
    const [mobileNo,setMobileNo]=useState("")
    const [role,setRole]=useState("")
   
    const navigate = useNavigate();
    const {id} = useParams();

    const backUser=(u)=>{
        navigate("/users")
    }


    const saveOrUpdateUser =(u)=>{
        u.preventDefault();

        const user={firstName,lastName,emailId,mobileNo,role}

        console.log(user)
        if(id){
            UserService.updateUser(id,user).then((Response)=>{
                console.log(Response.data)
                navigate("/users")
            }).catch(error =>{
                console.log(error)
            })
        }else{UserService.createUSer(user).then((Response)=>{
            console.log(Response.data)
            navigate("/users")
        }).catch(error =>{
            console.log(error)
        })}}

        useEffect(() => {
            if(id){UserService.getUserById(id).then((response) =>{
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmailId(response.data.emailId)
                setMobileNo(response.data.mobileNo)
                setRole(response.data.role)
            }).catch(error => {
                console.log(error)
            })

            }
            
        },[id])

        const pageTitle = () => {

            if(id){
                return <h2 className = "text-center">Update Employee</h2>
            }else{
                return <h2 className = "text-center">Add Employee</h2>
            }
    }

  return (
    <div><br/><br/><br/>
      <div className='container' >
        <br></br><br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3 border-dark p-3 mb-2 bg-transparent text-dark' >   
            {pageTitle() }
                <div className='card-body'>
                    <form className='p-3 mb-2 bg-warning text-dark"'> 

                        <div className='form-group mb-2'>
                            <label className='form-lable'> First Name</label>
                            <input type ="text" 
                            placeholder='Enter First Name' 
                            name='firstName' 
                            className='form-control' 
                            value={firstName}
                            onChange={(u)=>setFirstName(u.target.value)}></input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-lable'> Last Name</label>
                            <input type ="text" 
                            placeholder='Enter Last Name' 
                            name='lastName' 
                            className='form-control' 
                            value={lastName}
                            onChange={(u)=>setLastName(u.target.value)}></input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-lable'> Email Id</label>
                            <input type ="text" 
                            placeholder='Enter Email Id' 
                            name='emailId' 
                            className='form-control' 
                            value={emailId}
                            onChange={(u)=>setEmailId(u.target.value)}></input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-lable'> Mobile No</label>
                            <input type ="text" 
                            placeholder='Enter Mobile NO' 
                            name='mobileNo' 
                            className='form-control' 
                            value={mobileNo}
                            onChange={(u)=>setMobileNo(u.target.value)}></input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-lable'> Role</label>
                            <input type ="text" 
                            placeholder='Enter Role' 
                            name='rolr' 
                            className='form-control' 
                            value={role}
                            onChange={(u)=>setRole(u.target.value)}></input>
                        </div>
                        <div>
                        <button className='btn btn-success' onClick={(u)=>saveOrUpdateUser(u)}>Submit</button>

                        <button className='btn btn-danger ' onClick={(u)=>backUser(u)}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddUserComponent
