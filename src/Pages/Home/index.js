import React from 'react';
import "./style.css"
import { ArtThumb } from '../../Components';
import { Header } from '../../Layout';

const Home = () => {
    const test = ['a', 'b', 'c', 'd', 'e', 'f']
    const links = ['All', 'Originals for sale', 'About the Artist', 'Contact Us', 'Instagram']
    return (
        <>
            <Header />
            <main>
                <section id='leftSection'>
                    {links.map(item => <h2>{item}</h2>)}
                </section>
                <section id='rightSection'>
                    {test.map(item => ArtThumb(item))}
                </section>
            </main>
        </>
    )
}

export default Home