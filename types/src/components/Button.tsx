import React, { ReactEventHandler } from 'react';

type Props = {};

export default function Button({}: Props) {
  return (
    <>
      <button className="submit-button" type="submit">
        Sign Up
      </button>
    </>
  );
}
