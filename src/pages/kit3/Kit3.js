import { StyledKit3 } from "./Kit3Elements";
import Snare3 from '../../drums/kit3/Snare3.wav';
import Kick3 from '../../drums/kit3/Kick3.wav';
import Sn3 from '../../drums/kit3/808SN3.wav';
import Clap3 from '../../drums/kit3/Clap3.wav';
import HHClosed3 from '../../drums/kit3/HHClosed3.wav';
import HHOpen3 from '../../drums/kit3/HHOpen3.wav';


const Kit3 = () => {

    let context;
    let keyToSoundMap = {
        7: `${Snare3}`,
        8: `${HHOpen3}`,
        9: `${HHClosed3}`,
        10: `${Kick3}`,
        11: `${Sn3}`,
        12: `${Clap3}`,
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
            letter = 7
        }
        if (letter === 'e'){
            letter = 8
        }
        if (letter === 'r'){
            letter = 9
        }
        if (letter === 'a'){
            letter = 10
        }
        if (letter === 's'){
            letter = 11
        }
        if (letter === 'd'){
            letter = 12
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
        <StyledKit3>
            <div className="flip">
                <h2>Welcome!</h2>
                <h3>Please turn your screen</h3>
            </div>
            <div className="allpads">
                <div className="pad1" >
                    <div id='7' className="innerpad" data-pad='1'>
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='7' data-pad='1'></div>
                    </div>
                </div>
                <div className="pad2">
                    <div id='8' data-pad='2' className="innerpad">
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='8' data-pad='2' ></div>
                    </div>
                </div>
                <div className="pad3">
                    <div id='9' className="innerpad" data-pad='3'>
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='9' data-pad='3'></div>
                    </div>
                </div>
                <div className="pad4">
                    <div id='10' className="innerpad" data-pad='4' >
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='10' data-pad='4' ></div>
                    </div>
                </div>
                <div className="pad5">
                    <div id='11' className="innerpad" data-pad='5'>
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='11' data-pad='5' ></div>
                    </div>
                </div>
                <div className="pad6">
                    <div id='12' className="innerpad" data-pad='6'>
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='12' data-pad='6'></div>
                    </div>
                </div>
            </div>
            <audio  preload="true" data-key='7' data-pad='1' src={Snare3}></audio>
            <audio  preload="true" data-key='8' data-pad='2' src={HHOpen3}></audio>
            <audio  preload="true" data-key='9' data-pad='3' src={HHClosed3}></audio>
            <audio  preload="true" data-key='10' data-pad='4' src={Kick3}></audio>
            <audio  preload="true" data-key='11' data-pad='5' src={Sn3}></audio>
            <audio  preload="true" data-key='12' data-pad='6' src={Clap3}></audio>

        </StyledKit3>
    );
};

export default Kit3;