export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  export const updateCart = (state) => {
    state.itemsPrice = addDecimals(state.cartItems.reduce((acc,item)=> acc+item.price*item.qty, 0));
    //calculate shipping price 
    state.shippingPrice=addDecimals(state.itemsPrice>1000?0:100);
    //calculate tax price
    state.taxPrice =addDecimals(Number((0.15*state.itemsPrice).toFixed(2)));
    
    //calculate total price
    state.totalPrice=(
      Number(state.itemsPrice)+Number(state.shippingPrice)+Number(state.taxPrice)
    ).toFixed(2);
    localStorage.setItem('cart',JSON.stringify(state));
return state;  
}