import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleUnit } from '../slices/unitToggleSlice';

const UnitToggle = () => {
    const isCelsius = useSelector((state) => state.metric.isCelsius);
    const dispatch = useDispatch();

    const handleToggle = () => { 
        dispatch(toggleUnit());
    }

    return (
        <div className="form-check form-switch">
            <input
                className="form-check-input"
                type="checkbox"
                checked={isCelsius}
                onChange={handleToggle}
                id="unitToggle"
            />
            <label className="form-check-label" htmlFor="unitToggle">
                {isCelsius ? 'C' : 'F'}
            </label>
        </div>
    );
};

export default UnitToggle;