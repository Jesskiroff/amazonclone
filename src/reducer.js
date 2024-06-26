export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD TO BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
      };
  }
};
