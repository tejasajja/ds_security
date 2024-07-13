import { FC, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <div className=' dark:bg-gradient-to-l from-zinc-800-800 via-slate-900 to-slate-950'>{children}</div>;
};

export default AuthLayout;