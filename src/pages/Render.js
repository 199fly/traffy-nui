import React from 'react'

// Import components here as they are added
import Nav from './components/Nav'

function Render({ id, status, type, name, data }) {
    switch (name) {
        case 'nav':
            return <Nav data={data} />;
        case 'Component Name':
            // return component
            return null;
        default:

            return <div>{`Component Not Configured: ${name}`}</div>;
    }
}

export default Render;
