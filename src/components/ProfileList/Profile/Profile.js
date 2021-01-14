import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import './Profile.css';

const Profile = ({profile, viewProfile, index}) => {

    const {FirstName, LastName, UserName} = profile;
    return (
        <div className="profile">
            <div className="img-div">
                <FontAwesomeIcon icon={faUser} className="icon"/>
            </div>
            <div className="desc">
                <h1 className="heading">{FirstName} {LastName}</h1>
                <p className="bold">{UserName}</p>
            </div>
            <button className="btn" onClick={() => {viewProfile(index, "profile-page")}}>View Profile</button>
        </div>
    )
}

export default Profile;
