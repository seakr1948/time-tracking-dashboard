import React from 'react'

import '../css/styling.css'
import '../css/profile-card.css'
import User from '../images/image-jeremy.png'

const ProfileCard = ({timeframes, setTimeframe, selected}) => {
    console.log(User)
    return (
        <div className="profile-card">
            <div className="profile-header flex">
                <img src={User} alt="" srcset="" />
                <p>Report for <span className="name-text">Jeremy Robson</span></p>
            </div>
            <div className="timeframes flex">
                {
                timeframes.map((timeframe, index) => 

                <button target="_self" id={selected === index ? 'selected' : ''} onClick ={() => {setTimeframe(timeframe, index)}}>{timeframe}</button>
                )}
            </div>
        </div>
    )
}

export default ProfileCard
