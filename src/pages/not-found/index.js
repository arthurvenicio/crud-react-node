import React from 'react';
import { Redirect } from 'react-router-dom';

const notFound = () => {
    return <Redirect to='/' />;
}

export default notFound;