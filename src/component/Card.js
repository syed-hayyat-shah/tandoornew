import React, { Component } from 'react';
import bgImage1 from '../images/img1.jpg' 
class Card extends Component {

    render() {
    return (
    // <h1>card</h1>

<section className="ftco-section bg-dark" id='menu'>
    	{/* <div className="container">
    		<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section ftco-animate text-center">
            <h2 className="mb-4" style={{color:"#fff"}}>Hot Pizza Meals</h2>
            <p style={{color:"#fff"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
    	</div> */}
		
    	<div className="container">
    		<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h2 className="mb-4">Our Menu Pricing</h2>
            <p className="flip"><span className="deg1"></span><span className="deg2"></span><span className="deg3"></span></p>
            <p className="mt-5" style={{color:'#fff'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
 
    	</div>
    	<div className="container-wrap">
    		<div className="row no-gutters d-flex">
    			<div className="col-lg-4 d-flex ftco-animate">
    				<div className="services-wrap d-flex">
    					<a href="#" className="img" style={{backgroundImage: `url(${bgImage1})`, width: "100%", height: "100%"}}></a>
    					<div className="text p-4">
    						<h3 style={{color:"#f2b200"}}>Italian Pizza</h3>
    						<p style={{color:'#fff'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia </p>
    						<p className="price" ><span>$2.90</span> </p>
    					</div>
    				</div>
    			</div>
    			<div className="col-lg-4 d-flex ftco-animate">
    				<div className="services-wrap d-flex">
    					<a href="#" className="img" style={{backgroundImage: `url(${bgImage1})`, width: "100%", height: "100%"}}></a>
    					<div className="text p-4">
    						<h3 style={{color:"#f2b200"}}>Greek Pizza</h3>
    						<p style={{color:'#fff'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
    						<p className="price" ><span>$2.90</span> </p>
    					</div>
    				</div>
    			</div>
    			<div className="col-lg-4 d-flex ftco-animate">
    				<div className="services-wrap d-flex">
    					<a href="#" className="img" style={{backgroundImage: `url(${bgImage1})`, width: "100%", height: "100%"}}></a>
    					<div className="text p-4">
    						<h3 style={{color:"#f2b200"}}>Caucasian Pizza</h3>
    						<p style={{color:'#fff'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
    						<p className="price" ><span>$2.90</span> </p>
    					</div>
    				</div>
    			</div>

    			<div className="col-lg-4 d-flex ftco-animate" >
    				<div className="services-wrap d-flex" >
    					<a href="#" className="img order-lg-last" style={{backgroundImage: `url(${bgImage1})`, width: "100%", height: "100%"}}></a>
    					<div className="text p-4" >
    						<h3 style={{color:"#f2b200"}}>American Pizza</h3>
    						<p style={{color:'#fff'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia </p>
    						<p className="price" ><span>$2.90</span> </p>
    					</div>
    				</div>
    			</div>
    			<div className="col-lg-4 d-flex ftco-animate">
    				<div className="services-wrap d-flex">
    					<a href="#" className="img order-lg-last" style={{backgroundImage: `url(${bgImage1})`, width: "100%", height: "100%"}}></a>
    					<div className="text p-4">
    						<h3 style={{color:"#f2b200"}}>Tomatoe Pie</h3>
    						<p style={{color:'#fff'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
    						<p className="price" ><span>$2.90</span> </p>
    					</div>
    				</div>
    			</div>
    			<div className="col-lg-4 d-flex ftco-animate">
    				<div className="services-wrap d-flex">
    					<a href="#" className="img order-lg-last" style={{backgroundImage: `url(${bgImage1})`, width: "100%", height: "100%"}}></a>
    					<div className="text p-4">
    						<h3 style={{color:"#f2b200"}}>Margherita</h3>
    						<p style={{color:'#fff'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
    						<p className="price" ><span>$2.90</span> </p>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>

    	<div className="container">
    		<div className="row justify-content-center  mt-5 pt-5">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h2 className="mb-4">Our Look</h2>
            <p className="flip"><span className="deg1"></span><span className="deg2"></span><span className="deg3"></span></p>
            <p className="mt-5" style={{color:'#fff'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
 
    	</div>
    </section>    );
  }
}


export default Card;
