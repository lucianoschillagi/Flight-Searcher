import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// City images
import buenosAiresImage from '../Assets/buenos-aires.webp';
import mendozaImage from '../Assets/mendoza.webp';
import cordobaImage from '../Assets/cordoba.jpg';

// The styled elements
import { Card,
         DestinationImage,
         FlightInfo,
         FligthNumber,
         Origin,
         Destination } from './FlightItemStyled';

// Redux
import { connect } from 'react-redux';
import { getSelectedFlight } from '../Redux/indexActions';


class FlightItem extends Component {

  // FlightCard props:
  // flight (Obj) - Un vuelo determinado (uno de los vuelos encontrados)
  // flightId (String) - El ID del vuelo en particular

  constructor(props){
    super(props);
    this.state = {
                   destination: "",
                   flightIdentifier: "" // enviar este valor a Redux store!
                 }
  }

  originName = null
  destinationName = null
  destinationImage = null

  render() {

    switch(this.props.flight.origin) {

      case "EPA":
       this.originName = "Buenos Aires"
          break;
 
       case "COR":
         this.originName = "Córdoba"
         break;
 
       case "MDZ":
         this.originName = "Mendoza"
         break;
 
       default:
     }

    switch(this.props.flight.destination) {

      case "EPA":
        this.destinationName = "Buenos Aires"
        this.destinationImage = buenosAiresImage
          break;

        case "COR":
          this.destinationName = "Córdoba"
          this.destinationImage = cordobaImage
          break;

        case "MDZ":
          this.destinationName = "Mendoza"
          this.destinationImage = mendozaImage
          break;

        default:
      }

    return (

        <Link to="/flights" style={{ textDecoration: "none" }}>
          <Card 
                    flight={this.props.flight} 
                    flightId={this.props.flightId}
                    onClick={() => this.props.getSelectedFlight(this.props.flight)}>
            
            {/* first row*/}
            <DestinationImage>
              <img src={this.destinationImage} 
                  alt=""
                  width="200"/>
            </DestinationImage>

            {/* second row*/}
            <FlightInfo>

              {/* flight number */}
              <FligthNumber>Flight Number: {this.props.flight.flightNo}</FligthNumber>

              {/* flight origin */}
              <Origin>
                Origin: {this.originName} ({this.props.flight.origin})
              </Origin>

              {/* flight destination */}
              <Destination>
                 Destination: {this.destinationName} ({this.props.flight.destination})
              </Destination>

            </FlightInfo>
          
          </Card>
        </Link>
     
    );
  }

}

// React-Redux 
const mapStateToProps = state => {
  return {
    selectedFlight: state.selectedFlight
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSelectedFlight: (flight) => dispatch(getSelectedFlight(flight))
  }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(FlightItem);

