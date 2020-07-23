import React, { Component } from 'react'
import './Home.css'
import {  FaHandshake, FaCartArrowDown } from 'react-icons/fa'
import Footer from './Footer';
import NavBar from './NavBar';

class Home extends Component {
    render() {
        return (
                <div>
                <NavBar />
                
                <div>
                <h3 id='welcome'>Welcome To
        
                 ShopCentral
                <br></br>
                        <FaCartArrowDown id="homecart" color='rgb(225, 203, 78' size={200} />
                    </h3> 
                </div>
                    <Footer />
                </div>
        )
    }
}

export default Home