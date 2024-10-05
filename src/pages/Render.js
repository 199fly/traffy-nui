import React from 'react'

// Import components here as they are added
import Nav from './components/Nav'
import Footer from './components/Footer'

function Render({ id, status, type, name, data }) {
    switch (name) {
        case 'nav':
            return <Nav data={data} />;
        case 'footer':
            // return component
            return <Footer data={data} />;
        default:

            return <div>{`Component Not Configured: ${name}`}</div>;
    }
}

export default Render;
