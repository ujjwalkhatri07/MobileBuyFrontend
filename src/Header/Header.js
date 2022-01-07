import { Component } from "react";
import {Link} from 'react-router-dom';
import { Nav, NavDropdown, Navbar, Form, Button, FormControl } from 'react-bootstrap';
import {useDispatch,useSelector } from 'react-redux'

import { FaWeightHanging,FaShoppingCart,FaBuysellads,FaBiking,FaStudiovinari, FaCartPlus,FaRss,FaSignInAlt,FaBlog,FaRegLightbulb,FaRegQuestionCircle,FaUserSecret,FaSuitcaseRolling,FaInfo,FaRegMoon,FaUserGraduate,FaTty, FaRibbon,FaPlus,FaShareSquare,  FaPlusCircle, FaWindowRestore, FaUsers, FaMedapps, FaTelegramPlane,FaUserCog } from 'react-icons/fa'
import {FcContacts,FcManager,FcPlus,FcButtingIn,FcTwoSmartphones,FcSmartphoneTablet,FcCurrencyExchange,FcViewDetails,FcOnlineSupport,FcAddDatabase,FcDonate,FcBullish,FcCallback,FcAbout,FcComboChart } from 'react-icons/fc'






class Header extends Component{


  logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
 
    localStorage.removeItem('firstname')
    window.location.href = '/'
  }


 
    render(){
      if(localStorage.getItem('token') && localStorage.getItem('user_role')=="Admin"){



        var menu=


        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
         
        </Nav>
        <Form inline>
            <Nav.Link href="/products/all">Products</Nav.Link>
            <Nav.Link href="/insert/product"><FcAddDatabase/>Add Products</Nav.Link>
            <Nav.Link href="/show/users"><FcManager/>Users</Nav.Link>
            <Nav.Link href="/show/contact"><FcButtingIn/>Subscribers</Nav.Link>
       
            <Nav.Link eventKey={2} href="/user/single/:id">{localStorage.getItem('firstname')}<FcManager/>
            </Nav.Link>
            {/* <Nav.Link href="/logout"><FaShareSquare/>Logout</Nav.Link> */}
            <Button Link to="/logout" className="btn btn-danger" onClick={this.logout}><FaShareSquare/> Log out</Button>
        
  
      </Form>
      </Navbar.Collapse>
       
      }
      else if(localStorage.getItem('token') && localStorage.getItem('user_role')=="User"){
        
        
        var menu=
  
        <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="mr-auto">

        </Nav>
        <Form inline>


            <Nav.Link href="/show/product"><FcTwoSmartphones/>Products</Nav.Link>
            {/* <Nav.Link href="/show/product"><FaShoppingCart/>Cart</Nav.Link> */}
            <Nav.Link href="/insert/contact"><FcOnlineSupport/> Subscribe Us</Nav.Link>
        
            
   
            {/* <Nav.Link href="/logout">Logout</Nav.Link> */}
            <Nav.Link eventKey={2} href="/user/single/:id">{localStorage.getItem('firstname')}<FcManager/>
            </Nav.Link>
            <Button Link to="/logout" className="btn btn-danger" onClick={this.logout}><FaShareSquare/> Log out</Button>
           
  

         
            </Form>
       </Navbar.Collapse>
      }
      else{
      
   

        var menu=
      
<Navbar.Collapse id="responsive-navbar-nav">
   
   <Nav className="mr-auto">


      <Nav.Link href="/services">Our Services <FcSmartphoneTablet/></Nav.Link>
    
</Nav>
    
    <Form inline>
  
    <Button href="/user/login" className="btn btn-success"><FaSignInAlt/> Sign in</Button>
    {/* <Button href="/user/login"><FaSignInAlt/> Sign in</Button> */}
  
  </Form>


  </Navbar.Collapse>

      }
    
        return(
      
          <Navbar collapseOnSelect expand="lg" bg="white" className="shadow">
        
 
          <Navbar.Brand href="/dashboard">
            <img src="/logo.jpg" clsassName="d-inline-block align-top" alt="logo" style={{height:'50px', width:'50px'}} />
   
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         
    
   
            {menu}
           
           
         
        </Navbar>
         


        )
    }
}

export default Header