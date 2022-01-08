import { StyledKit2 } from "./Kit2Elements";
import Snare2 from '../../drums/kit2/Snare2.wav';
import Kick2 from '../../drums/kit2/Kick2.wav';
import Sn2 from '../../drums/kit2/808SN2.wav';
import Clap2 from '../../drums/kit2/Clap2.wav';
import HHClosed2 from '../../drums/kit2/HHClosed2.wav';
import HHOpen2 from '../../drums/kit2/HHOpen2.wav';


const Kit2 = () => {

    let a = document.getElementsByClassName('audio')
    for (let i = 0; i < a.length; i++){
        a[i].volume = 0.2;
    }

    let context;
    let keyToSoundMap = {
        1: `${Snare2}`,
        2: `${HHOpen2}`,
        3: `${HHClosed2}`,
        4: `${Kick2}`,
        5: `${Sn2}`,
        6: `${Clap2}`,
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
            letter = 1
        }
        if (letter === 'e'){
            letter = 2
        }
        if (letter === 'r'){
            letter = 3
        }
        if (letter === 'a'){
            letter = 4
        }
        if (letter === 's'){
            letter = 5
        }
        if (letter === 'd'){
            letter = 6
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
        <StyledKit2>
            <div className="flip">
                <h2>Welcome!</h2>
                <h3>Please turn your screen</h3>
            </div>
            <div className="allpads">
                <div className="pad1" >
                    <div id='1' className="innerpad" data-pad='1'>
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='1' data-pad='1'></div>
                    </div>
                </div>
                <div className="pad2">
                    <div id='2' data-pad='2' className="innerpad">
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='2' data-pad='2' ></div>
                    </div>
                </div>
                <div className="pad3">
                    <div id='3' className="innerpad" data-pad='3'>
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='3' data-pad='3'></div>
                    </div>
                </div>
                <div className="pad4">
                    <div id='4' className="innerpad" data-pad='4' >
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='4' data-pad='4' ></div>
                    </div>
                </div>
                <div className="pad5">
                    <div id='5' className="innerpad" data-pad='5'>
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='5' data-pad='5' ></div>
                    </div>
                </div>
                <div className="pad6">
                    <div id='6' className="innerpad" data-pad='6'>
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='6' data-pad='6'></div>
                    </div>
                </div>
            </div>
            <audio className='audio' preload="true" data-key='1' data-pad='1' src={Snare2}></audio>
            <audio className='audio' preload="true" data-key='2' data-pad='2' src={HHOpen2}></audio>
            <audio className='audio' preload="true" data-key='3' data-pad='3' src={HHClosed2}></audio>
            <audio className='audio' preload="true" data-key='4' data-pad='4' src={Kick2}></audio>
            <audio className='audio' preload="true" data-key='5' data-pad='5' src={Sn2}></audio>
            <audio className='audio' preload="true" data-key='6' data-pad='6' src={Clap2}></audio>

        </StyledKit2>
    );
};

export default Kit2;