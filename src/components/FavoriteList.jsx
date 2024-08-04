import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLocation } from '../slices/searchSlice';
import { getFavorites, getFavoriteByKey, removeFavorite } from '../utils/favorites';

const FavoriteList = () => {
    const [favorites, setFavorites] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setFavorites(getFavorites());
    }, []);

    const handleRemoveFavorite = useCallback((locationKey) => {
        removeFavorite(locationKey);
        setFavorites(getFavorites());
    }, []);

    const handleShowLocation = useCallback((locationKey) => {
        const location = getFavoriteByKey(locationKey);
        if (location) {
            dispatch(setLocation(location));
            navigate('/');
        }
    }, [dispatch, navigate]);

    return (
        <div className="card-body">
            <ul className="list-unstyled mt-3 mb-4">
                {favorites.length > 0 ? (
                    favorites.map((favorite) => (
                        <li key={favorite.locationKey} className="card mt-3">
                            <div className="row card-body">
                                <div className="col-lg-9">
                                    <span>{favorite.locationName}</span>
                                </div>
                                <div className="col-lg-1">
                                    <button onClick={() => handleShowLocation(favorite.locationKey)} className="btn btn-info">Show</button>
                                </div>
                                <div className="col-lg-1">
                                    <button onClick={() => handleRemoveFavorite(favorite.locationKey)} className="btn btn-danger">Remove</button>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No items</p>
                )}
            </ul>
        </div>
    );
};

export default FavoriteList;