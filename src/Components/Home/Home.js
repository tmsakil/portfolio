import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Conatct from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Conatct></Conatct>
            <Footer></Footer>
        </div>
    );
};

export default Home;