



import axios from "axios";
import { Component } from "react";
import './myStyle.css'
class Updateproduct extends Component{
    state={
        product_name:"",
        product_desc:"",
        product_price:"",
        id:this.props.match.params.id
    }
    componentDidMount(){
        axios.get('http://localhost:90/product/single/' + this.state.id)
        .then((response)=>{
            this.setState({
                product_name:response.data.product_name,
                product_desc:response.data.product_desc,
           
                product_price:response.data.product_price,
                
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
    updatePro = (e)=>{
        e.preventDefault()
        
        axios.put("http://localhost:90/product/update/"+this.state.id,this.state).then((response)=>{
            console.log(response)
            window.location.href="/products/all"
            
          
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
                      
                            <img alt="login" src="/form2.jpg" className="img-fluid" style={{ height: '400px' }} />

                        
                    </div>
                    <div className="col-lg-5 no gutters">
                       
                    <h2 className=" py-4 ml-5">Update products</h2>
                    <h5 className="ml-5"></h5>
                        
                 
                <form>

                <div className="form-row">
                                        <div className="col-lg-9 ml-5">


                <p>



                    Product name<input type="text" name="product_name" value={this.state.product_name} onChange={this.changeHandler}/> </p>

</div>
</div>

<div className="form-row">
                                        <div className="col-lg-9 ml-5">

                        <p>
             

                        <label for="exampleFormControlTextarea5">Description</label>  
                        <textarea class="form-control" id="exampleFormControlTextarea5" rows="3" name="product_desc" value={this.state.product_desc} onChange={this.changeHandler} />

                        </p>
                        </div>
                        </div>





<div className="form-row">
                                        <div className="col-lg-9 ml-5">

                    <p>
                        Price<input type="text" name="product_price" value={this.state.product_price} onChange={this.changeHandler}/>
                    </p>

                    </div>
                    </div>
                
                  

                    <div className="form-row">
                                        <div className="col-lg-9 ml-5">
                <p><button onClick={this.updatePro} className="btn btn-primary" href="/products/all">Update</button></p>

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
export default Updateproduct