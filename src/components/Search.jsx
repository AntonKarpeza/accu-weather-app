import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLocation } from '../slices/searchSlice';
import { useGetLocationsQuery } from '../services/weatherApi';
import SelectSearchResult from './SelectSearchResult';
import UnitToggle from './UnitToggle';

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const { data: locationData, error: locationError, isLoading: isLocationLoading } = useGetLocationsQuery(search, {
        skip: !search,
    });

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearchClick = () => {
        setSearch(inputValue);
    };

    const handleSelect = (location) => {
        dispatch(setLocation(location));
    };

    useEffect(() => {
        if (locationData && locationData.length === 1) {
            handleSelect({
                locationKey: locationData[0].Key,
                locationName: locationData[0].LocalizedName
            });
            setInputValue("");
        }
    }, [locationData]);

    return (
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <input
                    type="text"
                    className="form-control mr-sm-2"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter city name"
                />
            </div>
            <div className="col-auto">
                <button className="btn btn btn-primary" onClick={handleSearchClick}>Search</button>
            </div>
            <div className="col-auto">
                <UnitToggle />
            </div>
            <div>
                {isLocationLoading && <p>Loading locations...</p>}
                {locationError && <p>Error: {locationError.message}</p>}
                {locationData && locationData.length > 1 && (
                    <SelectSearchResult
                        locationData={locationData}
                        onSelect={handleSelect}
                    />
                )}
            </div>
        </div>
    );
};

export default Search;