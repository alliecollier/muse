import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

class RotatingArt extends React.Component {

  constructor(props) {
    super(props);
    this.state = {art: null};
  }

  async componentDidMount() {
    let clientID = '0e5153117ba696f311c4';
    let clientSecret = '91ba21439b1f999bd4f7989fa1aeb309';
    let apiUrl = 'https://api.artsy.net/api/tokens/xapp_token';

    let tokenResponse = await axios.post(apiUrl, { client_id: clientID, client_secret: clientSecret });
    let token = tokenResponse.data.token;

    let headers = {
      'X-Xapp-Token': token,
      'Accept': 'application/vnd.artsy-v2+json'
    }
    let params = { size: 100 };

    console.log("tokenResponse", tokenResponse);
    console.log("token", token);


    let artResponse = await axios.get('https://api.artsy.net/api/artworks', {headers: headers, params: params});
    const randomNum = Math.floor(Math.random() * 100);
    this.setState({art: artResponse.data._embedded.artworks[randomNum]});

    console.log("artResponse", artResponse);
  }

  render() {
    if (!this.state.art) {
      return <h3>Loading Art</h3>;
    }

    const artUrl = this.state.art._links.thumbnail.href
    return (
      <Card className={"root"} align="center">
        <CardActionArea>
          <CardMedia
            id="art"
            // style={"width:254px; height:260px;"}
            image={artUrl}
            title="TODO get title"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.state.art.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Artists name
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default RotatingArt;
