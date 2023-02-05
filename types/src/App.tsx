import './App.css';

import { useEffect, useState } from 'react';

import Input from './components/Input';
import Success from './components/Success';

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  useEffect(() => {
    const getMessage = async () => {
      try {
        const response = await fetch('/api');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log('error');
      }
    };
    getMessage();
  }, []);

  console.log('render');
  return (
    <div className="App">
      <div className="inputs">
        <Input text="Name :" forId="name">
          <input
            type="text"
            id="name"
            onChange={e => {
              setUser({ ...user, name: e.currentTarget.value });
            }}
          />
        </Input>
        <Input text="Email :" forId="email">
          <input
            type="email"
            id="email"
            onChange={e => {
              setUser({ ...user, email: e.currentTarget.value });
            }}
          />
        </Input>
        <Input text="Password :" forId="password">
          <input
            type="password"
            id="password"
            onChange={e => {
              setUser({ ...user, password: e.currentTarget.value });
            }}
          />
        </Input>
      </div>
      {user.name && user.email && user.password ? <Success /> : null}
    </div>
  );
}

export default App;
