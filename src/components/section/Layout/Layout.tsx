import { ReactNode } from "react";

import { BlogProvider } from "@context/blog";

import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'


interface ILayout {
    children: ReactNode
}

function Layout({children}: ILayout) {
    return ( 
        <div className="container px-10 py-5">
            <Navbar />
            <BlogProvider>
                <Header />
                <div>
                    {children}
                </div>
            </BlogProvider>
            <Footer />
        </div>
     );
}

export default Layout;