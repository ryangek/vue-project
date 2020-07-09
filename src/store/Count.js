const countState = {
  count: 0
}

const countMutations = {
  countIncretment (state) {
    state.count += 1
  }
}

export {
  countMutations,
  countState
}
