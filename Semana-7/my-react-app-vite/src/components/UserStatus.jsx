function UserStatus({ isLoggedIn }) {
    return isLoggedIn ? <p>Bienvenido al panel de control de usuario!</p> : <p>Aún no inicias sesión. Inicia sesión.</p>;
  }
  
  export default UserStatus;
  