import React, { ReactNode } from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto mt-6 max-w-4xl px-4 md:px-8">{children}</div>;
};

export default PageWrapper;
