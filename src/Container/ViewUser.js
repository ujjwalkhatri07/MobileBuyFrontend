import React,{ Component } from "react";
import {Route, Link} from 'react-router-dom';
import axios from 'axios';
import './myStyle.css'

class ViewUser extends Component{
    state = {
        users : [],
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }
    componentDidMount(){
        axios.get("http://localhost:90/user/show",this.state.config)
        .then((response)=>{
            console.log(response)
            this.setState({
                users : response.data
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    deleteUser = (uid) =>{
        axios.delete('http://localhost:90/user/delete/' + uid,  this.state.config)
        .then((response)=>{
            console.log(response)
            window.location.reload()
            alert(response.data.message)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

       
    render(){
        return(
            <div className="container-fluid">
            <div className="row">
                
               
            {this.state.users.map((user)=>{
                        return (

                            
                            
                   <div className="card" style={{width:'31rem', marginBottom:'20px', marginTop:'20px', marginLeft:'10px'}}>
                            <div className="card-header">
                            
                            
                            <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact</th>
      <th scope="col">User Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{user.user_username}</th>
      <td>{user.user_email}</td>
      <td>{user.user_contactno}</td>
      <td>{user.user_role}</td>
    </tr>
    <tr></tr>
    </tbody>
    </table>
    
    <p><button className="btn btn-danger" onClick={this.deleteUser.bind(this, user._id)}>Delete</button></p>

    
                            </div>
                            </div>
                            
                        
                            ) 
                    })
                }
                </div>
                </div>
              
    )
        
    }
}
export default ViewUser;