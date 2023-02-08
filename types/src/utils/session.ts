export function checkAuth() {
  console.log(localStorage.getItem('token'));
  if (localStorage.getItem('token')) {
    return true;
  } else {
    return false;
  }
}
