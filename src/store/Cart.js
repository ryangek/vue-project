const cartState = {
  cart: [],
  cartCount: 0
}

const cartMutations = {
  addToCart (state, item) {
    const idx = state.cart.findIndex(function (value) {
      return value.ItemID === item.ItemID
    })
    if (idx === -1) {
      item.count = 1
      state.cart.push(item)
    } else {
      state.cart[idx].count += 1
      state.cart[idx] = Object.assign({}, state.cart[idx])
    }
    state.cartCount += 1
  },
  removeFromCart (state, idx) {
    if (idx > -1) {
      if (state.cart[idx].count === 1) {
        state.cart.splice(idx, 1)
      } else {
        state.cart[idx].count -= 1
        state.cart[idx] = Object.assign({}, state.cart[idx])
      }
      state.cartCount -= 1
    }
  }
}

const cartActions = {
  removeFromCart (context, idx) {
    console.log(context, idx)
    context.commit('removeFromCart', idx)
  }
}

export {
  cartActions,
  cartMutations,
  cartState
}
