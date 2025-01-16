import { useState } from 'react'
import UserStatus from './components/UserStatus';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <h1>Renderizado Condicional</h1>
      <UserStatus isLoggedIn={true} />
    </div>
  );
}

export default App;
