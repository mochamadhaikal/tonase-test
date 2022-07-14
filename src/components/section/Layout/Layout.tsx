import { ReactNode } from "react";
import { useRouter } from 'next/router'

import { BlogProvider } from "@context/blog";

import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'


interface ILayout {
    children: ReactNode
}

function Layout({ children }: ILayout) {
    const router = useRouter();
    const { id } = router.query;

    return ( 
        <div className="container px-10 py-5">
            <Navbar />
            <BlogProvider>
                {!id && <Header /> }
                <div>
                    {children}
                </div>
            </BlogProvider>
            <Footer />
        </div>
     );
}

export default Layout;