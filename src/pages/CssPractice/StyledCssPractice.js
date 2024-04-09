/* eslint-disable prettier/prettier */
import { styled } from '@mui/material/styles';
import reactBgImg from '../../assets/images/reactjs.jpg';
const StyledCssPractice = styled('div')(
  () => `
margin: 5px;
margin-top: 100px;


@media screen and (max-width:600px) {
    *{
      background-color:blue;
    }
  }
  @font-face {
          font-family: 'myfont';
          src: url('../assets/fonts/darlington-font/DarlingtonDemo-z8xjG.ttf');
        }
  .section-wrapper {
    margin: 10px;
    padding: 10px 0px;
    background-color: #ddebdc;
  }

  .heading{
    display:flex;
    justify-content: center;
}

  .section-wrapper .title {
    padding: 0px 10px;
  }

  .section-wrapper .output-wrapper {
    padding: 10px 20px;
    background-color: #a9e0b2;
  }

  .section-wrapper .code-wrapper {
    border: 1px solid #999999;
    margin: 5px 0;
    padding: 3px;
  }

  .section-wrapper .code-wrapper .textarea {
    width: 99%;
  }

.section-wrapper-1 .color {
    color: red;
    }

    .section-wrapper-2 .background {
        background-color: lightblue;
        opacity: 0.3;
    }
    .section-wrapper-2 .background-image {
        background-image: url(${reactBgImg});
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
    }

    .section-wrapper-3 .border-top {
        border-top: 10px solid red;
        border-radius: 40px;
    }
    .section-wrapper-3 .border-right {
        border-right: 10px solid red;
    }
    .section-wrapper-3 .border-bottom {
        border-bottom: 10px solid red;
    }
    .section-wrapper-3 .border-left {
        border-left: 10px solid red;
    }
    .section-wrapper-4 .margin-top {
        margin-top: 12px;
    }
    .section-wrapper-4 .margin-right {
        margin-right: 12px;
    }
    .section-wrapper-4 .margin-bottom {
        margin-bottom: 12px;
    }
    .section-wrapper-4 .margin-left {
        margin-left: 12px;
    }
    .section-wrapper-5 .padding-top {
        padding-top: 12px;
    }
    .section-wrapper-5 .padding-right {
    padding-right: 12px;
    }
    .section-wrapper-5 .padding-bottom {
    padding-bottom: 12px;
    }
    .section-wrapper-5 .padding-left {
    padding-left: 12px;
    }

    .section-wrapper-6 .width {
        width: 50%;
        background-color: aquamarine;
    }

    .section-wrapper-7 .height {
        height: 200px;
        background-color: aquamarine;
    }

    .section-wrapper-8 .outline-top {
        outline-style: dotted;
        outline-width: 5px;
        outline-color: rebeccapurple;
        outline-offset: 5px;
        border: 2px solid red;
    }

    .section-wrapper-9 .Text {
        color: blue;
        text-align: center;
        direction: rtl;
        unicode-bidi: bidi-override;
        vertical-align: text-top;
        text-decoration-line: line-through;
        text-decoration-color: green;
        text-decoration-style: wavy;
        text-transform: uppercase;
        text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
    }

    .section-wrapper-10 .Fonts {
        font-family: "Times New Roman", Times, serif;
        font-style: italic;
        font-weight: bold;
        font-variant: small-caps;
        font-size: 30px;
    }
    
    .section-wrapper-11 .square {
    position: relative;
    overflow: hidden;
    left: 400px;
    width: 100px;
    height: 100px;
    border: 2px solid black;
    background-color: black;
    }
    .section-wrapper-11 .circle-1 {
    position: absolute;
    top: -50px;
    left: -50px;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: 2px solid black;
    background-color: midnightblue;
    }
    .section-wrapper-11 .circle-2 {
    position: absolute;
    top: -50px;
    right: -50px;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: 2px solid black;
    background-color: crimson;
    }
    .section-wrapper-11 .circle-3 {
    position: absolute;
    bottom: -50px;
    left: -50px;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: 2px solid black;
    background-color: springgreen;
    }
    .section-wrapper-11 .circle-4 {
    position: absolute;
    bottom: -50px;
    right: -50px;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: 2px solid black;
    background-color: red;
    }
    .section-wrapper-11 .fixedsquare{
    border-radius: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    width: 4%;
    height: 70px;
    background-color: palevioletred;
    position: fixed;
    bottom: 20px;
    right: 18px;
    }
    .section-wrapper-11 .stickyMainDiv{
    width: 100%;
    height: 500px;
    }
    .section-wrapper-11 .stickyDiv{
    width: 100%;
    height: 30px;
    background-color: orange;
    position: sticky;
    top: 0px;
    }

    .section-wrapper-12 .overflow {
        background: #4CAF50;
        padding: 15px;
        width: 70%;
        white-space: nowrap;
        height: 100px;
        /* overflow: scroll; */
        overflow-x: scroll;
        /* overflow-y: scroll; */
        border: 1px solid #ccc;
    }

    .section-wrapper-13 .fontFamily {
        font-family: 'Tangerine', serif;
        font-size: 1.5vw;
    }
    .section-wrapper-13 .customFont {
        font-family: 'myfont';
        font-size: 1.5vw;
    }

    .section-wrapper-14 .pseudoClass {
        width: 100%;
        height: 100px;
        background-color: tomato;
    }
    .section-wrapper-14 .pseudoClass:hover {
        width: 100%;
        height: 100px;
        background-color: purple;
    }

    .section-wrapper-15 .flex-container {
        display: flex;
        flex-wrap: wrap;
        background-color: DodgerBlue;
        justify-content: center;
    }
    .section-wrapper-15 .flex-container > div {
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
    }
    .section-wrapper-15 .flex-container .div1{
        flex-grow: 5;
    }

    .section-wrapper-16 .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 10px;
        background-color: #2196F3;
        padding: 10px;
    }
    .section-wrapper-16 .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
    }
    .section-wrapper-16 .grid-container .item1 {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    .section-wrapper-17 .gradient {
        width: 100%;
        height: 100px;
        background-image: linear-gradient(to left, rgba(255,0,0,0), rgba(255,0,0,1));
    }

    .section-wrapper-18 .translate {
        width: 300px;
        height: 100px;
        background-color: red;
        transform: translate(50px, 100px);
        }
        .section-wrapper-18 .rotate {
        width: 100px;
        height: 100px;
        background-color: yellow;
        transform: rotate(20deg);
        }
    .section-wrapper-18 .scale {
        width: 300px;
        height: 300px;
        background-color: burlywood;
        transform: scale(0.5, 0.5);
    }
    .section-wrapper-18 .skew {
        width: 300px;
        height: 300px;
        background-color: paleturquoise;
        transform: skew(10deg, 10deg);
    }
    .section-wrapper-18 .matrix {
        width: 300px;
        height: 300px;
        background-color: grey;
        transform: matrix(1, -0.3, 0, 1, 0, 0);
    }

    .section-wrapper-19 .divClass {
        width: 100px;
        height: 100px;
        background: red;
        transition: width 2s, height 2s, transform 2s;
    }
    .section-wrapper-19 #div1 {transition-timing-function: linear; transition-delay: 1s;}
    .section-wrapper-19 #div2 {transition-timing-function: ease;}
    .section-wrapper-19 #div3 {transition-timing-function: ease-in;}
    .section-wrapper-19 #div4 {transition-timing-function: ease-out;}
    .section-wrapper-19 #div5 {transition-timing-function: ease-in-out;}
    .divClass:hover {
        width: 300px;
        transform: rotate(180deg);
    }

    .section-wrapper-20 .animationdiv1 {
        position: relative;
        width: 200px;
        height: 200px;
        z-index: 1;
        animation-name: div1animation;
        animation-duration: 10s;
        animation-iteration-count: 5;
        animation-timing-function: normal;
        }
        /*.section-wrapper-20 .animationdiv1::before {
        content: "";
        position: absolute;
        width: 200px;
        height: 200px;
        animation-name: spin;
        animation-duration: 10s;
        animation-delay: 5s;
        animation-iteration-count: 5;
        animation-timing-function: normal;
        }*/
        .section-wrapper-20 .animationdiv1::after {
        content: "";
        position: absolute;
        z-index: 2;
        animation-name: divAfterAnimation;
        animation-duration: 10s;
        animation-iteration-count: 5;
        animation-timing-function: normal;
        }
        @keyframes div1animation {
        0% {left:0px; top:0px; background-color: transparent; transform: rotate(0deg); overflow: hidden;}
        25% {left:100px; top:0px; border-radius: 100px; background-color: transparent; transform: rotate(0deg); overflow: hidden;}
        50% {left:200px; top:0px; border-radius: 0px; background-color: transparent; transform: rotate(0deg); overflow: hidden;}
        75% {left:300px; top:0px; background-color: yellow; transform: rotate(45deg); overflow: visible;}
        100% {left:400px; top:-200px; background-color: transparent; transform: rotate(0deg); overflow: visible;}
        }
        @keyframes divAfterAnimation {
        0% {width: 200px; height: 200px; border: 0px; border-bottom: 0px; background-color: #2196F3; transform: rotate(0deg);}
        25% {width: 200px; height: 200px; border: 0px; border-bottom: 0px; background-color: burlywood; transform: rotate(0deg);}
        50% {width: 200px; height: 200px; border: 0px; border-bottom: 0px; background-color: #4CAF50; transform: rotate(45deg);}
        75% {width: 200px; height: 200px; border: 0px; border-bottom: 0px; background-color: yellow; transform: rotate(45deg);}
        100% {width: 0px; height: 0px; border: 150px solid transparent; border-bottom: 250px solid brown;}      
        }

        .section-wrapper-21 .animationdiv1 {
            position: relative;
            width: 250px;
            animation-name: moving;
            animation-duration: 5s;
            animation-delay: 2s;
            animation-iteration-count: 10;
            animation-timing-function: linear;
            }
            .section-wrapper-21 #carImg {
            width: 250px;
            height: 100px;
            animation-name: carMove;
            animation-duration: 5s;
            animation-delay: 2s;
            animation-iteration-count: 10;
            animation-timing-function: linear;
            }
            .section-wrapper-21 .wheel1{
            position: absolute;
            width: 50px;
            height: 50px;
            background-color: black;
            border-radius: 25px;
            bottom: 0px;
            left: 20px;
            z-index: 1;
            animation-name: wheel1;
            animation-duration: 5s;
            animation-delay: 2s;
            animation-iteration-count: 10;
            animation-timing-function: linear;
            }
            .section-wrapper-21 .wheel2{
            position: absolute;
            width: 50px;
            height: 50px;
            bottom: 0px;
            right: 27px;
            border-radius: 25px;
            background-color: black;
            z-index: 1;
            animation-name: wheel2;
            animation-duration: 5s;
            animation-delay: 2s;
            animation-iteration-count: 10;
            animation-timing-function: linear;
            }
            .section-wrapper-21 .wheel1::before {
            content: "";
            position: absolute;
            width: 5px;
            height: 50px;
            z-index: 2;
            background-color: white;
            bottom: 0px;
            left: 22px;
            }
            .section-wrapper-21 .wheel1::after {
            content: "";
            position: absolute;
            width: 50px;
            height: 4px;
            z-index: 2;
            background-color: white;
            bottom: 22px;
            left: 0px;
            }
            .section-wrapper-21 .wheel2::before {
            content: "";
            position: absolute;
            width: 5px;
            height: 50px;
            z-index: 2;
            background-color: white;
            bottom: 0px;
            right: 22px;
            }
            .section-wrapper-21 .wheel2::after {
            content: "";
            position: absolute;
            width: 50px;
            height: 4px;
            z-index: 2;
            background-color: white;
            bottom: 22px;
            right: 0px;
            }
            @keyframes carMove {
            0%{
            transform: rotate(0deg);
            }
            30%{
            transform: rotate(-7deg);
            }
            60%{
            transform: rotate(7deg);
            }
            90%{
            transform: rotate(-2deg);
            }
            100%{
            transform: rotate(0deg);
            }
            }
            @keyframes moving {
            0%{
            left: 0px;
            top: 0px;
            transform: scaleY(1);
            }
            50%{
            left: 40%;
            top: -10px;
            transform: scaleY(0.8);
            }
            100%{
            left: 80%;
            top: 0px;
            transform: scaleY(1);
            }
            }
            @keyframes wheel1 {
            0%{
            transform: rotate(0deg) scale(1);
            }
            30%{
            transform: rotate(360deg) scale(0.9);
            }
            60%{
            transform: rotate(720deg) scale(1);
            }
            90%{
            transform: rotate(1080deg) scale(0.9);
            }
            100%{
            transform: rotate(1200deg) scale(1);
            }
            }
            @keyframes wheel2 {
            0%{
            transform: rotate(0deg) scale(1);
            }
            30%{
            transform: rotate(360deg) scale(1);
            }
            60%{
            transform: rotate(720deg) scale(0.9);
            }
            90%{
            transform: rotate(1080deg) scale(1);
            }
            100%{
            transform: rotate(1200deg) scale(1);
            }
            }
`,
);

export default StyledCssPractice;
