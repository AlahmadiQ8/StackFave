import React from 'react';
import { Star, Thumbsup, Eye } from '../../icons';

const iconStyles = { transform: 'scale(0.5)', transformOrigin: '0 50%' };
const shortenNum = num => {
  let numStr = num.toString();
  if (numStr.length > 3) {
    return `${numStr.slice(0, 3)}k`;
  }
  return numStr;
};

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
        <div className="ListItem__attr">
          <div>{shortenNum(favorite_count)}</div>
          <Star style={iconStyles} />
        </div>
        <div className="ListItem__attr">
          <div>{shortenNum(up_vote_count)}</div>
          <Thumbsup style={iconStyles} />
        </div>
        <div className="ListItem__attr">
          <div>{shortenNum(view_count)}</div>
          <Eye style={iconStyles} />
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
