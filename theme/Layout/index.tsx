import React, { FC } from 'react';

import Footer from '@/theme/Footer';
import Header from '@/theme/Header';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="w-screen h-screen">
            <Header />
            <main className="px-5 lg:px-0">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
