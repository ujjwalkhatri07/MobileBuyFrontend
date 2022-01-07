import axios from "axios";
import { Component } from "react";
import './myStyle.css'

class Addproduct extends Component{
    state={
        product_name:'',
        product_price:'',
        product_desc:'',
        product_img:'',
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }

    }
    changeGarne=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    fileHandler = (e)=>{
        this.setState({
            product_img : e.target.files[0]
        })
    }
    
    sendproduct=(e)=>{
        e.preventDefault();// prevents from reloading page
        const data = new FormData() 

        data.append('product_img', this.state.product_img)
        data.append('product_name', this.state.product_name)
        data.append('product_desc', this.state.product_desc)
        data.append('product_price', this.state.product_price)
    
        axios.post('http://localhost:90/product/insert',data,this.state.config).then((response)=>{
            console.log(response)
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
                      
                            <img alt="login" src="/product2.png" className="img-fluid" style={{ height: '400px' }} />

                        
                    </div>
                    <div className="col-lg-5 no gutters">
                       
                    <h2 className=" py-4 ml-5">Add products</h2>
                    <h5 className="ml-5"></h5>
                        
                 
                <form>
                <div className="form-row">
                                        <div className="col-lg-9 ml-5">
                    <p>
                        Product name<input type="text" name="product_name" value={this.state.product_name} onChange={this.changeGarne} /> </p>
                        </div>
                        </div>

                        <div className="form-row">
                                        <div className="col-lg-9 ml-5">

                        <p>
             

                        <label for="exampleFormControlTextarea5">Description</label>  
                        <textarea class="form-control" id="exampleFormControlTextarea5" rows="3" name="product_desc" value={this.state.product_desc} onChange={this.changeGarne} />

                        </p>








</div>
</div>


<div className="form-row">
                                        <div className="col-lg-9 ml-5">
                        <p>
                            Price<input type="text" name="product_price" value={this.state.product_price} onChange={this.changeGarne} />

                        </p>
                        </div>
                        </div>



                          <div className="form-row">
                                        <div className="col-lg-9 ml-5">
                         <p> 
                         <input type="file" name="product_img" onChange={this.fileHandler} /></p> 

                         </div>
                         </div>


                         <div className="form-row">
                                        <div className="col-lg-9 ml-5">
                    <p><button className="btn btn-primary" onClick={this.sendproduct}>Add Product</button></p>
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

export default Addproduct