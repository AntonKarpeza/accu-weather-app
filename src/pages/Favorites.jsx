import React from 'react';
import FavoriteList from '../components/FavoriteList'; // Import the new component

const Favorites = () => {
    return (
        <div className="row py-lg-3">
            <div className="col-lg-10 col-md-9 mx-auto">
                <h1 className="fw-light">Favorites</h1>
                <FavoriteList />
            </div>
        </div>
    );
};

export default Favorites;
