import React from 'react'
import { connect } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { fetchMuseumsThunk } from '../store/museums'

class Map extends React.Component {

  bostonCoords = [42.361145, -71.057083];
  instituteOfContemporaryArt = [42.35289, -71.04332];


  async componentDidMount() {
    await this.props.getMuseums();
    this.forceUpdate();
  }

  renderMarkers () {

    let museumMarkers = [];
    for (let i = 0; i < this.props.museums.length; i++) {
      let museum = this.props.museums[i];
      let marker = (
      <Marker position={[museum.latitude, museum.longitude]}>
        <Popup>
          {museum.name}
        </Popup>
      </Marker>
      )
      museumMarkers.push(marker);
    }
    return museumMarkers;
  }

  render() {
    console.log('render')

    return <div id="mapid">
      <MapContainer center={this.bostonCoords} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          accessToken="pk.eyJ1IjoiMTBhY29sbGllciIsImEiOiJja3M5bzJveW4wMDM4MnBwaWU4bXY3MHFrIn0.4YP3DS3_isE3fCRYd5iR3g"
        />
       {this.renderMarkers()}
      </MapContainer>
    </div>
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    museums: state.museums
  }
}

const mapDispatch = (dispatch) => {
  return {
    getMuseums: () => dispatch(fetchMuseumsThunk()),
  }
}

export default connect(mapState, mapDispatch)(Map);
