import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';

import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
    {
        link: 'https://github.com/spaul2000',
        label: 'Github',
        icon: faGithub,
    },
    {
        link: 'https://www.instagram.com/spencerpaull/',
        label: 'Instagram',
        icon: faInstagram,
    },
    {
        link: 'https://www.linkedin.com/in/spencer-paul-585210123/',
        label: 'LinkedIn',
        icon: faLinkedinIn,
    },
    {
        link: 'https://mobile.twitter.com/s_paul42',
        label: 'Twitter',
        icon: faTwitter,
    },

];


const ContactIcons = () => (
    <ul className="icons">
        {data.map((s) => (
            <li key={s.label}>
                <a href={s.link}>
                    <FontAwesomeIcon icon={s.icon} />
                </a>
            </li>
        ))}
    </ul>
);

export default ContactIcons;