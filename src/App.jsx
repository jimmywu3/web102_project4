import { useState } from 'react';
import Query from './components/Query';
import Ban from './components/Ban';
import './App.css';

const App = () => {
    const [bannedNames, setBannedNames] = useState([]);
    const [bannedTypes, setBannedTypes] = useState([]);
    const [bannedWeights, setBannedWeights] = useState([]);
    const [bannedStats, setBannedStats] = useState([]);

    return (
        <div className='app'>
            <Query
                bannedNames={bannedNames}
                setBannedNames={setBannedNames}
                bannedTypes={bannedTypes}
                setBannedTypes={setBannedTypes}
                bannedWeights={bannedWeights}
                setBannedWeights={setBannedWeights}
                bannedStats={bannedStats}
                setBannedStats={setBannedStats}
            />
            <Ban
                bannedNames={bannedNames}
                setBannedNames={setBannedNames}
                bannedTypes={bannedTypes}
                setBannedTypes={setBannedTypes}
                bannedWeights={bannedWeights}
                setBannedWeights={setBannedWeights}
                bannedStats={bannedStats}
                setBannedStats={setBannedStats}
            />
        </div>
    );
};

export default App;
