import { Component,state, changeHandler, submitLogin } from "react";
import axios from 'axios';
import './myStyle.css'
import {Redirect, Link} from 'react-router-dom';
class Login extends Component{
    state = {
        user_email : "",
        user_password : "",
        chkLogin:false
    }
    changeHandler =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        }
        )
    }
    submitLogin = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:90/user/login", this.state)
        .then((response)=>{
            console.log(response);
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('user_role',response.data.user_role)
            localStorage.setItem('firstname',response.data.user_username)
            localStorage.setItem('id',response.data.id)
            alert(response.data.message)
            this.setState({
                chkLogin:true
            })
        })        
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        if(this.state.chkLogin==true){
            //redirect to dashboard
            
            return  window.location.href='/dashboard'
            
            



        }
        return(

            <div className="container-fluid">
           
            <section className="Form my-4 mx-5 pt-5 pb-5 mt-6">
            <div className="container">
                <div className="row no-gutters shadow" style={{background:'white', borderRadius:'3px'}}>
                   
                    <div className="col-lg-5">
                      
                            <img alt="login" src="/sign.png" className="img-fluid" style={{ height: '400px' }} />

                        
                    </div>
                    <div className="col-lg-5 no gutters">
                       
                    <h2 className=" py-4 ml-5">Sign In</h2>
                    <h5 className="ml-5"></h5>





<form>
<div className="form-row">
                                        <div className="col-lg-9 ml-5">
                    <p> Username <br></br><input type="text" name="user_email" value={this.state.user_username} onChange={this.changeHandler}/></p>
                    </div>
                    </div>


<div className="form-row">
                                        <div className="col-lg-9 ml-5">
                    <p> Password <br></br><input type="password" name="user_password" value={this.state.user_password} onChange={this.changeHandler} /></p>
                  </div>
                  </div>

                  <div className="form-row">
                                        <div className="col-lg-5 ml-5">
                    <button style={{textAlign:'center', fontSize: '18px',padding: '5px 25px',width:'100%'}} type="submit" onClick={this.submitLogin} className="btn btn-primary"> Sign in </button>
</div>
</div>

<br></br>

                 
<p className="signUp text-left ml-5">Don't have an Account?  <Link exact to="/register"><b>Sign Up</b></Link></p>
                                       

                    </form>
                    </div>
                    </div>
                    </div>



                    </section>
             
           </div>
        )
    }
}
export default Login;