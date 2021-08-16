import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { fetchMuseumThunk, setFavoriteThunk } from '../store/museum';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Reviews from './Reviews'


class Museum extends React.Component {

  constructor(props) {
    super(props)
    this.state = {favorite: false};
  }

  async componentDidMount() {
    await this.props.getMuseum(this.props.match.params.id);
  }

  handleFavorite = async (id) => {
    await fetch('/museums/:id', id)
  }

  toggleFavorite () {
    const nextState = !this.state.favorite;
    console.log("Toggling state from", this.state.favorite, " to be ", nextState)
    this.props.setFavorite(this.props.userId, nextState);
    this.setState({favorite: nextState});
  }

  render () {
    const museum = this.props.museum;

    if (!museum) {
      return "Loading"
    };

    let favoriteElement;
    if (this.state.favorite) {
      favoriteElement = <FavoriteIcon color='secondary' onClick={() => this.toggleFavorite()}/>;
    }
    else {
      favoriteElement = <FavoriteBorderIcon color='secondary' onClick={() => this.toggleFavorite()}/>;
    }


    return (
      <Card className={"root"} align="center">
        <CardActionArea>
          <CardMedia
            id="museum"
            image={museum.imgUrl}
          />
          <CardHeader
            action={
              <IconButton onClick={() => console.log('favorite', museum.id)}>
                {favoriteElement}
              </IconButton>
            }
            title={museum.name}
          />
          <CardContent className="museum-info-wrapper">
            <Typography variant="body2" color="textSecondary" component="p">
              Location: {museum.location}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Hours: {museum.hours}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {museum.typeOf}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" >
              Current Exhibits: {museum.currentExhibits}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className="purchase-button"
              endIcon={<KeyboardArrowRightIcon />}
            >
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
    museum: state.museum,
    userId: state.auth.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    getMuseum: (id) => dispatch(fetchMuseumThunk(id)),
    setFavorite: (userId, museumId, isFavorite) => (setFavoriteThunk(userId, museumId, isFavorite))
  }
}

export default connect(mapState, mapDispatch)(Museum);
