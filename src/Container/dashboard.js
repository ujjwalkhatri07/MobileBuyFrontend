import { Component } from 'react';

import axios from 'axios'
import {Link} from 'react-router-dom'

class Dashboard extends Component {
    state = {

        items : []
      
    }

//load initially with the load of webpage

componentDidMount() {
    axios.get('http://localhost:90/product/all')
        .then((alldata) => {
            console.log(alldata)
            this.setState({
                items: alldata.data.productData
            })
        })
        .catch((err) => {
            console.log(err.response)
        })
}



    render()  {
        {
            if (localStorage.getItem('token') && localStorage.getItem('user_role') === 'Admin') {
               
                var redirect =



                //  <img src="/bike.png" alt="dashboard" className="img-fluid" style={{width:'100%'}}/>
                 
                



                <video className="vid"  autoplay="autoplay" loop="true" muted playsInline width="100%" height="581px" >
                <source src="hub.mp4" type="video/mp4">
          
              </source>
              </video>
        



            }
            else if (localStorage.getItem('token') && localStorage.getItem('user_role') === 'User') {
                redirect =
 

                // <video src="/life.mp4" alt="dashboard" className="img-fluid" style={{width:'100%'}}/>



 

<video className="video-fluid1"  autoplay="autoplay" loop="true" muted playsInline width="100%" height="581px" >
                <source src="hub.mp4" type="video/mp4">
          
              </source>
              </video>






            }

        }
        return (

      

<div>{redirect}</div>




      


         
             
     
        )
    }
}

export default Dashboard;