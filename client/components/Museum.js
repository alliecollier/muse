import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { fetchMuseumThunk } from '../store/museum';


class Museum extends React.Component {

  async componentDidMount() {
    await this.props.getMuseum(this.props.match.params.id);
  }
  render () {
    const museum = this.props.museum;

    if (!museum) {
      return "Loading"
    };

    return (
      <Card className={"root"} align="center">
        <CardActionArea>
          <CardMedia
            id="museum"
            // style={"width:254px; height:260px;"}
            image={museum.imgUrl}
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="h2" color="secondary">
              {museum.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {museum.location}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {museum.hours}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {museum.typeOf}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {museum.currentExhibits}
            </Typography>
            <Button variant="contained" color="primary" >
              Purchase Tickets
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    museum: state.museum
  }
}

const mapDispatch = (dispatch) => {
  return {
    getMuseum: (id) => dispatch(fetchMuseumThunk(id)),
  }
}

export default connect(mapState, mapDispatch)(Museum);
