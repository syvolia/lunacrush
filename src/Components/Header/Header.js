import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
    fontSize: 18,
  },
});
function Header({dollarPrice,btcPrice}) {
  const classes = useStyles();
  return (
    <>
      <h1>DOGECOIN</h1>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2" >
            Price In:
        </Typography>
          <Typography className={classes.pos} color="textSecondary">
            ${dollarPrice}
        </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {btcPrice}BTC
        </Typography>

        </CardContent>

      </Card>
    </>
  )
}

export default Header
