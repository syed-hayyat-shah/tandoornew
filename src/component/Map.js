import React, { Component } from 'react';
import ReactMapGL,{Marker} from 'react-map-gl';



// import './style.css';

class MyMap extends Component{
	state = {
		viewport: {
		  width: '100%',
		  height: "50vh",
		  longitude: 67.0461243,
		  latitude: 24.8266081,
		  zoom: 17
		
		},
		lat: 24.8266081,
		lng: 67.0461243
	  };
render()
{
    return(
		<div id="map">
			  {/* "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }, */}
        {/* // <Container>
        //     <Row>
        //         <Col xs="12" sm='6' md='6' lg='6'> */}
				{/* <div style={{display: 'flex', flexDirection: "row"}}>
          			<video src={Video1} autoPlay="true" loop style={{width: "100%"}} />
          			<video src={Video2} autoPlay="true" loop style={{width: "100%"}} />
          			<video src={Video3} autoPlay="true" loop style={{width: "100%"}} />
          			<video src={Video4} autoPlay="true" loop style={{width: "100%"}} />
          			<video src={Video5} autoPlay="true" loop style={{width: "100%"}} />
          			<video src={Video6} autoPlay="true" loop style={{width: "100%"}} />
				</div> */}
				{/* // </Col>
                // <Col xs="12" sm='6' md='6' lg='6' style={{color:"#000"}}> */}
				<ReactMapGL
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
			  </ReactMapGL>
			         {/* //         </Col>
        //     </Row>
        // </Container> */}
		</div>


        
    )
}
}

export default MyMap;
