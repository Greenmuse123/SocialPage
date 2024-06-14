import React from 'react';
import { FaPaypal, FaInstagram } from 'react-icons/fa';
import { SiVenmo } from 'react-icons/si';
import profilePic from './assets/profile-pic.jpg';
import zelleIcon from './assets/zelle-icon.svg';
import cashAppIcon from './assets/cashapp-icon.svg';
import './ProfilePage.css'; // Import CSS file

const ProfilePage = () => {
  return (
    <div className="container">
      <img src={profilePic} alt="Profile" className="profilePic" />
      <p className="description">
  I'm a photographer! If you would like your photos printed at the club right now, it's $15.
  If you want your pic sent to you, a tip would be appreciated but not necessary.
  Please follow my Instagram so I can send it to you.
  <br />
  To pay via Zelle, use my phone number: 702-773-8839.
</p>

      <div className="linksContainer">
        <a href="https://venmo.com/Elias-Musleh" target="_blank" rel="noopener noreferrer" className="link">
          <SiVenmo className="icon" />
        </a>
        <a href="https://paypal.me/eliasmuse" target="_blank" rel="noopener noreferrer" className="link">
          <FaPaypal className="icon" />
        </a>
        <a href="https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiRUxJQVMiLCJhY3Rpb24iOiJwYXltZW50IiwidG9rZW4iOiI3MDI3NzM4ODM5In0=" target="_blank" rel="noopener noreferrer" className="link">
          <img src={zelleIcon} alt="Zelle" className="icon" />
        </a>
        <a href="https://cash.app/$eliasmusleh2" target="_blank" rel="noopener noreferrer" className="link">
          <img src={cashAppIcon} alt="Cash App" className="icon" />
        </a>
        <a href="https://instagram.com/thetipoftech" target="_blank" rel="noopener noreferrer" className="link">
          <FaInstagram className="icon" />
        </a>
      </div>
    </div>
  );
};

export default ProfilePage;
