import axios from "axios";
import { timers } from "jquery";
import { Component } from "react";
import './myStyle.css'
class viewsingle extends Component{
    state={
        product_name:"",
        product_img:"",
        product_desc:"",
        product_price:"",
        id:this.props.match.params.id
    }
    componentDidMount(){
        axios.get('http://localhost:90/product/single/' + this.state.id)
        .then((response)=>{
            this.setState({
                product_name:response.data.product_name,
                product_price:response.data.product_price,
                product_img:response.data.product_img,
                product_desc:response.data.product_desc
            })

        }).catch((err)=>{
            console.log(err.response)
        })
    }
 
    render(){
        return(
            <div className="container-fluid">
           
            <section className="Form my-4 mx-5 pt-5 pb-5 mt-6">
            <div className="container">
                <div className="row no-gutters shadow" style={{background:'white', borderRadius:'3px'}}>
                   
              
                    <div className="col-lg-5 no gutters">
                       
                    <h2 className=" py-4 ml-5">Add products</h2>
                    <h5 className="ml-5"></h5>
                        
                 
                <form>

                <div className="form-row">
                                        <div className="col-lg-9 ml-5">
                            <p>
                                <img src={"http://localhost:90/"+this.state.product_img} id="imgsing"/>
                            </p>

</div>
</div>


<br/>


<div className="form-row">
                                        <div className="col-lg-9 ml-5">
                            <p>
                            {
                            this.state.product_name 
                            }
                            </p>

                            </div>
                            </div>


                            <div className="form-row">
                                        <div className="col-lg-9 ml-5">

                            <p>Rs.{
                                this.state.product_price}
                            </p>

</div>
</div>



<div className="form-row">
                                        <div className="col-lg-9 ml-5">
                            <p>{
                               this.state.product_desc}
                            </p>

                            </div>
                            </div>


                            <div className="form-row">
                                        <div className="col-lg-9 ml-5">
                            <p><button className="btn btn-danger">Add to cart</button></p>
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
export default viewsingle