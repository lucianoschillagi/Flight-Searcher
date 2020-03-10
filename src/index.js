import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './Redux/store'

import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

// const routing = (
//   <Router>
//       <Switch>
//           <Route exact path="/" component={App}/>
//           <Route path="/search" component={Search}/>
//           <Route path="/flights" component={Flights}/>
//       </Switch>
//   </Router>
// );