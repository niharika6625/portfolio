/* eslint-disable prettier/prettier */
import { useState } from 'react';
import StyledComponentDesign from './StyledComponentDesign.js';
import reactJpeg from '../../assets/images/react.jpeg';
import reactjsJpg from '../../assets/images/reactjs.jpg';
import ProjectModal from '../../components/ProjectModal';
import { PROJECT_DESCRIPTION } from '../../helpers/constants/projectDescription';
const { componentLib } = PROJECT_DESCRIPTION;
const ComponentDesign = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClickClose = () => {
    setOpenDialog(false);
  };
  return (
    <StyledComponentDesign>
      <ProjectModal
        open={openDialog}
        onClose={handleClickClose}
        project={componentLib}
        color={'#36454F'}
        handleClickOpen={handleClickOpen}
      />
      <div className="heading">
        <h1>Component Craft Lab</h1>
      </div>
      <div className="section-wrapper section-wrapper-1">
        <p className="title">Button</p>
        <div>
          <div className="output-wrapper">
            <div className="buttonDiv">CONTAINED</div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="4"
              value={`<style>
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
            </style>`}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-2">
        <p className="title">Button group</p>
        <div>
          <div className="output-wrapper">
            <div className="buttonGrp">
              <button className="buttonDiv">ONE</button>
              <button className="buttonDiv">TWO</button>
              <button className="buttonDiv">THREE</button>
            </div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="4"
              value={`<style>
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
            </style> `}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-3">
        <p className="title">Select</p>
        <div>
          <div className="output-wrapper">
            <select name="Age" id="age">
              <option value="">Below 18</option>
              <option value="">18</option>
              <option value="">Above 18</option>
            </select>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="4"
              value={`<style>
            .section-wrapper-3 #age {
            width: 112px;
            font-size: 16px;
            color: #5c5858;
            padding: 7px;
            height: 50px;
            border: 0.2px solid #b4b4b4;
            border-radius: 5px;
            }
            </style>`}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-4">
        <p className="title">rating</p>
        <div>
          <div className="output-wrapper">
            <i className="fa-solid fa-star star"></i>
            <i className="fa-solid fa-star star"></i>
            <i className="fa-solid fa-star star"></i>
            <i className="fa-solid fa-star star"></i>
            <i className="fa-solid fa-star star"></i>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="4"
              value={`<style>
            .section-wrapper-4 .star {
            color: white;
            }
            .section-wrapper-4 .star:hover {
            color: yellow;
            }
            </style> `}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-5">
        <p className="title">slider</p>
        <div>
          <div className="output-wrapper">
            <i className="fa-solid fa-volume-xmark"></i>
            <input type="range" />
            <i className="fa-solid fa-volume-high"></i>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="4"
              value={`&lt;i className="fa-solid fa-volume-xmark"&gt;&lt;/i&gt;
            &lt;input type="range"&gt;
            &lt;i className="fa-solid fa-volume-high"&gt;&lt;/i&gt; `}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-6">
        <p className="title">Switches</p>
        <div>
          <div className="output-wrapper">
            <div className="mainDiv">
              <input type="checkbox" className="checkBox" />
              <div className="outerDiv">
                <div className="innerDiv"></div>
              </div>
            </div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="4"
              value={`<style>
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
            </style> `}
            ></textarea>
          </div>
        </div>
        <style></style>
      </div>
      <div className="section-wrapper section-wrapper-7">
        <p className="title">Text-field</p>
        <div>
          <div className="output-wrapper">
            <input type="text" className="textField" placeholder="Outlined" />
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="4"
              value={`&lt;h1&gt;Heading tag&lt;/h1&gt;`}
            ></textarea>
          </div>
        </div>
        <style></style>
      </div>
      <div className="section-wrapper section-wrapper-8">
        <p className="title">Badge</p>
        <div>
          <div className="output-wrapper">
            <i className="fa-solid fa-envelope icon">
              <div className="numbers">4</div>
            </i>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="4"
              value={`<style>
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
            </style> `}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-9">
        <p className="title">List</p>
        <div>
          <div className="output-wrapper">
            <div className="outerDiv">
              <ul className="ulDiv">
                <li className="listItems">
                  <i className="fa-solid fa-inbox"></i>&nbsp; &nbsp; Inbox
                </li>
                <li className="listItems">
                  <i className="fa-solid fa-envelope-open"></i>&nbsp; &nbsp; Drafts
                </li>
                <li className="listItems">Trash</li>
                <li className="listItems">Spam</li>
              </ul>
            </div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="4"
              value={`<style>
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
            </style> `}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-10">
        <p className="title">Button</p>
        <div>
          <div className="output-wrapper">
            <table>
              <tbody>
                <tr className="rowDiv">
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Contact</th>
                  <th>City</th>
                </tr>
                <tr className="rowDiv">
                  <td>Aman</td>
                  <td>Singhaniya</td>
                  <td>8454854652</td>
                  <td>Jaipur</td>
                </tr>
                <tr className="rowDiv">
                  <td>Rohan</td>
                  <td>Shetty</td>
                  <td>9856741345</td>
                  <td>Udaipur</td>
                </tr>
                <tr className="rowDiv">
                  <td>Suresh</td>
                  <td>Meena</td>
                  <td>8956784562</td>
                  <td>Jodhpur</td>
                </tr>
                <tr className="rowDiv">
                  <td>Rajpal</td>
                  <td>Yadav</td>
                  <td>9856478548</td>
                  <td>Jaipur</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="4"
              value={`<style>
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
            </style> `}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-11">
        <p className="title">Tooltip</p>
        <div>
          <div className="output-wrapper">
            <div className="tooltip">Hover over me</div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="4"
              value={`<style>
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
            </style> `}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-12">
        <p className="title">Alerts</p>
        <div>
          <div className="output-wrapper">
            <div className="alertDiv">
              <i className="fa-solid fa-circle-exclamation"></i>&nbsp; &nbsp; &nbsp; This is an
              error alert — check it out!
            </div>
            <div className="warningDiv">
              <i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; &nbsp; This is a
              warning alert — check it out!
            </div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="4"
              value={`<style>
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
            </style> `}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-13">
        <p className="title">Button</p>
        <div>
          <div className="output-wrapper">
            <div className="spin"></div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="4"
              value={`<style>
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
            </style> `}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-14">
        <p className="title">Accordian</p>
        <div>
          <div className="output-wrapper">
            <div className="accordianDiv-wrap">
              <div className="accordianDiv">
                <h4>
                  Accordian 1<i className="fa-solid fa-angle-down"></i>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </p>
              </div>
              <div className="accordianDiv">
                <h4>
                  Accordian 2<i className="fa-solid fa-angle-down"></i>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </p>
              </div>
              <div className="accordianDiv">
                <h4>
                  Accordian 3<i className="fa-solid fa-angle-down"></i>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </p>
              </div>
              <div className="accordianDiv">
                <h4>
                  Accordian 4<i className="fa-solid fa-angle-down"></i>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </p>
              </div>
            </div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="4"
              value={`<style>
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
            </style> `}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-15">
        <p className="title">App Bar/ Nav Bar</p>
        <div>
          <div className="output-wrapper">
            <div className="outerDiv">
              <div className="hamburger">
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
              </div>
              <h3>MUI</h3>
              <input type="search" placeholder="Search..." className="searchBar" name="" id="" />
              <i className="fa-solid fa-envelope icon myIcons"></i>
              <i className="fa-regular fa-bell myIcons"></i>
              <i className="fa-solid fa-user myIcons"></i>
            </div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="4"
              value={`<style>
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
            </style> `}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-16">
        <p className="title">Card</p>
        <div>
          <div className="output-wrapper">
            <div className="card">
              <div className="card-header">
                <div className="logo">V</div>
                <div className="title">
                  <h4>Shrimp and Chorizo Paella</h4>
                  <p>September 14, 2016</p>
                </div>
                <div className="menu">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
              </div>
              <div className="card-content">
                <img src={reactjsJpg} alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi velit vero porro
                  nisi rem uga recusandae harum dignissimos,nihil ipsa reiciendis beatae sapiente
                  officiis. Iure, alias corporis.
                </p>
              </div>
              <div className="card-footer">
                <i className="fa-solid fa-heart"></i>
                <i className="fa-solid fa-share-nodes"></i>
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="4"
              value={`<style>
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
                </style>`}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-17">
        <p className="title">Breadcrumbs</p>
        <div>
          <div className="output-wrapper">
            <div className="breadcrumbs">
              <a href="">MUI </a> / <a href="">Core </a> / <a href="">Breadcrumbs </a>
            </div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="4"
              value={`<style>
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
                </style>`}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-18">
        <p className="title">Speed Dial</p>
        <div>
          <div className="output-wrapper">
            <div className="mainDiv">
              +
              <div className="divItems">
                <i className="fa-solid fa-file"></i>
                <i className="fa-solid fa-floppy-disk"></i>
                <i className="fa-solid fa-print"></i>
                <i className="fa-solid fa-share-nodes"></i>
              </div>
            </div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="4"
              value={`<style>
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
                </style>`}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-19">
        <p className="title">Grid</p>
        <div>
          <div className="output-wrapper">
            <div className="grid">
              <div className="item1">item1</div>
              <div className="item2">item2</div>
              <div className="item3">item3</div>
              <div className="item4">item4</div>
              <div className="item5">item5</div>
              <div className="item6">item6</div>
              <div className="item7">item7</div>
              <div className="item8">item8</div>
            </div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="4"
              value={`<style>
                .section-wrapper-19 .grid {
                display: grid;
                grid-template-columns: auto auto auto;
                background-color: #dbe5e9;
                border-radius: 15px;
                }
                .section-wrapper-19 .grid&gt;div {
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
                </style>`}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-20">
        <p className="title">Image List</p>
        <div>
          <div className="output-wrapper">
            <div className="imgList">
              <img src={reactJpeg} alt="" />
              <img src={reactJpeg} alt="" />
              <img src={reactJpeg} alt="" />
              <img src={reactJpeg} alt="" />
              <img src={reactJpeg} alt="" />
              <img src={reactJpeg} alt="" />
              <img src={reactJpeg} alt="" />
              <img src={reactJpeg} alt="" />
              <img src={reactJpeg} alt="" />
              <img src={reactJpeg} alt="" />
              <img src={reactJpeg} alt="" />
              <img src={reactJpeg} alt="" />
              <img src={reactJpeg} alt="" />
            </div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="4"
              value={`<style>
                .section-wrapper-20 .imgList {
                width: 1000px;
                overflow: auto;
                height: 400px;
                }
                </style>`}
            ></textarea>
          </div>
        </div>
      </div>
    </StyledComponentDesign>
  );
};

export default ComponentDesign;