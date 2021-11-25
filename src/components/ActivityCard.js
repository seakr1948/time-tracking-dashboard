import '../css/styling.css'
import '../css/activity-card.css'
import '../css/utilities.css'


import React from 'react'

const ActivityCard = ({data, timeframe}) => {

    console.log(data, timeframe)

    let title = data.title

    if (data.title === "Self Care"){
        title = "Self-Care"
    }


    return (
        <div className={`activity-card bg-image-${title} bg-clr-${title} grid`}>
            
            <div className="activity-content flex">
                <div className="activity-header flex">
                    <p>{data.title}</p>
                    <a target="_self">
                        <svg className="ellipse" width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                    </a>
                    
                </div>
                <div className="activity-tracker flex">
                    <p>
                        {data["timeframes"][timeframe].current}hrs
                    </p>
                    <p>
                        Last Week - {data["timeframes"][timeframe].previous}hrs
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ActivityCard
