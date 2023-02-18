import './App.css';

import LoggedIn from './components/LoggedIn';
import SignUp from './components/SignUp';
import { checkAuth } from './utils/session';
import { useState } from 'react';

function App() {
  const [auth, setAuth] = useState(checkAuth());

  return <div className="App">{auth ? <LoggedIn /> : <SignUp />}</div>;
}

export default App;
