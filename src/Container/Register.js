import { event } from "jquery";
import { Component } from "react";
import axios from 'axios'
import './myStyle.css'

class Register extends Component{
    state={
        user_username:"",
        user_contactno:"",
        user_password:"",
        user_email:"",
        user_role:""
    }
    sendUserData = ( ) =>{
        const data={
            user_username:this.state.user_username,
            user_email:this.state.user_email,
            user_role:"User",
            user_contactno:this.state.user_contactno,
            user_password:this.state.user_password,
        }
        axios.post("http://localhost:90/user/insert",data).then().catch(error=>{console.log(error);})
        
    }
    render(){
        return(
        
            <section className="Form my-4 mx-5 pt-5 pb-5">
            <div className="container">
                <div className="row no-gutters shadow" style={{background:'white', borderRadius:'3px'}}>
                   
                    <div className="col-lg-5">
                      
                            <img alt="login" src="/register.png" className="img-fluid" style={{ height: '400px',marginTop:'100px' }} />

                        
                    </div>
                    <div className="col-lg-5 no gutters">
                       
                    <h1 className="font-weight-bold py-4">Registration Form</h1>
                    <h5 className="ml-5">Fill your registration form now</h5>
        <br>
        </br>
                                <form>
           <div className="form-group"><input type="Text" className="form-control" placeholder="Name" value={this.state.user_username} onChange={(event)=>{this.setState({user_username:event.target.value})}}/>
           </div>

           <div className="form-group"><input type="Text" className="form-control" placeholder="Contact" value={this.state.user_contactno} onChange={(event)=>{this.setState({user_contactno:event.target.value})}}/>
           </div>

           <div className="form-group"><input type="Text" className="form-control" placeholder="Email" value={this.state.user_email} onChange={(event)=>{this.setState({user_email:event.target.value})}}/>
           </div>
          
           <div className="form-group"><input type="Password" className="form-control" placeholder="Password" value={this.state.user_password} onChange={(event)=>{this.setState({user_password:event.target.value})}}/>
           </div>
           <div className="form-group"><input type="Password" className="form-control" placeholder="Confirm Password"/></div>
           
           
           <button  style={{textAlign:'center', fontSize: '18px',padding: '5px 25px',width:'100%'}} type="submit" onClick={this.sendUserData} className="btn btn-primary"> Sign up </button>
            </form>
            </div>
            </div>
            </div>
            </section>
            
        )
    }
}

export default Register