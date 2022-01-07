import React,{ Component } from "react";
import {Route, Link} from 'react-router-dom';
import axios from 'axios';
import './myStyle.css'

class Viewcontactus extends Component{
    state = {
        contacts : [],
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }
    componentDidMount(){
        axios.get("http://localhost:90/contact/all",this.state.config)
        .then((response)=>{
            console.log(response)
            this.setState({
                contacts : response.data.data
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    deleteContact = (cid) =>{
        axios.delete('http://localhost:90/delete/contact/' + cid,  this.state.config)
        .then((response)=>{
            console.log(response)
            alert(response.data.message)
            window.location.reload()
        })
        .catch((err)=>{
            console.log(err.response)
        })
    
     }
    

       
    render(){
        return(
            <div className="container-fluid">
            <div className="row">
                {
                this.state.contacts.map((contact)=>{
                    return (
                        
  
                        <div className="card" style={{width:'31rem', marginBottom:'20px', marginTop:'20px', marginLeft:'10px'}}>
                        <div className="card-header"></div>

                        <p> Email: 
                        {
                        contact.email
                        }
                        </p>
                        
                        <p> Phone number: {
                            contact.help}
                        </p>
                            <p><button className="btn btn-danger" onClick={this.deleteContact.bind(this, contact._id)}>Delete</button></p>
                        
                        </div>
                        
                    
                        
                            ) 
                    })
                }

</div>
                </div>
                





            
            
    )
        
    }
}
export default Viewcontactus;