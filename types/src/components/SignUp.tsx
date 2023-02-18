import Button from './Button';
import Input from './Input';
import React from 'react';
type signUpData = {
  name: string;
  email: string;
  password: string;
};

const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  const apiCall = async ({ name, email, password }: signUpData) => {
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (data.message === 'success') {
        localStorage.setItem('token', data.hash);
        window.location.reload();
      } else {
        alert('Email already exists');
      }
    } catch (error) {
      console.log(error);
    }
  };
  apiCall(data as signUpData);
};

export default function SignUp() {
  return (
    <div>
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
          <Button
            text={'Sign-up'}
            className={'submit-button'}
            type={'submit'}
          />
        </form>
      </div>
    </div>
  );
}
