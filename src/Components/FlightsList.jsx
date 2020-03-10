import React, {Component} from 'react';
import FlightItem from './FlightItem';
 
class FlightsList extends Component {

  // FlightsList props:
  // flights ([Object]) - Contiene los vuelos encontrados en la búsqueda
  // key (String) - La clave que identifica cada objeto del array

  render() {

    return (
      <div>

        {
          this.props.flights.map((flight, index) => {
            return <FlightItem 
                      flight={flight}
                      key={index}
                      flightId={flight.id}
                    />
          })
        }

      </div>

    )
  }

}

export default FlightsList;