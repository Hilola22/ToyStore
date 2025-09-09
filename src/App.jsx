import React, { memo } from 'react'
import AppRouter from './pages';

const App = () => {
  return (
    <AppRouter/>
  );
}

export default React.memo(App)