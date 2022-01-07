import axios from "axios";
import { timers } from "jquery";
import { Component } from "react";
import './myStyle.css'
class viewsingleuser extends Component{
    state={
        firstname:"",
        email:"",
        id:localStorage.id,
        
    }
    componentDidMount(){
        axios.get('http://localhost:90/user/single/'+this.state.id)
        .then((response)=>{
            
            this.setState({
                user_username:response.data.user_username,
         
               user_email:response.data.user_email,
               user_contactno:response.data.user_contactno,
            
        
            })

        }).catch((err)=>{
            console.log(err.response)
        })
    }
    changeHandler = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    updateUsr = (e)=>{
        e.preventDefault()
        axios.put("http://localhost:90/user/update/"+this.state.id,this.state)
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
           
            <section className="Form my-4 mx-5 pt-5 pb-5 mt-6">
            <div className="container">
                <div className="row no-gutters shadow" style={{background:'white', borderRadius:'3px'}}>
                   
                    <div className="col-lg-5">
                      
                            <img alt="login" src="/profile.png" className="img-fluid" style={{ height: '400px' }} />

                        
                    </div>
                    <div className="col-lg-5 no gutters">
                       
                    <h2 className=" py-4 ml-5">Profile Details</h2>
                    <h5 className="ml-5"></h5>
                        
                    <form>

                    <div className="form-row">
                                        <div className="col-lg-9 ml-5">
                  <p> Name <input type="text" name="user_username" value={this.state.user_username} onChange={this.changeHandler}/> 
                  </p>
                    </div>
                    </div>

                 <br></br>


                    <div className="form-row">
                                        <div className="col-lg-9 ml-5">

                   <p> Email <input type="text" name="user_email" value={this.state.user_email} onChange={this.changeHandler}/>
                   </p>

                    </div>

                    </div>
<br></br>

<div className="form-row">
                                        <div className="col-lg-9 ml-5">
                    
                       <p> Age <input type="text" name="user_contactno" value={this.state.user_contactno} onChange={this.changeHandler}/>
                       </p>
                        </div>
                        </div>

         
                
                        <div className="form-row">
                                        <div className="col-lg-9 ml-5">
                  <button className="btn btn-primary" onClick={this.updateUsr}>Update </button>
                  </div>
                  </div>
                            
                  </form>
                    </div>
                    </div>
                    </div>



                    </section>
             
           </div>
                   
        )
    }
}
export default viewsingleuser