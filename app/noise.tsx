'use client'

import ReactHowler from 'react-howler'
import {useState} from 'react';

export default function Noise() {

    const [playing, setPlaying] = useState(false);

    return <div>
        <ReactHowler
            src='noises/test.mp3'
            playing={playing}
            loop={true}
        />
        <button onClick={() => setPlaying(!playing)}>Play</button>
    </div>
}