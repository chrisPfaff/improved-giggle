export default function logout() {
  if (localStorage.getItem('token')) {
    localStorage.removeItem('token');
    return true;
  } else {
    return false;
  }
}
