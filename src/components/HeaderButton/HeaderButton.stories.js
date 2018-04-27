import React from 'react';
import { storiesOf } from '@storybook/react';

import HeaderButton from './HeaderButton';

storiesOf('HeaderButton', module)
  .add('Main', () => <HeaderButton />)
  .add('state = selected', () => <HeaderButton state="selected" />)
  .add('state = hovered', () => <HeaderButton state="hovered" />);
