import styled from 'styled-components';

export const StyledKit1 = styled.div `
    min-height: 98.5vh;

    padding: 2px;
    display: flex;
    flex-wrap: wrap;
    .allpads{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-evenly;
        border: 1px solid black;

        div{

          width: 32%;
          height: 48%;
          margin: 5px;
          padding: 0;

          position: relative;
          .innerpad{
            border-left: 1px solid black;
            border-top: 1px solid black;
            border-right: 1px solid black;
            border-bottom: 1px solid black;
            width: 100%;
            height: 100%;
            margin: 0;
            position: relative;
            padding: 0;
          } 
          .light{
            width: 100px;
            border-left: 1px solid black;
            border-top: 1px solid black;
            height: 50px;
            margin: 0;
            position: absolute;
            right: 0;
            bottom: 0;
            background-color: white;
            z-index: 1;
          }
        }

    }

`;