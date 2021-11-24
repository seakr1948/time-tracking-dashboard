import './App.css';
import './css/utilities.css'

import Data from './data.json'
import { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import ActivityCard from './components/ActivityCard';

function App() {
  const data = Data;
  console.log(data)
  const timeframes = ["daily", "weekly", "monthly"]
  const [currentTimeFrame, setCurrentTimeFrame] = useState("daily")

  const setTimeframe = (TIMEFRAME) => {
    setCurrentTimeFrame(TIMEFRAME)
  }

  return (
    <div className="App flex">
      <div className="grid grid-container">
        <ProfileCard key="0" timeframes= {timeframes} setTimeframe = {setTimeframe}/>
        {
          data.map((data, index) =>
            <ActivityCard key={index} data={data} timeframe={currentTimeFrame} />
            )
        }
        
      </div>

      

      {/* <div>
        <h2>{data[0].title}</h2>
        <p>current: {data[0]["timeframes"][currentTimeFrame].current}</p>
        <p>previous: {data[0]["timeframes"][currentTimeFrame].previous}</p>
      </div> */}
    </div>
  );
}

export default App;
