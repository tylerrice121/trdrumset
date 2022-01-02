import styled from 'styled-components';

export const StyledKit1 = styled.div `
    height: 100vh;
    max-width: 100%;
    background-color: transparent;
    background: rgb(172,42,42);
    background: linear-gradient(270deg, rgba(172,42,42,1) 0%, rgba(143,25,29,1) 100%);
    padding: 2px;
    display: flex;
    flex-wrap: wrap;
    .allpads{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-evenly;
        /* border: 1px solid black; */
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: transparent;
        div{

          width: 32%;
          height: 48%;
          margin: 5px;
          padding: 0;

          position: relative;
          .innerpad{
            box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
            -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
            -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
            background: rgb(52,50,51);
            background: radial-gradient(circle, rgba(52,50,51,1) 0%, rgba(57,56,57,1) 100%);
            border-radius: 10px;
            width: 100%;
            height: 100%;
            margin: 0;
            position: relative;
            padding: 0;
            transition: all 0.07s;
          } 
          .play{
            transform: scale(1.01);
            background: rgb(52,50,51);
            background: radial-gradient(circle, #242224 0%, rgba(57,56,57,1) 100%);
          }
          .light{
            box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.28) inset;
            -webkit-box-shadow: 10px 10px 10px -10px rgba(0,0,0,0.28) inset;
            -moz-box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.28) inset;
            background: rgb(52,50,51) !important;
            border-top-left-radius: 5px;
            border-bottom-right-radius: 5px;
            width: 100px;
            height: 50px;
            margin: 0;
            position: absolute;
            right: 0;
            bottom: 0;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            .lightbulb{
              box-shadow: 1px 1px 5px -2px rgba(0,0,0,0.85) inset;
              -webkit-box-shadow: 1px 1px 5px -2px rgba(0,0,0,0.85) inset;
              -moz-box-shadow: 1px 1px 5px -2px rgba(0,0,0,0.85) inset;
              background: #8a8688 !important;
              border-radius: 3px;
              height: 15px;
              width: 50px;
              transition: all 0.07s;
            }
            .playing{
              transform: scale(1.2);
              background-color: #c0484a !important;
            }
          }
        }

    }
    @media only screen and (max-device-width: 769px) and (orientation: portrait){
      background-color: transparent;
      background: rgb(172,42,42);
      background: linear-gradient(270deg, rgba(172,42,42,1) 0%, rgba(143,25,29,1) 100%);
      padding: 2px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      min-width: 100vh;
      height: 100vw;
      .allpads{
          display: flex;
          flex-wrap: wrap;
          min-width: 100vh;
          height: 100vw;
          justify-content: space-evenly;
          align-items: center;
          padding-top: 0px;
          padding-bottom: 10px;
          background-color: transparent;
          div{
            width: 32%;
            height: 48%;
            margin: 5px;
            padding: 0;
            position: relative;
            .innerpad{
              box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
              -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
              -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
              background: rgb(52,50,51);
              background: radial-gradient(circle, rgba(52,50,51,1) 0%, rgba(57,56,57,1) 100%);
              border-radius: 10px;
              width: 100%;
              height: 100%;
              margin: 0;
              position: relative;
              padding: 0;
              transition: all 0.07s;
            } 
            .play{
              transform: scale(1.01);
              background: rgb(52,50,51);
              background: radial-gradient(circle, #242224 0%, rgba(57,56,57,1) 100%);
            }
            .light{
              box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.28) inset;
              -webkit-box-shadow: 10px 10px 10px -10px rgba(0,0,0,0.28) inset;
              -moz-box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.28) inset;
              background: rgb(52,50,51) !important;
              border-top-left-radius: 5px;
              border-bottom-right-radius: 5px;
              width: 100px;
              height: 50px;
              margin: 0;
              position: absolute;
              right: 0;
              bottom: 0;
              background-color: white;
              display: flex;
              justify-content: center;
              align-items: center;
              .lightbulb{
                box-shadow: 1px 1px 5px -2px rgba(0,0,0,0.85) inset;
                -webkit-box-shadow: 1px 1px 5px -2px rgba(0,0,0,0.85) inset;
                -moz-box-shadow: 1px 1px 5px -2px rgba(0,0,0,0.85) inset;
                background: #8a8688 !important;
                border-radius: 3px;
                height: 15px;
                width: 50px;
                transition: all 0.07s;
              }
              .playing{
                transform: scale(1.2);
                background-color: #c0484a !important;
              }
            }
          }
  
      }
      
    }
    @media only screen and (max-device-height: 769px) and (orientation: landscape){
      background-color: transparent;
      background: rgb(172,42,42);
      background: linear-gradient(270deg, rgba(172,42,42,1) 0%, rgba(143,25,29,1) 100%);
      padding: 2px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      min-width: 100vw;
      height: 100vh;
      .allpads{
          display: flex;
          flex-wrap: wrap;
          min-width: 100vw;
          height: 100vh;
          justify-content: space-evenly;
          align-items: center;
          padding-top: 0px;
          padding-bottom: 10px;
          background-color: transparent;
          div{
            width: 32%;
            height: 48%;
            margin: 5px;
            padding: 0;
            position: relative;
            .innerpad{
              box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
              -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
              -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
              background: rgb(52,50,51);
              background: radial-gradient(circle, rgba(52,50,51,1) 0%, rgba(57,56,57,1) 100%);
              border-radius: 10px;
              width: 100%;
              height: 100%;
              margin: 0;
              position: relative;
              padding: 0;
              transition: all 0.07s;
            } 
            .play{
              transform: scale(1.01);
              background: rgb(52,50,51);
              background: radial-gradient(circle, #242224 0%, rgba(57,56,57,1) 100%);
            }
            .light{
              box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.28) inset;
              -webkit-box-shadow: 10px 10px 10px -10px rgba(0,0,0,0.28) inset;
              -moz-box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.28) inset;
              background: rgb(52,50,51) !important;
              border-top-left-radius: 5px;
              border-bottom-right-radius: 5px;
              width: 100px;
              height: 50px;
              margin: 0;
              position: absolute;
              right: 0;
              bottom: 0;
              background-color: white;
              display: flex;
              justify-content: center;
              align-items: center;
              .lightbulb{
                box-shadow: 1px 1px 5px -2px rgba(0,0,0,0.85) inset;
                -webkit-box-shadow: 1px 1px 5px -2px rgba(0,0,0,0.85) inset;
                -moz-box-shadow: 1px 1px 5px -2px rgba(0,0,0,0.85) inset;
                background: #8a8688 !important;
                border-radius: 3px;
                height: 15px;
                width: 50px;
                transition: all 0.07s;
              }
              .playing{
                transform: scale(1.2);
                background-color: #c0484a !important;
              }
            }
          }
  
      }
      
    }
    @media only screen and (max-device-width: 420px) and (orientation: portrait){
      background-color: transparent;
      background: rgb(172,42,42);
      background: linear-gradient(270deg, rgba(172,42,42,1) 0%, rgba(143,25,29,1) 100%);
      padding: 2px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      min-width: 100vh;
      height: 100vw;
      .allpads{
          display: flex;
          flex-wrap: wrap;
          min-width: 100vh;
          height: 100vw;
          justify-content: space-evenly;
          align-items: center;
          padding-top: 0px;
          padding-bottom: 10px;
          background-color: transparent;
          div{
            width: 30%;
            height: 40%;
            margin: 5px;
            padding: 0;
            position: relative;
            .innerpad{
              box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
              -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
              -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
              background: rgb(52,50,51);
              background: radial-gradient(circle, rgba(52,50,51,1) 0%, rgba(57,56,57,1) 100%);
              border-radius: 10px;
              width: 100%;
              height: 100%;
              margin: 0;
              position: relative;
              padding: 0;
              transition: all 0.07s;
            } 
            .play{
              transform: scale(1.01);
              background: rgb(52,50,51);
              background: radial-gradient(circle, #242224 0%, rgba(57,56,57,1) 100%);
            }
            .light{
              box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.28) inset;
              -webkit-box-shadow: 10px 10px 10px -10px rgba(0,0,0,0.28) inset;
              -moz-box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.28) inset;
              background: rgb(52,50,51) !important;
              border-top-left-radius: 5px;
              border-bottom-right-radius: 5px;
              width: 100px;
              height: 50px;
              margin: 0;
              position: absolute;
              right: 0;
              bottom: 0;
              background-color: white;
              display: flex;
              justify-content: center;
              align-items: center;
              .lightbulb{
                box-shadow: 1px 1px 5px -2px rgba(0,0,0,0.85) inset;
                -webkit-box-shadow: 1px 1px 5px -2px rgba(0,0,0,0.85) inset;
                -moz-box-shadow: 1px 1px 5px -2px rgba(0,0,0,0.85) inset;
                background: #8a8688 !important;
                border-radius: 3px;
                height: 15px;
                width: 50px;
                transition: all 0.07s;
              }
              .playing{
                transform: scale(1.2);
                background-color: #c0484a !important;
              }
            }
          }
  
      }
      
    }
    @media only screen and (max-device-width: 410px) and (orientation: landscape){
      background-color: transparent;
      background: rgb(172,42,42);
      background: linear-gradient(270deg, rgba(172,42,42,1) 0%, rgba(143,25,29,1) 100%);
      padding: 2px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      min-width: 100vw;
      height: 100vh;
      .allpads{
          display: flex;
          flex-wrap: wrap;
          min-width: 100vw;
          height: 100vh;
          justify-content: space-evenly;
          align-items: center;
          padding-top: 0px;
          padding-bottom: 10px;
          background-color: transparent;
          div{
            width: 30%;
            height: 40%;
            margin: 5px;
            padding: 0;
            position: relative;
            .innerpad{
              box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
              -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
              -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.85);
              background: rgb(52,50,51);
              background: radial-gradient(circle, rgba(52,50,51,1) 0%, rgba(57,56,57,1) 100%);
              border-radius: 10px;
              width: 100%;
              height: 100%;
              margin: 0;
              position: relative;
              padding: 0;
              transition: all 0.07s;
            } 
            .play{
              transform: scale(1.01);
              background: rgb(52,50,51);
              background: radial-gradient(circle, #242224 0%, rgba(57,56,57,1) 100%);
            }
            .light{
              box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.28) inset;
              -webkit-box-shadow: 10px 10px 10px -10px rgba(0,0,0,0.28) inset;
              -moz-box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.28) inset;
              background: rgb(52,50,51) !important;
              border-top-left-radius: 5px;
              border-bottom-right-radius: 5px;
              width: 100px;
              height: 50px;
              margin: 0;
              position: absolute;
              right: 0;
              bottom: 0;
              background-color: white;
              display: flex;
              justify-content: center;
              align-items: center;
              .lightbulb{
                box-shadow: 1px 1px 5px -2px rgba(0,0,0,0.85) inset;
                -webkit-box-shadow: 1px 1px 5px -2px rgba(0,0,0,0.85) inset;
                -moz-box-shadow: 1px 1px 5px -2px rgba(0,0,0,0.85) inset;
                background: #8a8688 !important;
                border-radius: 3px;
                height: 15px;
                width: 50px;
                transition: all 0.07s;
              }
              .playing{
                transform: scale(1.2);
                background-color: #c0484a !important;
              }
            }
          }
  
      }
      
    }
    
`;