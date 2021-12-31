import { StyledKit1 } from "./Kit1Elements";
import { useCallback, useEffect } from "react";
import Snare from '../../drums/kit1/Snare.wav';
import Kick from '../../drums/kit1/Kick.mp3';
import Sn from '../../drums/kit1/808SN.mp3';
import Clap from '../../drums/kit1/Clap.mp3';
import HHClosed from '../../drums/kit1/HHClosed.mp3';
import HHOpen from '../../drums/kit1/HHOpen.mp3';

const Kit1 = () => {

    const handleClick = useCallback((e) => {
        e.preventDefault()
        console.log(e.target.attributes['data-pad'].value)
        const audio = document.querySelector(`audio[data-pad="${e.target.attributes['data-pad'].value}"]`)
        const pad = document.querySelector(`.innerpad[data-pad="${e.target.attributes['data-pad'].value}"]`)
        const light = document.querySelector(`.lightbulb[data-pad="${e.target.attributes['data-pad'].value}"]`)
        if(!audio) return;
        audio.play();
        audio.currentTime = 0;
        pad.classList.add('play');
        light.classList.add('playing')
    }, []);

    const handleTouch = useCallback((e) => {
        e.preventDefault()
        console.log(e.target.attributes['data-pad'].value)
        const audio = document.querySelector(`audio[data-pad="${e.target.attributes['data-pad'].value}"]`)
        const pad = document.querySelector(`.innerpad[data-pad="${e.target.attributes['data-pad'].value}"]`)
        const light = document.querySelector(`.lightbulb[data-pad="${e.target.attributes['data-pad'].value}"]`)
        if(!audio) return;
        audio.play();
        audio.currentTime = 0;
        pad.classList.add('play');
        light.classList.add('playing')
    }, []);

    const keyPress = useCallback((e) =>{
        e.preventDefault();
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
        const innerpad = document.querySelector(`.innerpad[data-key="${e.keyCode}"]`)
        const pad = document.querySelector(`.lightbulb[data-key="${e.keyCode}"]`)
        if(!audio) return;
        
        audio.play();
        audio.currentTime = 0;
        pad.classList.add('playing');
        innerpad.classList.add('play');
    }, []);

    
    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        
        return () => {
            document.removeEventListener('keydown', keyPress)
        };
    }, [keyPress])
    
    const removeTransition = useCallback((e) => {
        if(e.propertyName !== 'transform') return;
        e.target.classList.remove('playing')
    }, []);

    const removePadTransition = useCallback((e) => {
        e.target.classList.remove('play')
    }, []);

    useEffect(()=> {
        const keys = document.querySelectorAll('.lightbulb');
        keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    }, [removeTransition])

    useEffect(()=> {
        const pads = document.querySelectorAll('.innerpad');
        pads.forEach(pad => pad.addEventListener('transitionend', removePadTransition));
        console.log(pads)
    }, [removePadTransition])

    return (
        <StyledKit1>
            <div className="allpads">
                <div className="pad1" >
                    <div className="innerpad" data-key='87' data-pad='1' onClick={handleClick} onTouchStart={handleTouch}>
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='87' data-pad='1'></div>
                    </div>
                </div>
                <div className="pad2">
                    <div data-key='69' data-pad='2' className="innerpad" onClick={handleClick}>
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='69' data-pad='2' ></div>
                    </div>
                </div>
                <div className="pad3">
                    <div className="innerpad" data-key='82' data-pad='3' onClick={handleClick}>
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='82' data-pad='3'></div>
                    </div>
                </div>
                <div className="pad4">
                    <div className="innerpad" data-pad='4' data-key='65' onClick={handleClick}>
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='65' data-pad='4' ></div>
                    </div>
                </div>
                <div className="pad5">
                    <div className="innerpad" data-key='83' data-pad='5' onClick={handleClick}>
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='83' data-pad='5' ></div>
                    </div>
                </div>
                <div className="pad6">
                    <div className="innerpad" data-key='68' data-pad='6' onClick={handleClick}>
                        
                    </div>
                    <div className='light'>
                        <div className="lightbulb" data-key='68' data-pad='6'></div>
                    </div>
                </div>
            </div>
            <audio  preload data-key='87' data-pad='1' src={Snare}></audio>
            <audio  preload data-key='69' data-pad='2' src={HHOpen}></audio>
            <audio  preload data-key='82' data-pad='3' src={HHClosed}></audio>
            <audio  preload data-key='65' data-pad='4' src={Kick}></audio>
            <audio  preload data-key='83' data-pad='5' src={Sn}></audio>
            <audio  preload data-key='68' data-pad='6' src={Clap}></audio>
        </StyledKit1>
    );
};

export default Kit1;