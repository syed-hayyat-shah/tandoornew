import React, { Component } from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';


import './style.css';

class MyFooter extends Component {

     

    render() {
    return (
    
        <footer className="ftco-footer ftco-section img" id='contact'>
    	<div className="overlay"></div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About Us</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate"><a href="#"><i  className="fa fa-facebook"></i></a></li>
                <li className="ftco-animate"><a href="#"><i  className="fa fa-facebook"></i></a></li>
                <li className="ftco-animate"><a href="#"><i  className="fa fa-facebook"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5 mb-md-5">
            
          </div>
          <div className="col-lg-2 col-md-6 mb-5 mb-md-5">
             {/* <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="py-2 d-block">Cooked</a></li>
                <li><a href="#" className="py-2 d-block">Deliver</a></li>
                <li><a href="#" className="py-2 d-block">Quality Foods</a></li>
                <li><a href="#" className="py-2 d-block">Mixed</a></li>
              </ul>
            </div> */}
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
	                <li><a href="#"><span className="icon icon-phone"></span><span className="text">+92 3450209493</span></a></li>
	                <li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
          <p>
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">syedgroup.org</a>
  </p>

          </div>
        </div>
      </div>
      
    </footer>
    

        
    
    );
  }
}


export default MyFooter;
