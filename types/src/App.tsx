import './App.css';

import { useEffect, useState } from 'react';

import Button from './components/Button';
import Input from './components/Input';
import Success from './components/Success';

function App() {
  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
  };
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

  return (
    <div className="App">
      <div className="inputs">
        <form onSubmit={handleClick}>
          <Input text="Name :" forId="name">
            <input type="text" name="name" id="name" />
          </Input>
          <Input text="Email :" forId="email">
            <input type="email" name="email" id="email" />
          </Input>
          <Input text="Password :" forId="password">
            <input type="password" name="password" id="password" />
          </Input>
          <Button />
        </form>
      </div>
    </div>
  );
}

export default App;
