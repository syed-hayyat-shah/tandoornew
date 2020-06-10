import React, { Component } from 'react';
import { faHome, faFileExcel, faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';
import  {link} from 'smooth-scroll';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../images/logo.png';
import './style.css';

class MyComponent extends Component {

    constructor(props)
    {
      super(props)
      this.state ={
        navBackground: 'transparent',
        isSticky: false
      }
    }
  
    componentDidMount() {
        document.addEventListener("scroll", () => {
          const backgroundcolor = window.scrollY < 80 ? "transparent" : "#343a40";
          const isSticky = window.scrollY < 80 ? false : true;
          this.setState({ navBackground: backgroundcolor, isSticky: isSticky });
        });
      }

    render() {
    return (
    
             <div className="header-area " id="home"  style={this.state.isSticky ? {backgroundColor: this.state.navBackground, position: "fixed", top: 0, left: 0, right: 0}: {backgroundColor: this.state.navBackground}}>
            <div id="sticky-header" className="main-header-area">
                <div className="container-fluid p-2">
                    <div className="row align-items-center no-gutters">
                        <div className="col-xl-7 col-lg-7">
                            <div className="main-menu  d-none d-lg-block">
                                <nav>

                                    <ul id="navigation">
                                        <li><a className="active" href="home"> <AnchorLink href='#home'>Home</AnchorLink></a></li>
                                        <li><a href="Card"><AnchorLink href='#menu'>Menu</AnchorLink></a></li>
                                        <li><a href="about.html"><AnchorLink href='#video'>About</AnchorLink></a></li>
                                      
                                        <li><a href="contact.html"><AnchorLink href='#contact'>Contact</AnchorLink></a></li>
                                    </ul>
                                    <a href="#" ><img src={logo} style={{height:'100px', width:'200px', marginLeft:'80%', marginTop:'-70px'}}  ></img></a>

                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 d-none d-lg-block">
                            <div className="book_room">
                                {/* <div>
                                    <ul>
                                    <i className="fa fa-facebook"> </i>
                                    </ul>
                                </div> */}
                                <div className="socail_links">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <AnchorLink href='https://www.facebook.com/Jaddah-Sheermal-House-108065190700869'></AnchorLink>
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-google-plus"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="book_btn d-none d-xl-block">
                                    <a className="#" href="#">+92 345-0209493</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>

        
    
    );
  }
}


export default MyComponent;
