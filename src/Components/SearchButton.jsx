import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, SearchButtonStyled } from './SearchButtonStyled';

class SearchButton extends Component {

  render() {
    return (
      <Wrapper>
        <Link to="/search">
          <SearchButtonStyled>
            Search Flights
          </SearchButtonStyled>
        </Link>
      </Wrapper>
    )
  }
}

export default SearchButton;




