import React from "react";


interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen bg-gray-50 flex flex-col ${className}`}>
    <main className="flex-1">
      {children}
    </main>
  </div>
  );
};

export default Layout;
