import { Component } from "react";


class logout extends Component{
    componentDidMount(){
        localStorage.removeItem('token')
        localStorage.removeItem('userType')
      

        window.location.href='/user/login'
        
    }
    render()
    {
        return(
            <div>Unauth</div>
        )
    }
   
       
    }


export default logout