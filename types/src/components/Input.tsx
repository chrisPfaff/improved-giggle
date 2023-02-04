import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  text: string;
  forId: string;
}>;

const Input = ({ text, children, forId }: Props) => {
  return (
    <div className="input">
      <label htmlFor={forId}>{text}</label>
      {children}
    </div>
  );
};

export default Input;
