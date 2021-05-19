import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core";
import './InfoBox.css'
function InfoBox({ title, percentage }) {
  return (
    <Card className="infoBox">
      <CardContent>
        {/* Title */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>


        <h2 className="infoBox__cases">
          {percentage}
        </h2>

      </CardContent>
    </Card>
  );

}

export default InfoBox
