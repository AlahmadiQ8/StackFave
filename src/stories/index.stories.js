import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Header from '../components/Header';
import HeaderButton from '../components/HeaderButton';
import { Filter, Sort, Settings, Star } from '../components/icons';

storiesOf('0_Story', module)
  .addDecorator(story => (
    <div
      style={{
        width: '300px',
        margin: '0 auto',
      }}
    >
      {story()}
    </div>
  ))
  .add('Main', () => {
    const state = 'selected';
    return (
      <Header>
        <HeaderButton>
          <Filter />
        </HeaderButton>
        <HeaderButton>
          <Sort />
        </HeaderButton>
        <HeaderButton>
          <Settings />
        </HeaderButton>
        <HeaderButton>
          <Star />
        </HeaderButton>
      </Header>
    );
  })
  .add('Filter Selected', () => {
    const state = 'selected';
    return (
      <Header>
        <HeaderButton state={'selected'}>
          <Filter />
        </HeaderButton>
        <HeaderButton>
          <Sort />
        </HeaderButton>
        <HeaderButton>
          <Settings />
        </HeaderButton>
        <HeaderButton>
          <Star />
        </HeaderButton>
      </Header>
    );
  })
  .add('Sort Selected', () => {
    const state = 'selected';
    return (
      <Header>
        <HeaderButton>
          <Filter />
        </HeaderButton>
        <HeaderButton state={'selected'}>
          <Sort />
        </HeaderButton>
        <HeaderButton>
          <Settings />
        </HeaderButton>
        <HeaderButton>
          <Star />
        </HeaderButton>
      </Header>
    );
  })
  .add('Settings Selected', () => {
    const state = 'selected';
    return (
      <Header>
        <HeaderButton>
          <Filter />
        </HeaderButton>
        <HeaderButton>
          <Sort />
        </HeaderButton>
        <HeaderButton state={'selected'}>
          <Settings />
        </HeaderButton>
        <HeaderButton>
          <Star />
        </HeaderButton>
      </Header>
    );
  })
  .add('Star Selected', () => {
    const state = 'selected';
    return (
      <Header>
        <HeaderButton>
          <Filter />
        </HeaderButton>
        <HeaderButton>
          <Sort />
        </HeaderButton>
        <HeaderButton>
          <Settings />
        </HeaderButton>
        <HeaderButton state={'selected'}>
          <Star />
        </HeaderButton>
      </Header>
    );
  });

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
