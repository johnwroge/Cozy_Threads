import React from "react";
import Header from "./Header";
import Cart from "./Cart";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen bg-gray-50 flex flex-col ${className}`}>
    <Header />
    <main className="flex-1">
      {children}
    </main>
    <Footer />
    <Cart />
  </div>
  );
};

export default Layout;
