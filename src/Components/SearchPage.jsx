import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// The styled elements
import { Wrapper, 
         Origins,
         SearchOriginBtn, 
         OriginMsj,
         NumberOfFlights,
         bounceAnimation,
         BouncyDiv } from './SearchPageStyled'

// The model
import flights from '../Data/flights-data'; 

// The list of flights
import FlightsList from './FlightsList';

// Abstract: respresents...
class Search extends Component {

  constructor(props){
    super(props);
    // Un array para almacenar los vuelos encontrados
    // que coinciden con la búsqueda del usuario
    this.state = { 
                  origin: "EPA",
                  searchResults: [], // un array de objs, cada objeto representa un vuelo
                  numberOfFlightsFound: null,
                 }

    this.getOriginValue = this.getOriginValue.bind(this);
    this.onSearchButtonClicked = this.onSearchButtonClicked.bind(this);
  }

  // los vuelos encontrados según la búsqueda del usuario
  flightsFound = []

  // la cantidad de vuelos encontrados
  numberOfFlightsFound = 0

  // el mensaje con la cantidad de vuelos entontrados
  numberOfFlightsMsj = ""

  // task: Una vez cliqueado el botón "search button"
  // realizar las siguientes 4 tareas:
  onSearchButtonClicked() {

    // 1/4. Borrar los vuelos encontrados anteriores
    this.flightsFound = []

    // 2/4. Actualizar el estado del componente
    this.setState({ 
                  origin: this.state.origin,
                  destination: this.state.destination,
                  searchResults: this.flightsFound,
                  numberOfFlightsFound: [],
    })

    // 3/4. Recorrer el array de "flights" para buscar los objetos
    // cuyas valores coincidan con los valores ingresados por el usuario
    // Ej: si el usuario ingresó "EPA" como origen y "COR" como destino
    // buscar en al array sólo los objetos que contengan esos valores
    for (const prop in flights) {

      // Obtiene el valor ingresado por el usuario en "origin"
      const datoIngresadoPorElUserEnOrigin = this.state.origin // NOTE: valor capturado desde <select>

      // Conditional (check the values)
      // Comprueba cual de los objetos 'flight' contiene el valor ingresado por el usuario en 'origin'
      // por ejemplo: si el usuario eligió 'origin: EPA' cual de los objetos contiene
      // en 'origin: EPA' y realiza con esos objetos coincidentes una serie de acciones
      if (flights[prop].origin === datoIngresadoPorElUserEnOrigin) {

        console.log(flights[prop]);

        // a: Puebla el array 'vuelosEncontrados' con los objetos que contienen
        // el origen que indicó el usuario
        this.flightsFound.push(flights[prop])

        // b: Actualiza el estado del componente (la propiedad 'searchResults')
        // pasándole este array con los vuelos encontrados
        this.setState( {searchResults: this.flightsFound})

      } 
    }

      // 4/4. Vuelos encontrados: 
      // De acuerdo a la cantidad de vuelos encontrados se ejecuta
      // un caso diferente que imprime un mensaje informando cuantos
      // vuelos se encontraron
      switch(this.flightsFound.length) {

      case 0:
        this.numberOfFlightsMsj = "No flights found."
        break;

      case 1:
        this.numberOfFlightsFound = 1
        this.numberOfFlightsMsj = "A flight has been found."
        break;

      default:
        this.numberOfFlightsFound = this.flightsFound.length
        this.numberOfFlightsMsj = `Have been found ${this.numberOfFlightsFound} flights.`
    }
    
  }

  // task: Obtener el valor de origen ingresado por el usuario
  getOriginValue() {
    var originValueSelected = document.getElementById("origin").value;
    this.setState( { origin: originValueSelected } );
    console.log(`El origen seleccionado es ${originValueSelected}`);
  }

  render() {

    return (
        <Wrapper>

          {/* Back button */}
          <Link to="/" style={{ textDecoration: "none", color:"black" }}>back to home</Link>

          {/* Elige tu aeropuerto de origen */}
          <OriginMsj>Select your origin</OriginMsj>

            {/* Origenes disponibles */}
            <Origins id="origin"
                     onChange={this.getOriginValue}>
              <option value="EPA">Buenos Aires (EPA)</option>
              <option value="MDZ">Mendoza (MDZ)</option>
              <option value="COR">Córdoba (COR)</option>
            </Origins>  

          {/* Search Flights Button */}
          <SearchOriginBtn onClick={this.onSearchButtonClicked}>
                            Search Flights
          </SearchOriginBtn>

          {/* Display the results*/}
          <BouncyDiv>
            <NumberOfFlights>
                {this.numberOfFlightsMsj}
            </NumberOfFlights>

            <FlightsList flights={this.state.searchResults}
                          key={this.state.searchResults.id} />
          </BouncyDiv>

        </Wrapper>
    
    )
  }
}

export default Search;


