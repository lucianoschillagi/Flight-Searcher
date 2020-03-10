import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// React-Redux library
import { connect } from 'react-redux';

// The model
import flights from '../Data/flights-data';

// The styled elements
import { Wrapper, 
         InboundFlights, 
         OutboundFlights } from './FlightsPageStyled';

// Imported components
import FlightItem from './FlightItem';
import FlightsList from './FlightsList';


class Flights extends Component {

  // el vuelo seleccionado en la página anterior
  selectedFlight = null

  // los vuelos de regreso disponibles para el vuelo seleccionado
  returnFlightsAvailable = []

  originName = []

  destinationName = []
  
  componentWillMount(){

    // Imprime el modelo (todos los vuelos cargados en la base de datos)
    console.log(flights);

    // Imprime el vuelo seleccionado en la página anterior
    console.log(`Origen del vuelo seleccionado ${this.props.selectedFlight["origin"]}`)

    switch(this.props.selectedFlight.origin) {

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

   switch(this.props.selectedFlight.destination) {

     case "EPA":
      this.destinationName = "Buenos Aires"
         break;

      case "COR":
        this.destinationName = "Córdoba"
        break;

      case "MDZ":
        this.destinationName = "Mendoza"
        break;

      default:
    }

    // Recorre el array de "flights" e imprime los valores
    // que se conrresponden con la clave "origin" 🔎
    for (const prop in flights) {

      // Busca si hay un objeto en el array "flights" que COINCIDA
      // con el vuelo seleccionado
      if (flights[prop].origin === this.props.selectedFlight["destination"] && flights[prop].destination === this.props.selectedFlight["origin"]) {
      
      // test
      console.log(`Hay en el array 'flights' un vuelo que corresponde
       con el origen del vuelo seleccionado y es el siguiente ${flights[prop].origin}`)

      // si pasa eso...
      // empujar esos objetos coincidentes al array "returnFlightsAvailable"
      this.returnFlightsAvailable.push(flights[prop])
      console.log(`Los vuelos de regreso disponibles son: ${this.returnFlightsAvailable.length}`)
      
       }
    }
  }   

  render() {

    return (

      <Wrapper>

        {/* To the previous page*/}
        <Link to="/search" style={{ textDecoration: "none" }}>
          <button>
            previous page
          </button>
        </Link>
       
       <OutboundFlights>
          <h1>Outbound Available Flights</h1>
          <FlightItem flight={this.props.selectedFlight}/>
       </OutboundFlights>

       <InboundFlights>
          <h1>Inbound Available Flights</h1>
          <FlightsList flights={this.returnFlightsAvailable}/>
       </InboundFlights>

        
      </Wrapper>
    )
  }

}

// React-Redux 
const mapStateToProps = state => {
  return {
    selectedFlight: state.selectedFlight
  }
}

export default connect(
    mapStateToProps
  )(Flights);

