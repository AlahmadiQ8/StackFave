import React from 'react';
import { storiesOf } from '@storybook/react';

import { Filter } from './';

storiesOf('icons/Filter', module)
  .addDecorator(story => (
    <div
      style={{
        width: '25px',
      }}
    >
      {story()}
    </div>
  ))
  .add('Main', () => <Filter />)
  .add('state == hovered', () => <Filter state="hovered" />)
  .add('state == selected', () => <Filter state="selected" />);
