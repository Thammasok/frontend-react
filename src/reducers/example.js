export default function example(state = {}, action) {
  switch (action.type) {
    case 'GET_LOCAL_STORAGE':
      return {
        username1: action.username
      };
    case 'CLEAR_MESSAGES':
      return {};
    default:
      return state;
  }
}
