import './App.css';

import LoggedIn from './components/LoggedIn';
import SignUp from './components/SignUp';
import { checkAuth } from './utils/session';
import { useState } from 'react';

function App() {
  const [auth, setAuth] = useState(checkAuth());
  // useEffect(() => {
  //   const getMessage = async () => {
  //     try {
  //       const response = await fetch('/api/help');
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.log('error');
  //     }
  //   };
  //   getMessage();
  // }, []);

  return <div className="App">{auth ? <LoggedIn /> : <SignUp />}</div>;
}

export default App;
