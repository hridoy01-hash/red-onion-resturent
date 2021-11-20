import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center text-danger">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link to="/">
            <button className="btn btn-primary">Back Home</button>
            </Link>
        </div>
    );
};

export default NotFound;