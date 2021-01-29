import { FC } from 'react';

const Avatar: FC = ({ children }) => {
  return (
    <div className="rounded-full h-24 w-24 flex items-center justify-center m-4 border-dashed border bg-blue-400">
      {children}
    </div>
  );
};

export default Avatar;
