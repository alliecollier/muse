import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { fetchMuseumsThunk } from '../store/museums'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

class Map extends React.Component {

  bostonCoords = [42.361145, -71.057083];

  async componentDidMount() {
    await this.props.getMuseums();
    this.forceUpdate();
  }

  renderMarkers () {

    let museumMarkers = [];
    for (let i = 0; i < this.props.museums.length; i++) {
      let museum = this.props.museums[i];
      let marker = (
      <Marker key={i} position={[museum.latitude, museum.longitude]}>
        <Popup >
          <Link to={`/museums/${museum.id}`}>
            {museum.name}
          </Link>
        </Popup>
      </Marker>
      )
      museumMarkers.push(marker);
    }
    return museumMarkers;
  }

  render() {
    console.log('render')

    return (
      <div id="mapid">
        <Typography variant="h4" component="h3" color="secondary" align="center" fontWeight="fontWeightBold" m={2} >
          <Box fontWeight="fontWeightBold" m={1}>
            LET'S GET INSPIRED:
          </Box>
        </Typography>
        <MapContainer center={this.bostonCoords} zoom={14} scrollWheelZoom={false} width={300} height={200}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            accessToken="pk.eyJ1IjoiMTBhY29sbGllciIsImEiOiJja3M5bzJveW4wMDM4MnBwaWU4bXY3MHFrIn0.4YP3DS3_isE3fCRYd5iR3g"
          />
        {this.renderMarkers()}
        </MapContainer>
      </div>
    )
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
