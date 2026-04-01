import './Ban.css';

const Ban = ({
    bannedNames,
    setBannedNames,
    bannedTypes,
    setBannedTypes,
    bannedWeights,
    setBannedWeights,
    bannedStats,
    setBannedStats,
}) => {
    const removeFromList = (item, list, setList) => {
        setList(list.filter((i) => i !== item));
    };

    return (
        <div className="ban-container">
            <h2>Ban List</h2>

            {bannedNames.length > 0 && (
                <div className="ban-category">
                    <h3>Names</h3>
                    <div className="ban-items">
                        {bannedNames.map((name) => (
                            <button
                                key={name}
                                className="ban-button"
                                onClick={() =>
                                    removeFromList(
                                        name,
                                        bannedNames,
                                        setBannedNames,
                                    )
                                }
                            >
                                {name} ✕
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {bannedTypes.length > 0 && (
                <div className="ban-category">
                    <h3>Types</h3>
                    <div className="ban-items">
                        {bannedTypes.map((type) => (
                            <button
                                key={type}
                                className="ban-button"
                                onClick={() =>
                                    removeFromList(
                                        type,
                                        bannedTypes,
                                        setBannedTypes,
                                    )
                                }
                            >
                                {type} ✕
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {bannedWeights.length > 0 && (
                <div className="ban-category">
                    <h3>Weights (Pokemon won't be heavier than these)</h3>
                    <div className="ban-items">
                        {bannedWeights.map((weight) => (
                            <button
                                key={weight}
                                className="ban-button"
                                onClick={() =>
                                    removeFromList(
                                        weight,
                                        bannedWeights,
                                        setBannedWeights,
                                    )
                                }
                            >
                                {weight} ✕
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {bannedStats.length > 0 && (
                <div className="ban-category">
                    <h3>Stats (Pokemon won't have lower stats than these)</h3>
                    <div className="ban-items">
                        {bannedStats.map((stat) => (
                            <button
                                key={stat}
                                className="ban-button"
                                onClick={() =>
                                    removeFromList(
                                        stat,
                                        bannedStats,
                                        setBannedStats,
                                    )
                                }
                            >
                                {stat} ✕
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Ban;
