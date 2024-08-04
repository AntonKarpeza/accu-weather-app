import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { addFavorite, removeFavorite, isFavorite } from '../utils/favorites';

const AddToFavorites = () => {
    const location = useSelector((state) => state.search.location);
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        if (location) {
            setIsFav(isFavorite(location.locationKey));
        }
    }, [location]);

    const handleAddFavorite = () => {
        if (location) {
            addFavorite(location.locationKey, location.locationName);
            setIsFav(true);
        }
    };

    const handleRemoveFavorite = () => {
        if (location) {
            removeFavorite(location.locationKey);
            setIsFav(false);
        }
    };

    if (!location) {
        return null;
    }

    return (
        <div className="row">
            <div className="col-md-9">
                <h3 className="fw-light">{location.locationName}</h3>
            </div>
            <div className="col-md-3">
                {isFav ? (
                    <button onClick={handleRemoveFavorite} className="btn btn-danger">Remove from Favorites</button>
                ) : (
                    <button onClick={handleAddFavorite} className="btn btn-success">Add to Favorites</button>
                )}
            </div>
        </div>
    );
};

export default AddToFavorites;