import React, {Component} from 'react';
import { Wrapper, 
         BrandName, 
         MarketingText } from './WelcomePageStyled';

import SearchButton from './SearchButton';

class Welcome extends Component {

  render() {

    return (

      <Wrapper>

        {/* Brand name */}
        <BrandName>Flying</BrandName>

        {/* Marketing text */}
        <MarketingText>Find the best deals on flights.
            <br></br>Book your city for your fantastic  
            holidays with us now!
        </MarketingText>

        {/* Search button */}
        <SearchButton/>

      </Wrapper>

    )
  }

}

export default Welcome




