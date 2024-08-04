import React from 'react';
import { useSelector } from 'react-redux';
import { useGetCurrentConditionsQuery } from '../../services/weatherApi';

const CurrentConditions = () => {
    const location = useSelector((state) => state.search.location);
    const metric = useSelector((state) => state.metric.isCelsius);

    const { data: currentConditionsData, error: currentConditionsError, isLoading: isCurrentConditionsLoading } = useGetCurrentConditionsQuery(
        location?.locationKey,
        { skip: !location?.locationKey }
    );

    if (!location?.locationKey) {
        return null;
    }

    if (isCurrentConditionsLoading) return <p>Loading current conditions...</p>;
    if (currentConditionsError) return <p>Error: {currentConditionsError.message}</p>;

    return (
        <div className="col mt-2">
            <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                    <h5 className="my-0 fw-normal">Current Conditions</h5>
                </div>
                <div className="card-body">
                    <ul className="list-unstyled mt-3 mb-4">
                        {currentConditionsData?.map((condition) => (
                            <li key={condition.LocalObservationDateTime}>
                                <h1 className="card-title pricing-card-title">
                                    {metric
                                        ? `${condition.Temperature.Metric.Value} ${condition.Temperature.Metric.Unit}`
                                        : `${condition.Temperature.Imperial.Value} ${condition.Temperature.Imperial.Unit}`}
                                </h1>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CurrentConditions;