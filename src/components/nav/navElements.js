import styled from "styled-components";

export const StyledNav = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');

    font-family: 'Orbitron', sans-serif;
    position: absolute;
    z-index: 1;
    width: 800px;
    height: 300px;
    background: rgb(33,33,33);
    background: radial-gradient(circle, rgba(33,33,33,1) 0%, rgba(42,42,42,1) 100%);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: 0.3s ease-in-out;
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
    -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
    -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
    transform: perspective(100px) rotateX(-1deg);
    left: 0;
    right: 0;
    margin: auto;
    color: white;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    .display{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 600px;
        .led{
            width: 350px;
            height: 130px;
            -moz-box-shadow:    inset 0 0 10px #000000;
            -webkit-box-shadow: inset 0 0 10px #000000;
            box-shadow:         inset 0 0 10px #000000;
            background: rgb(25,172,237);
            background: radial-gradient(circle, rgba(25,172,237,1) 0%, rgba(36,113,147,1) 100%);
            font-family: 'Orbitron', sans-serif;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            h2{
                margin: 0;
            }
            h3{
                margin: 0;
            }
        }
    }
    .left{
        background: rgb(134,132,134);
        background: linear-gradient(270deg, rgba(134,132,134,1) 21%, rgba(156,156,156,1) 75%);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 40px;
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
        -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
        -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
        transform: perspective(5px) rotateY(-1deg);
        border-radius: 2px;
    }
    .right{
        background: rgb(134,132,134);
        background: linear-gradient(54deg, rgba(134,132,134,1) 21%, rgba(156,156,156,1) 75%);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 40px;
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
        -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
        -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
        transform: perspective(5px) rotateY(1deg);
        border-radius: 2px;
    }
    .up{
        color: #8a8688 !important;
        width: 200px;
        height: 30px; 
        bottom: 0;
        position: absolute;
        margin: 10px;
    }
    @media only screen and (max-device-width: 768px) and (orientation: portrait) {
        width: 500px;
        display: none;
    }
    @media only screen and (max-device-width: 768px) and (orientation: landscape) {
        width: 500px;
        .display{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 450px;
        .led{
            width: 250px;
            height: 130px;
            -moz-box-shadow:    inset 0 0 10px #000000;
            -webkit-box-shadow: inset 0 0 10px #000000;
            box-shadow:         inset 0 0 10px #000000;
            background: rgb(25,172,237);
            background: radial-gradient(circle, rgba(25,172,237,1) 0%, rgba(36,113,147,1) 100%);
            font-family: 'Orbitron', sans-serif;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            h2{
                margin: 0;
            }
            h3{
                margin: 0;
            }
        }
    }
    }
`;