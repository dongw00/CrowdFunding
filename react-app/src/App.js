import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppLayout from "./components/AppLayout"

function App({Component}) {
  return (
      <AppLayout>
        <Component />
      </AppLayout>
  );
}


export default App;
