import React, { useState } from 'react';

const SelectSearchResult = ({ locationData, onSelect }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleSelect = (location) => {
        onSelect(location);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="col mt-2">
            <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                    <h5 className="my-0 fw-normal">Select a location</h5>
                </div>
                <div className="card-body">
                    <ul className="list-unstyled mt-3 mb-4">
                        {locationData.map((location) => (
                            <li key={location.Key} className="card mt-3">
                                <div className="row card-body">
                                    <div className="col-lg-11">
                                        {location.LocalizedName} - {location.AdministrativeArea.LocalizedName}, {location.Country.LocalizedName}
                                    </div>
                                    <div className="col-lg-1">
                                        <button onClick={() => handleSelect({ locationKey: location.Key, locationName: location.LocalizedName })} class="btn btn btn-primary">Show</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SelectSearchResult;