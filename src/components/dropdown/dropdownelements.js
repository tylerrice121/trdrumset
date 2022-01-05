import styled from 'styled-components';

export const StyledDropdown = styled.div `
    height: 40px;
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
    transform: perspective(5px) rotateX(-1deg);
    left: 0;
    right: 0;
    margin: auto;
    .dropdown{
        color: #8a8688 !important;
        width: 200px;
        height: 30px;
    }
`;
