import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Main from './pages/main';

export default function routes() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
