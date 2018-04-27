import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Header from '../components/Header';
import HeaderButton from '../components/HeaderButton';
import { Filter } from '../components/icons';

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
  .add('to Storybook', () => {
    const state = 'selected';
    return (
      <Header>
        <HeaderButton state={'selected'}>
          <Filter />
        </HeaderButton>
        <HeaderButton />
        <HeaderButton />
        <HeaderButton />
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
