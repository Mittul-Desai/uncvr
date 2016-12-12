import React from 'react';
import {Card, CardActions, CardMedia, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Rating from 'react-rating';



const CardInput = () => (

 

  <Card style={{width:'300px',position:'absolute',left:'39%',top:'10%'}}>
    <CardHeader
      title="Rate The Performance"
      />

    <CardText >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardMedia>
      <Rating  />
    </CardMedia>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" style={{float:'right'}} />
    </CardActions>
  </Card>
);


export default CardInput;