import React from "react";
import Profile from './Profile/Profile';

const ProfileList = ({profiles, viewProfile}) => {
    const style = {
        margin: '0',
        marginTop: '2rem',
        padding: '0'
    }
    return (
        <ul style={style}>
            {profiles.map((profile, i) => {
                //create post
                return <Profile profile={profile} viewProfile={viewProfile} index={i} key={i}/>
            })}
        </ul>
    )
    
}

export default ProfileList;