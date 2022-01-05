import styled from "styled-components";

export const StyledNav = styled.div`
    /* display: none; */
    position: fixed;
    z-index: 999;
    width: 80%;
    height: 30%;
    background: #212121;
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
    .up{
        color: #8a8688 !important;
        width: 200px;
        height: 30px; 
        bottom: 0;
        position: absolute;
        margin: 10px;
    }
`;