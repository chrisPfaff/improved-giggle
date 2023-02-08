export default function logout() {
  if (localStorage.getItem('token')) {
    localStorage.removeItem('token');
    window.location.reload();
    return true;
  } else {
    return false;
  }
}
