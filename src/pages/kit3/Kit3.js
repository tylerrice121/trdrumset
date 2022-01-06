import { StyledKit3 } from "./Kit3Elements";
import Snare from '../../drums/kit3/Snare.wav';
import Kick from '../../drums/kit3/Kick.mp3';
import Sn from '../../drums/kit3/808SN.mp3';
import Clap from '../../drums/kit3/Clap.mp3';
import HHClosed from '../../drums/kit3/HHClosed.mp3';
import HHOpen from '../../drums/kit3/HHOpen.mp3';

const Kit1 = () => {

    let context;
    let keyToSoundMap = {
        w: `${Snare}`,
        e: `${HHOpen}`,
        r: `${HHClosed}`,
        a: `${Kick}`,
        s: `${Sn}`,
        d: `${Clap}`,
    }

    function loadSound(url) {
        return window.fetch(url)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => {
            return new Promise((resolve, reject) => {
                context.decodeAudioData(arrayBuffer, (buffer) => {
                    resolve(buffer);
                }, (e) => { reject(e); })
            })
        })
    }

    async function initSoundMap() {
        Object.entries(keyToSoundMap).forEach(async entry => {
            await loadSound(entry[1]).then(audioBuffer => keyToSoundMap[entry[0]] = audioBuffer)
        })
    }

    async function init() {
        if (context) return;
        
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        context = new AudioContext();
        if (context.state !== 'running'){
            context.resume();
        }

        await initSoundMap();
    }

    const playSound = (buffer, time) => {
        if (typeof buffer !== 'object') return;

        const source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(context.destination);
        source.start(time);
    };

    const processInteraction = (letter) => {

        // ev.preventDefault()
        const sound = document.querySelector(`audio[data-key="${letter}"]`);
        if (!sound) return;

        context
            ? playSound(keyToSoundMap[letter])
            : sound.cloneNode().play();

        // trigger css
        
        const pad = document.getElementById(letter);
        pad.classList.add('play');

        const light = document.querySelector(`div[data-key="${letter}"]`)
        light.classList.add('playing');

        setTimeout(() => pad.classList.remove('play'), 100)
        setTimeout(() => light.classList.remove('playing'), 100)
    }

    document.addEventListener('keydown', async key => {
        await init();
        const letter = key.key.toLocaleLowerCase();
        processInteraction(letter)

    })

    let handled = false;

    document.addEventListener('touchstart', async ev => {
        await init();
        const letter = ((ev.target.closest('div') || {}).id || '').toLocaleLowerCase();
        if(ev.type === "touchstart") {
            handled = true;
            processInteraction(letter);
        } else {
            handled = false;
        }
    })

    document.addEventListener('click', async ev => {
        await init();
        const letter = ((ev.target.closest('div') || {}).id || '').toLocaleLowerCase();
        if (ev.type === "click" && !handled) {
            processInteraction(letter);
        } else {
            handled = false;
        }
    })

    return (
        <StyledKit3>
            <div className="flip">
                <h2>Welcome!</h2>
                <h3>Please turn your screen</h3>
            </div>
            <div className="allpads">
                <div className="pad1" >
                    <div id='w' className="innerpad" data-pad='1'>
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='w' data-pad='1'></div>
                    </div>
                </div>
                <div className="pad2">
                    <div id='e' data-pad='2' className="innerpad">
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='e' data-pad='2' ></div>
                    </div>
                </div>
                <div className="pad3">
                    <div id='r' className="innerpad" data-pad='3'>
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='r' data-pad='3'></div>
                    </div>
                </div>
                <div className="pad4">
                    <div id='a' className="innerpad" data-pad='4' >
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='a' data-pad='4' ></div>
                    </div>
                </div>
                <div className="pad5">
                    <div id='s' className="innerpad" data-pad='5'>
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='s' data-pad='5' ></div>
                    </div>
                </div>
                <div className="pad6">
                    <div id='d' className="innerpad" data-pad='6'>
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='d' data-pad='6'></div>
                    </div>
                </div>
            </div>
            <audio  preload="true" data-key='w' data-pad='1' src={Snare}></audio>
            <audio  preload="true" data-key='e' data-pad='2' src={HHOpen}></audio>
            <audio  preload="true" data-key='r' data-pad='3' src={HHClosed}></audio>
            <audio  preload="true" data-key='a' data-pad='4' src={Kick}></audio>
            <audio  preload="true" data-key='s' data-pad='5' src={Sn}></audio>
            <audio  preload="true" data-key='d' data-pad='6' src={Clap}></audio>

        </StyledKit3>
    );
};

export default Kit1;