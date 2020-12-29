import React from 'react';

const ingredientContext = React.createContext({
  salad: 1,
  bacon: 1,
  cheese: 1,
  meat: 1,
});
export default ingredientContext;