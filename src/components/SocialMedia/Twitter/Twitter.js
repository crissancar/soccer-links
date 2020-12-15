import React from 'react';
import {ReactComponent as TwitterIcon} from "../../../assets/img/svg/twitter.svg";

import './Twitter.scss';

export default function Twitter(props) {
    const {twitterLink} = props;
    return (
        <div className="social-media">
            <a
            href={twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            >
                <TwitterIcon/>
            </a>
        </div>
    )
}
