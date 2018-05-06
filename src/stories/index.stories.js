import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Header from '../components/Header';
import HeaderButton from '../components/HeaderButton';
import { Filter, Sort, Settings, Star } from '../components/icons';
import App from '../App';
import '../index.css';

storiesOf('Top Bar', module)
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
  })
  .add('Star loading', () => {
    const state = 'loading';
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
        <HeaderButton state={'loading'}>
          <Star />
        </HeaderButton>
      </Header>
    );
  });

storiesOf('AppContainer', module)
  .addDecorator(story => (
    <div
      style={{
        width: '300px',
        margin: '0 auto',
        height: '550px',
        border: '1px solid #d3d3d3',
      }}
    >
      {story()}
    </div>
  ))
  .add('state.open = true', () => {
    const props = { open: true };
    return <App {...props} />;
  })
  .add('state.open = false', () => {
    const props = { open: false };
    return <App {...props} />;
  });

storiesOf('View/Settings', module)
  .addDecorator(story => (
    <div
      style={{
        width: '300px',
        margin: '0 auto',
        height: '550px',
        border: '1px solid #d3d3d3',
      }}
    >
      {story()}
    </div>
  ))
  .add('Base', () => {
    const props = { open: true, view: 'Settings' };
    return <App {...props} />;
  })
  .add('loading', () => {
    const props = { open: true, view: 'Settings' };
    return <App {...props} />;
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
