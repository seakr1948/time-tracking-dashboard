import React from 'react'

import '../css/styling.css'
import '../css/profile-card.css'
import User from '../images/image-jeremy.png'

const ProfileCard = ({timeframes, setTimeframe}) => {
    console.log(User)
    return (
        <div className="profile-card">
            <div className="profile-header flex">
                <img src={User} alt="" srcset="" />
                <p>Report for <span className="name-text">Robert Jeremy</span></p>
            </div>
            <div className="timeframes flex">
                {
                timeframes.map(timeframe => 
                <a onClick ={() => {setTimeframe(timeframe)}}>{timeframe}</a>
                )}
            </div>
        </div>
    )
}

export default ProfileCard
