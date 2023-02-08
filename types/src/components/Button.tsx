import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { text: string };

export default function Button({ text, ...props }: Props) {
  return (
    <>
      <button {...props}>{text}</button>
    </>
  );
}
