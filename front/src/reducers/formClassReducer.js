const formClassReducer = (state = "startForm", action) => {
  switch (action.type) {
    case "SET_FORM_CLASS":
      return action.value
    default:
      return state
  }
}
export const setFormClass = value => {
  return {
    type: "SET_FORM_CLASS",
    value
  }
}
export default formClassReducer
