import styled from 'styled-components';

export const StyledDropdown = styled.div `
    transform: perspective(5px) rotateX(-1deg);
    .wrapper{
        height: 50px;
        width: 700px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(52,50,51);
        background: radial-gradient(circle, rgba(52,50,51,1) 0%, rgba(57,56,57,1) 100%);
        position: absolute;
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
        -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
        -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
        z-index: 1 !important;
        left: 0;
        right: 0;
        margin: auto;
        position: absolute;
        .dropdown{
            color: #8a8688 !important;
            width: 200px;
            height: 30px;
        }
        @media only screen and (max-device-width: 768px) and (orientation: portrait){
            margin-top: 0px;
            width: 500px;
            z-index: 1;
        }
        @media only screen and (max-width: 768px){
            margin-top: 0px;
            width: 400px;
            z-index: 1;
        }
        @media only screen and (max-device-width: 768px) and (orientation: landscape) {
            margin-top: 0px;
            width: 500px;
            z-index: 1;
        }
}
`;
