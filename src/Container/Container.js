import { Component } from "react";
import { BrowserRouter, Switch } from 'react-router-dom';
import Register from './Register'
import Login from './Login'
import {Route} from 'react-router-dom'
import Products from './Products'
import Addproduct from './Addproduct'
import Updateproduct from './Updateproduct'
import logout from './logout'
import Productcustomeer from './Productcustomeer'
import viewsingle from './viewsingle'
import ViewUser from './ViewUser'
import Dashboard from "./dashboard";
import services from './services'
import viewsingleuser from './viewsingleuser'
import Contactus from './Contactus'
import Viewcontactus from './Viewcontactus'
import MyCart from './mycart'
class Container extends Component{
    render(){
        var id=(localStorage.getItem('id'))
        return(
            <BrowserRouter>
            <Switch>
                  <Route path="/register" component={Register} />
                  <Route exact path="/" component={Login} />
                  <Route path="/user/login" component={Login} />
                  <Route path="/products" component={Products} />
                  <Route path="/insert/product" component={Addproduct} />
                  
                  <Route path="/productupdate/:id" component={Updateproduct} />
                  <Route path="/logout" component={logout}/>
                  <Route path="/show/product" component={Productcustomeer} />
                  <Route path="/product/single/:id" component={viewsingle} />
                  <Route path="/show/users" component={ViewUser} />
                  <Route path="/show/contact" component={Viewcontactus} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route path="/user/single/:id" component={viewsingleuser}/>
                  <Route path="/insert/contact" component={Contactus}/>
                  <Route path="/services" component={services}/>
                

                  </Switch>
               </BrowserRouter>
            
        )
    }
}

export default Container