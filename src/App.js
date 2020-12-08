import React from 'react';
import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/featured'
import VenueNfo from './components/venueNfo'
import Highlights from './components/Highlights'
import Pricing from './components/pricing'
import Location from './components/location'
import Footer from './components/header_footer/Footer'
import {Element} from 'react-scroll'

class App extends React.Component {
  render(){
  return (
    <div className="App" style={{height:"1400px",background:"cornflowerblue"}}>
      <Header />
      <Element name="Event"> <Featured /></Element>
      <Element name="Venue"> <VenueNfo /></Element>
      <Element name="Highlights"><Highlights /></Element>
      <Element name="Price"><Pricing /></Element>
      <Element name="Location"> <Location /></Element>
      <Footer />
    </div>
  );
}
}

export default App;
