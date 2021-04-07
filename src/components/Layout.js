import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography';


export default function Layout({ children }) {
    return (
        <div>
            <GlobalStyles />
            <Typography />
            <Nav />
            {children}
            <Footer />
        </div>
    );
}
