import React from 'react';
import { Star, Thumbsup, Eye } from '../../icons';

const ListItem = ({
  tags,
  view_count,
  favorite_count,
  up_vote_count,
  creation_date,
  link,
  title,
}) => {
  return (
    <div className="ListItem ">
      <div className="ListItem__meta">
        <div>
          <div>{favorite_count}</div>
          <Star />
        </div>
        <div>
          <div>{up_vote_count}</div>
          <Thumbsup />
        </div>
        <div>
          <div>{view_count}</div>
          <Eye />
        </div>
      </div>
      <div className="ListItem__content">
        <p>{title}</p>
        <div>{tags}</div>
      </div>
    </div>
  );
};

export default ListItem;
