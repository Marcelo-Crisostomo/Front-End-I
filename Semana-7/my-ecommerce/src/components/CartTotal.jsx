const CartTotal = ({ cart }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0); // Calcula el total sumando los precios
    return <h3>Total: ${total}</h3>;
  };
  
  export default CartTotal;
  