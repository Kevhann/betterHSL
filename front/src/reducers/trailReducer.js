const trailReducer = (state = 0, action) => {
  switch (action.type) {
    case "SET_ACTIVE_TRAIL":
      return action.value
    default:
      return state
  }
}

export const setActiveTrail = value => {
  return {
    type: "SET_ACTIVE_TRAIL",
    value
  }
}

export default trailReducer
