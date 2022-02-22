import React, { FC } from 'react';

import Footer from '@/Layout/Footer';
import Header from '@/Layout/Header';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="w-screen h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
