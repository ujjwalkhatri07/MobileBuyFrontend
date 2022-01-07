import React,{ Component } from "react";
import {Route, Link} from 'react-router-dom';
import axios from 'axios';
import './myStyle.css';
import { FaRegTrashAlt, FaFileSignature} from 'react-icons/fa';
class Productcustomeer extends Component{
    state = {
        products:[],
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }
    componentDidMount(){
        axios.get("http://localhost:90/product/all",this.state.config)
        .then((response)=>{
            console.log(response)
            this.setState({
                products : response.data.data
            })
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
                this.state.products.map((product)=>{
                    return (
                     
                  
                        <div className="card" style={{width:'31rem', marginBottom:'20px', marginTop:'20px', marginLeft:'10px'}}>
                        <div className="card-header">
                     
                        <p>
                            <img src={"http://localhost:90/"+product.product_img} id="img" className="card-img-top"/>
                        </p>
                        <p>
                        {
                        product.product_name 
                        }
                        </p>
                        
                        <p>Rs.{
                            product.product_price}
                        </p>
                        <p>{
                            product.product_desc}
                        </p>
                            <p><button className="btn btn-danger" onClick={this.sendUserData}>Add to cart</button><Link className="btn btn-primary" to={'/product/single/'+product._id}>View</Link></p>
                            
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
export default Productcustomeer;