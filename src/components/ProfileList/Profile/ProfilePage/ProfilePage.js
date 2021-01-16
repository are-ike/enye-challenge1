import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUser} from '@fortawesome/free-solid-svg-icons';
import Loader from '../../../assets/loader.gif';
import './ProfilePage.css';

const ProfilePage = ({profile, closeProfilePage}) => {
    const {FirstName, LastName, UserName, Email, PhoneNumber, Gender, CreditCardNumber,
    CreditCardType, LastLogin, PaymentMethod, Longitude, Latitude, DomainName, MacAddress} = profile;
    const [loading, setLoading] = useState(true);

    const style = {
        display: 'flex'
    }
    const styleLoader = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
        overflow: 'none'
    }
    setTimeout(()=>{ setLoading(false)}, 2000);
    
    return(
        <div className='wrapper'>
            {loading ? <div  className="App" style={styleLoader}>
                <img src={Loader} alt="loader" id="loader"/>
            </div>:
            <div style={style}>
                <button className="back-btn" onClick={() => { closeProfilePage(null, "home")}}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                    </button>
                <div className="container">
                    <div className="top-container">
                        <div className="avatar">
                            <FontAwesomeIcon icon={faUser} className="icon"/>
                        </div>
                        <div className="info">
                            <label>Firstname</label>
                            <p className="paragraph">{FirstName}</p>
                            <label>Lastname</label>
                            <p className="paragraph">{LastName}</p>
                            <label>Username</label>
                            <p className="paragraph">{UserName}</p>
                            <label>Gender</label>
                            <p className="paragraph">{Gender}</p>
                            <label>Email</label>
                            <p className="paragraph">{Email}</p>
                            <label>Phone number</label>
                            <p className="paragraph">{PhoneNumber}</p>
                        </div>
                    </div>
                    <div className="btm-container">
                        <div className="left">
                            <label>Credit Card Type</label>
                            <p className="paragraph">{CreditCardType}</p>
                            <label>Credit Card Number</label>
                            <p className="paragraph">{CreditCardNumber}</p>
                            <label>PaymentMethod</label>
                            <p className="paragraph">{PaymentMethod}</p>
                            <label>Last Login</label>
                            <p className="paragraph">{LastLogin}</p>
                        </div>
                        <div className="right">
                            <label>Longitude</label>
                            <p className="paragraph">{Longitude}</p>
                            <label>Latitude</label>
                            <p className="paragraph">{Latitude}</p>
                            <label>Domain Name</label>
                            <p className="paragraph">{DomainName}</p>
                            <label>Mac Address</label>
                            <p className="paragraph">{MacAddress}</p>
                        </div>
                    </div>
                        <label>URL</label>
                            <p className="paragraph">{profile.URL}</p>
                </div>

            </div>
                
            }

        </div>
        
    )
}

export default ProfilePage;