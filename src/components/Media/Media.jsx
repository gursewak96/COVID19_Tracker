import React from "react";
import { Card, CardMedia } from "@material-ui/core";
import video from "../../videos/covid19.mp4";

function Media() {
  return (
    <Card>
      <CardMedia src={video} />
    </Card>
  );
}

export default Media;
