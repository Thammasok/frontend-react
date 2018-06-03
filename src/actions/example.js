import localStorage from 'localStorage'
// import config from '../config'

export function addLocalStorage(name) {
  return (dispatch) => {
    // localStorage.removeItem('example');
    // console.log(config.service_url)
    localStorage.setItem('example', JSON.stringify({
      username: name
    }))
  }
}

export function getLocalStorage() {
  return (dispatch) => {
    let localExample = JSON.parse(localStorage.getItem('example'));
    dispatch({
      type: 'GET_LOCAL_STORAGE',
      ...localExample
    })
  }
}