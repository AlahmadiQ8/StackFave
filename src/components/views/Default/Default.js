import React from 'react';
import { Consumer } from '../../../index';
import ListItem from './ListItem';
import './index.css';

const Default = () => {
  return (
    <Consumer>
      {({ favorites }) => (
        <div className="View View__default">
          {favorites.length > 0 &&
            favorites
              // TODO: key={id}
              .map(props => <ListItem {...props} key={props.title} />)
              .reduce((prev, curr, i) => [prev, <hr key={i} />, curr])}
        </div>
      )}
    </Consumer>
  );
};

Default.propTypes = {};

Default.defaultProps = {};

export default Default;
