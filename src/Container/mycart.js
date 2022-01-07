import React,{ Component } from "react";
import {Route, Link} from 'react-router-dom';
import axios from 'axios';



class MyCart extends Component {
    state =
        {
            items: [],
            productID: "",
            product_img: '',
            product_name: "",
            product_price: "",
            config: {
                headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }

    //load initially with the load of webpage
    componentDidMount() {
        axios.get('http://localhost:90/getcart/all/')
            .then((alldata) => {
                console.log(alldata)
                this.setState({
                    items: alldata.data.cartdata
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    deletecart = (pid) => {
        axios.delete("http://localhost:90/addcart/delete/" + pid)
            .then((response) => {
                console.log(response)
                alert(response.data.message)
                window.location.reload()

            })
            .catch((error) => {
                console.log(error.response)
            })
    }


    render() {

        var viewproduct =

            <div className="container-fluid">
                <div className="row">
                    {
                        this.state.items.map((item) => {
                            return (

                                <div className="card shadow-lg" style={{ width: '18rem', height: 'auto', marginLeft: '14px', marginTop: '10px', marginBottom: '10px' }}>
                                    <div className="card-body">
                                        <img className="card-img-top" src={"http://localhost:90/" + item.productImage.replace("\\", "/")} alt="Image Loading...." style={{ width: 'auto', height: '150px' }} /><br/>
                                        {item.userID}<br />
                                        {item.product_name}<br />
                                        {item.product_price}<br />

                                        <p> <button type="button" className="btn btn-danger btn-sm" onClick={this.deletecart.bind(this, item._id)}><FaRegTrashAlt /></button>
                                            <Link to={'/checkout/' + item._id}>  <button type="button" className="btn btn-primary btn-sm">Checkout</button></Link></p>
                                    </div>
                                </div>

                            )
                          })
                    }
                </div>
            </div>





        return (
            <div>
                {viewproduct}
            </div>

        )
    }
}

export default MyCart;