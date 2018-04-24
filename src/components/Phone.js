import React from 'react'
import { Link } from 'react-router-dom'
import { take } from 'ramda'
import { addPhoneToBasket } from '../AC'
import { connect } from 'react-redux'



import InfoOutline from '@material-ui/icons/InfoOutline'
import Button from 'material-ui/Button';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';

import { Grid } from 'material-ui'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';

const Phone = ({ phone, addPhoneToBasket }) => {


  return <Grid item >
    <Card style={{ width: 300 }}>
      <CardMedia style={{ height: 300 }}

        image={phone.image}
        title={phone.name}
      />
      <CardContent>
        <h4>${phone.price}</h4>
        <h5>
          {phone.name}
        </h5>
        <p>{take(60, phone.description)}...</p>
      </CardContent>
      <CardActions>
        <Button
          variant="raised"
          color="secondary"
          onClick={() => addPhoneToBasket(phone)}>
          <AddShoppingCart />
          Buy Now
        </Button>


        <Button
          variant="flat"
          color="default"
          component={Link} to={`/phones/${phone.name}`}
        >
          <InfoOutline />
          more info
        </Button>
      </CardActions>

    </Card>
  </Grid>
}




export default connect(null,
  { addPhoneToBasket }
)(Phone)