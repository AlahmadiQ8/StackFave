import React from 'react';
import { storiesOf } from '@storybook/react';

import { Filter, Sort, Settings, Star } from './';

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

storiesOf('icons/Sort', module)
  .addDecorator(story => (
    <div
      style={{
        width: '25px',
      }}
    >
      {story()}
    </div>
  ))
  .add('Main', () => <Sort />)
  .add('state == hovered', () => <Sort state="hovered" />)
  .add('state == selected', () => <Sort state="selected" />);

storiesOf('icons/Settings', module)
  .addDecorator(story => (
    <div
      style={{
        width: '25px',
      }}
    >
      {story()}
    </div>
  ))
  .add('Main', () => <Settings />)
  .add('state == hovered', () => <Settings state="hovered" />)
  .add('state == selected', () => <Settings state="selected" />);

storiesOf('icons/Star', module)
  .addDecorator(story => (
    <div
      style={{
        width: '25px',
      }}
    >
      {story()}
    </div>
  ))
  .add('Main', () => <Star />)
  .add('state == hovered', () => <Star state="hovered" />)
  .add('state == selected', () => <Star state="selected" />);
