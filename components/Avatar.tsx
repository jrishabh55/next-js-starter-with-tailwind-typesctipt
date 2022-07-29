import { FC } from 'react';

const Avatar: FC = ({ children }) => {
  return <div className="m-4 flex h-24 w-24 items-center justify-center rounded-full border border-dashed bg-blue-400">{children}</div>;
};

export default Avatar;
