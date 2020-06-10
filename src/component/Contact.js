import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap'

import { PageHeader } from "react-bootstrap";
import Video1 from "../images/1.mp4";
import Video2 from "../images/2.mp4";
import Video3 from "../images/3.mp4";
import Video4 from "../images/4.mp4";
import Video5 from "../images/5.mp4";
import Video6 from "../images/6.mp4";





class MyContact extends Component{

render()
{
    return(
		<div id='video'>
        {/* // <Container>
        //     <Row>
        //         <Col xs="12" sm='6' md='6' lg='6'> */}
				<div style={{display: 'flex', flexDirection: "row"}}>
          			<video src={Video1} autoPlay="true" loop style={{width: "100%"}} />
          			<video src={Video2} autoPlay="true" loop style={{width: "100%"}} />
          			<video src={Video3} autoPlay="true" loop style={{width: "100%"}} />
          			<video src={Video4} autoPlay="true" loop style={{width: "100%"}} />
          			<video src={Video5} autoPlay="true" loop style={{width: "100%"}} />
          			<video src={Video6} autoPlay="true" loop style={{width: "100%"}} />
				</div>
				{/* // </Col>
                // <Col xs="12" sm='6' md='6' lg='6' style={{color:"#000"}}> */}
				{/* <ReactMapGL
				{...this.state.viewport}
				mapboxApiAccessToken="pk.eyJ1IjoiaGF5eWF0IiwiYSI6ImNrYjB1cjZoMjBib3Ayem10OWt1eGZsaGgifQ.ofW3WOh2xDtETc_lHzZDVA"
				mapStyle="mapbox://styles/hayyat/ckb0uulq60hol1ipbcdeo84ot"
				onViewportChange={(viewport) => this.setState({viewport})}
				
	            >

				<Marker latitude={this.state.lat} longitude={this.state.lng}>
                <i
                  style={{ color: "red", fontSize: "30px" }}
                  className="fa fa-map-marker"
                ></i>
              </Marker> 
			  </ReactMapGL> */}
			         {/* //         </Col>
        //     </Row>
        // </Container> */}
		</div>


        
    )
}
}

export default MyContact;
