import { StyledKit4 } from "./Kit4Elements";
import Snare4 from '../../drums/kit4/Snare4.wav';
import Kick4 from '../../drums/kit4/Kick4.wav';
import Sn4 from '../../drums/kit4/808SN4.wav';
import Clap4 from '../../drums/kit4/Clap4.wav';
import HHClosed4 from '../../drums/kit4/HHClosed4.wav';
import HHOpen4 from '../../drums/kit4/HHOpen4.wav';


const Kit4 = () => {

    let a = document.getElementsByClassName('audio')
    for (let i = 0; i < a.length; i++){
        a[i].volume = 0.2;
    }
    
    let context;
    let keyToSoundMap = {
        13: `${Snare4}`,
        14: `${HHOpen4}`,
        15: `${HHClosed4}`,
        16: `${Kick4}`,
        17: `${Sn4}`,
        18: `${Clap4}`,
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
        if (letter === 'w'){
            letter = 13
        }
        if (letter === 'e'){
            letter = 14
        }
        if (letter === 'r'){
            letter = 15
        }
        if (letter === 'a'){
            letter = 16
        }
        if (letter === 's'){
            letter = 17
        }
        if (letter === 'd'){
            letter = 18
        }
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
        <StyledKit4>
            <div className="flip">
                <h2>Welcome!</h2>
                <h3>Please turn your screen</h3>
            </div>
            <div className="allpads">
                <div className="pad1" >
                    <div id='13' className="innerpad" data-pad='1'>
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='13' data-pad='1'></div>
                    </div>
                </div>
                <div className="pad2">
                    <div id='14' data-pad='2' className="innerpad">
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='14' data-pad='2' ></div>
                    </div>
                </div>
                <div className="pad3">
                    <div id='15' className="innerpad" data-pad='3'>
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='15' data-pad='3'></div>
                    </div>
                </div>
                <div className="pad4">
                    <div id='16' className="innerpad" data-pad='4' >
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='16' data-pad='4' ></div>
                    </div>
                </div>
                <div className="pad5">
                    <div id='17' className="innerpad" data-pad='5'>
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='17' data-pad='5' ></div>
                    </div>
                </div>
                <div className="pad6">
                    <div id='18' className="innerpad" data-pad='6'>
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='18' data-pad='6'></div>
                    </div>
                </div>
            </div>
            <audio  preload="true" data-key='13' data-pad='1' src={Snare4}></audio>
            <audio  preload="true" data-key='14' data-pad='2' src={HHOpen4}></audio>
            <audio  preload="true" data-key='15' data-pad='3' src={HHClosed4}></audio>
            <audio  preload="true" data-key='16' data-pad='4' src={Kick4}></audio>
            <audio  preload="true" data-key='17' data-pad='5' src={Sn4}></audio>
            <audio  preload="true" data-key='18' data-pad='6' src={Clap4}></audio>

        </StyledKit4>
    );
};

export default Kit4;