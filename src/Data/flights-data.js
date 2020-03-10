import flightsCOR from './epa-cor.json';
import flightsMDZ from './epa-mdz.json';

const flights = flightsCOR.flights.concat(flightsMDZ.flights);

export default flights;
