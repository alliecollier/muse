import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { IconButton } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';

export default function Reviews ({ review }) {
  console.log(review)
  console.log(review.museum)

  const actualReview = review.review
  const museum = review.museum

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar src='avatar.jpeg' />
          }
          action={
            <IconButton onClick={() => console.log('delete', actualReview.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={museum}
          subheader={actualReview.rating}
        />
        <CardContent>
          <Typography variant='body2' color="textSecondary" >
            {actualReview.review}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

