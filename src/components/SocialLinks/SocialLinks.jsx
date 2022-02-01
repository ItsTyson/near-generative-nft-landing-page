import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import socialFace from '../../assets/images/social-face.svg';
import socialTwitter from '../../assets/images/social-twitter.svg';

const SocialLinks = ({ className }) => (
  <div className={`social-links ${className || ''}`}>
    <a href="https://opensea.io/account" rel="noopener noreferrer" target="_blank">
      <img
        width="24"
        height="24"
        className="social-links__item"
        src="./images/social-mintbase.png"
        alt="mintbase"
      />
    </a>
    <a
      href="https://discord.gg/QftaHx8uzA"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ReactSVG className="social-links__item" src={socialFace} />
    </a>
    <a
      href="https://twitter.com/CryptoGirls_Inc"
      rel="noopener noreferrer"
      target="_blank"
    >
      <ReactSVG className="social-links__item" src={socialTwitter} />
    </a>
  </div>
);

SocialLinks.propTypes = {
  className: PropTypes.string,
};

SocialLinks.defaultProps = {
  className: '',
};

export default SocialLinks;
