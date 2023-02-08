import Button from './Button';
import logout from '../utils/logout';

function LoggedIn() {
  return (
    <div>
      <p>LoggedIn</p>
      <Button text={'Log out'} onClick={logout} type={'button'} />
    </div>
  );
}

export default LoggedIn;
