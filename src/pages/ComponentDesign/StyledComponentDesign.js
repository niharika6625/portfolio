/* eslint-disable prettier/prettier */
import {styled} from '@mui/material/styles';
const StyledComponentDesignWrapper = styled('div')(() => `
    margin-top: 100px;
    .section-wrapper {
        margin: 10px;
        padding: 10px 0px;
        background-color: #ddebdc;
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

    .section-wrapper-1 .buttonDiv {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 125px;
        height: 35px;
        font-family: system-ui;
        border-radius: 4px;
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
        color: white;
        font-size: 15.75px;
        cursor: pointer;
        transition: background-color 0.5s, box-shadow 0.5s;
        background-color: #1976d2;
    }
    .section-wrapper-1 .buttonDiv:hover {
        background-color: #196dc1;
        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    }

    .section-wrapper-2 .buttonGrp {
        display: flex;
    }
    .section-wrapper-2 .buttonDiv {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 35px;
        font-family: system-ui;
        border-radius: 4px;
        color: white;
        font-size: 15.75px;
        cursor: pointer;
        background-color: #1976d2;
    }


    .section-wrapper-3 #age {
        width: 112px;
        font-size: 16px;
        color: #5c5858;
        padding: 7px;
        height: 50px;
        border: 0.2px solid #b4b4b4;
        border-radius: 5px;
    }
    .section-wrapper-4 .star {
        color: white;
    }
    .section-wrapper-4 .star:hover {
        color: yellow;
    }
    .section-wrapper-6 .mainDiv {
        position: relative;
    }
    .section-wrapper-6 .checkBox {
        opacity: 0;
        z-index: 2;
        width: 32px;
    }
    .section-wrapper-6 .outerDiv {
        display: flex;
        position: absolute;
        top: 0px;
        pointer-events: none;
        align-items: center;
        width: 40px;
        height: 15px;
        border-radius: 12px;
        background-color: #9a9595;
        box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
    }
    .section-wrapper-6 .innerDiv {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 12px;
        background-color: #ffffff;
        left: 0px;
        transition: left 0.2s;
    }
    /*.section-wrapper-6 .innerDiv:hover {
        box-shadow: #e4dadaa3 0px 0px 0px 9px;
    }*/
    .checkBox:checked~.outerDiv {
        background-color: #007fc5;
    }
    .checkBox:checked~.outerDiv .innerDiv {
        left: 21px;
    }

    .section-wrapper-7 .textField {
        width: 170px;
        border-radius: 4px;
        font-size: 16px;
        padding: 1px 17px;
        border: 1px solid #a7a7a7;
        height: 50px;
    }

    .section-wrapper-8 .icon {
        position: relative;
        font-size: 23px;
        color: #534e4e;
    }
    .section-wrapper-8 .numbers {
        position: absolute;
        background-color: #007fc5;
        color: white;
        font-family: ui-sans-serif;
        top: -10px;
        left: 14px;
        width: 22px;
        height: 21px;
        font-size: 14px;
        line-height: 21px;
        text-align: center;
        border-radius: 12px;
    }

    .section-wrapper-9 .outerDiv {
        display: flex;
        padding: 0px;
        align-items: center;
        width: 320px;
        margin: 0px;
        height: 200px;
        background-color: white;
    }
    .section-wrapper-9 .ulDiv {
        width: 100%;
        padding: 0px 0px;
        list-style: none;
    }
    .section-wrapper-9 .listItems {
        margin: 0px 0px;
        padding: 15px 20px;
        border-bottom: 2px solid #e9e9e9;
    }
    .section-wrapper-9 .listItems:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }

    .section-wrapper-10 table {
        background-color: white;
        border-collapse: collapse;
        width: 700px;
        height: 300px;
        text-align: center;
    }
    .section-wrapper-10 th,
        .section-wrapper-10 td {
            border-bottom: 1px solid #dfdfdf;
        }
    }

    .section-wrapper-11 .tooltip {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 125px;
        height: 50px;
        color: white;
        background-color: #1b3e4d;
        border-radius: 4px;
        position: relative;
    }
    .section-wrapper-11 .tooltip:hover::before {
        content: "this is tooltip";
        position: absolute;
        width: 100px;
        left: 140px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        background-color: #747070;
    }

    .section-wrapper-12 .alertDiv {
        display: flex;
        padding: 0px 30px;
        align-items: center;
        font-size: 18px;
        height: 50px;
        color: rgb(95, 33, 32);
        border-radius: 3px;
        margin: 15px auto;
        background-color: rgb(253, 237, 237);
    }
    .section-wrapper-12 .alertDiv i {
        color: rgb(239, 83, 80);
        font-size: 24px;
    }
    .section-wrapper-12 .warningDiv {
        display: flex;
        padding: 0px 30px;
        align-items: center;
        font-size: 18px;
        height: 50px;
        color: rgb(102, 60, 0);
        border-radius: 3px;
        background-color: rgb(255, 244, 229);
        margin: 15px auto;
    }
    .section-wrapper-12 .warningDiv i {
        color: rgb(255, 152, 0);
        font-size: 24px;
    }
    .section-wrapper-12 .buttonDiv:hover {}

    .section-wrapper-13 .spin {
        box-sizing: border-box;
        position: relative;
        width: 200px;
        height: 200px;
        background-color: white;
        border-radius: 100px;
        border: 20px solid #03a9f4;
        border-bottom: 20px solid white;
        animation-name: spinner;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    /*.section-wrapper-13 .spin::after{
        position: absolute;
        content: "";
        box-sizing: border-box;
        width: 200px;
        height: 200px;
        background-color: white;
        border-radius: 100px;
    }*/
        @keyframes spinner {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    }

    .section-wrapper-14 .accordianDiv-wrap {
        background-color: white;
        border-radius: 5px;
    }
    .section-wrapper-14 .accordianDiv {
        border: 1px solid #f1f1f1;
        border-radius: 5px;
        padding: 0px 22px;
    }
    .section-wrapper-14 .accordianDiv i {
        float: right;
    }
    .section-wrapper-14 .accordianDiv h4 {
        font-weight: 400;
        font-size: 16px;
    }

    .section-wrapper-15 .outerDiv {
        width: 600px;
        padding: 0px 30px;
        background-color: rgb(25, 118, 210);
        color: rgb(255, 255, 255);
        display: flex;
        justify-content: space-between;
        box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
    }
    .section-wrapper-15 .hamburger {
        display: flex;
        flex-direction: column;
        margin: auto 0px;
    }
    .section-wrapper-15 .hamburger .lines {
        width: 25px;
        height: 3px;
        border-radius: 1px;
        background-color: white;
        margin: 2px 0px;
    }
    .section-wrapper-15 .searchBar {
        margin: auto 0px;
        width: 225px;
        height: 35px;
        background-color: #ffffff1f;
        mix-blend-mode: screen;
        padding: 0px 12px;
        font-family: ui-serif;
        border: 1px solid #ffffff0f;
        border-radius: 4px;
        font-size: 20px;
    }
    .section-wrapper-15 .myIcons {
        margin: auto 0px;
        font-size: 25px;
        position: relative;
    }
    .section-wrapper-15 .myIcons::after {
        content: "4";
        position: absolute;
        color: white;
        font-size: 15px;
        background-color: red;
        top: -6px;
        right: -10px;
        font-family: math;
        line-height: 18px;
        width: 19px;
        text-align: center;
        border-radius: 15px;
        height: 19px;
    }

    .section-wrapper-16 .card {
        background-color: white;
        width: 400px;
        margin: auto;
        border-radius: 5px;
    }
    .section-wrapper-16 .card-header {
        display: flex;
    }
    .section-wrapper-16 .logo {
        background-color: #ff4c1d;
        font-family: system-ui;
        width: 40px;
        height: 40px;
        border-radius: 40px;
        text-align: center;
        font-size: 25px;
        line-height: 40px;
        color: white;
        margin: auto 15px;
    }
    .section-wrapper-16 .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto 0px;
        height: 60px;
        margin-right: 90px;
    }
    .section-wrapper-16 .title h4 {
        margin: 2px 0px;
    }
    .section-wrapper-16 .title p {
        margin: 2px 0px;
    }
    .section-wrapper-16 .menu {
        margin: auto 0px;
        font-size: 21px;
    }
    .section-wrapper-16 .card-content img {
        width: 400px;
        height: 250px;
    }
    .section-wrapper-16 .card-content p {
        padding: 0px 20px;
        color: #635e5e;
        font-family: system-ui;
        font-size: 15px;
        line-height: 22px;
    }
    .section-wrapper-16 .card-footer {
        display: flex;
        justify-content: space-between;
    }
    .section-wrapper-16 .card-footer i {
        margin: 10px 50px;
        color: #8a8787;
        font-size: 25px;
    }

    .section-wrapper-17 .breadcrumbs {
        display: flex;
        color: #5c5858;
        background-color: white;
        height: 30px;
        justify-content: center;
        align-items: center;
    }
    .section-wrapper-17 .breadcrumbs a {
        text-decoration: none;
        color: #5c5353;
        margin: 0px 10px;
    }

    .section-wrapper-18 .mainDiv {
        background-color: #0355f4;
        width: 50px;
        height: 50px;
        color: white;
        font-size: 35px;
        text-align: center;
        line-height: 51px;
        position: relative;
        border-radius: 30px;
    }
    .section-wrapper-18 .divItems {
        display: none;
        position: absolute;
        top: 0px;
        left: 60px;
    }
    .section-wrapper-18 .divItems i {
        background-color: white;
        color: #534e4e;
        margin: 0px 15px;
        border-radius: 27px;
        width: 50px;
        height: 50px;
        line-height: 50px;
    }
    .section-wrapper-18 .mainDiv:hover .divItems {
        display: flex;
    }
    .section-wrapper-19 .grid {
        display: grid;
        grid-template-columns: auto auto auto;
        background-color: #dbe5e9;
        border-radius: 15px;
    }
    .section-wrapper-19 .grid>div {
        height: 40px;
        /*width: 200px;*/
        line-height: 40px;
        text-align: center;
        border-radius: 5px;
        margin: 12px 40px;
        background-color: white;
    }
    .section-wrapper-19 .grid .item1 {
        grid-column-start: 1;
        grid-column-end: 3;
    }
    .section-wrapper-20 .imgList {
        width: 1000px;
        overflow: auto;
        height: 400px;
    }
`);

export default StyledComponentDesignWrapper