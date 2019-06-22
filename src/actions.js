export const ADD_MODEL = 'ADD_MODEL'

export function addComputer(selected) {
  return {
    type: ADD_MODEL,
    payload: selected
  }
}