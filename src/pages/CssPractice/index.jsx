/* eslint-disable prettier/prettier */
import { useState } from 'react';
import StyledCssPractice from './StyledCssPractice.js';
import carImg from '../../assets/images/car.png';
import ProjectModal from '../../components/ProjectModal';
import { PROJECT_DESCRIPTION } from '../../helpers/constants/projectDescription';
const { cssMastery } = PROJECT_DESCRIPTION;
const CssPractice = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClickClose = () => {
    setOpenDialog(false);
  };
  return (
    <StyledCssPractice>
      <ProjectModal
        open={openDialog}
        onClose={handleClickClose}
        project={cssMastery}
        color={'#36454F'}
        handleClickOpen={handleClickOpen}
      />
      <div className="heading">
        <h1>CSS Mastery Studio</h1>
      </div>
      <div className="section-wrapper section-wrapper-1">
        <p className="title">color property (rgb, hex, hsl, rgba, hsla)</p>
        <div>
          <div className="output-wrapper-1">
            <div className="color">color property</div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="10"
              value={`            <style>
          .section-wrapper-1 .color{
          color: red;
          }
          </style>
          <div className="color"&gt;color property</div>`}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-2">
        <p className="title">
          background property (background-color ,background-image, background-repeat,
          background-attachment, background-position background (shorthand property))
        </p>
        <div>
          <div className="output-wrapper">
            <div className="background">background property </div>
            <div className="background-image">backgoround image property</div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="10"
              value={`          <style>
          .section-wrapper-2 .background {
          background-color: lightblue;
          opacity: 0.3;
          }
          .section-wrapper-2 .background-image {
          background-image: url('../assets/images/reactjs.jpg');
          background-repeat: no-repeat;
          background-position: center;
          background-attachment: fixed;
          }
          </style>
          <div className="background"&gt;background property </div>
          <div className="background-image"&gt;backgoround image property</div>
          `}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-3">
        <p className="title">
          border property (border-style, border-width, border-color, border-top-style, Border -
          Shorthand Property, border-radius)
        </p>
        <div>
          <div className="output-wrapper">
            <div className="border-top">border property top</div>
            <div className="border-right">border property right</div>
            <div className="border-bottom">border property bottom</div>
            <div className="border-left">border property left</div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="20"
              value={`<style>
              .section-wrapper-3 .border-top{
                border-top: 10px solid red;
                border-radius: 40px;
              }
              .section-wrapper-3 .border-right{
                border-right: 10px solid red;
              }
              .section-wrapper-3 .border-bottom{
                border-bottom: 10px solid red;
              }
              .section-wrapper-3 .border-left{
                border-left: 10px solid red;
              }
              </style>
                <div className="border-top"&gt;border property top</div>
                <div className="border-right"&gt;border property right</div>
                <div className="border-bottom"&gt;border property bottom</div>
                <div className="border-left"&gt;border property left</div>
                `}
            ></textarea>
            <style></style>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-4">
        <p className="title">margin property (margin - Shorthand Property)</p>
        <div>
          <div className="output-wrapper">
            <div className="margin-top">margin property top</div>
            <div className="margin-right">margin property right</div>
            <div className="margin-bottom">margin property bottom</div>
            <div className="margin-left">margin property left</div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="20"
              value={` <style>
            .section-wrapper-4 .margin-top{
              margin-top: 12px;
            }
            .section-wrapper-4 .margin-right{
              margin-right: 12px;
            }
            .section-wrapper-4 .margin-bottom{
              margin-bottom: 12px;
            }
            .section-wrapper-4 .margin-left{
              margin-left: 12px;
            }
            </style>
              <div className="margin-top"&gt;margin property top</div>
              <div className="margin-right"&gt;margin property right</div>
              <div className="margin-bottom"&gt;margin property bottom</div>
              <div className="margin-left"&gt;margin property left</div>
              `}
            ></textarea>
            <style></style>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-5">
        <p className="title">padding property (padding - Shorthand Property)</p>
        <div>
          <div className="output-wrapper">
            <div className="padding-top">padding property top</div>
            <div className="padding-right">padding property right</div>
            <div className="padding-bottom">padding property bottom</div>
            <div className="padding-left">padding property left</div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="20"
              value={`       <style>
            .section-wrapper-5 .padding-top{
              padding-top: 12px;
            }
            .section-wrapper-5 .padding-right{
              padding-right: 12px;
            }
            .section-wrapper-5 .padding-bottom{
              padding-bottom: 12px;
            }
            .section-wrapper-5 .padding-left{
              padding-left: 12px;
            }
            </style>
              <div className="padding-top"&gt;padding property top</div>
              <div className="padding-right"&gt;padding property right</div>
              <div className="padding-bottom"&gt;padding property bottom</div>
              <div className="padding-left"&gt;padding property left</div>`}
            ></textarea>
            <style></style>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-6">
        <p className="title">width property (max-width , min-width)</p>
        <div>
          <div className="output-wrapper">
            <div className="width">width property</div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="10"
              value={`<style>
          .section-wrapper-6 .width {
          width: 50%;
          background-color: aquamarine;
          }
          </style>
          <div className="width"&gt;width property</div>
          `}
            ></textarea>
          </div>
        </div>
        <style></style>
      </div>
      <div className="section-wrapper section-wrapper-7">
        <p className="title">height property (max-height , min-height)</p>
        <div>
          <div className="output-wrapper">
            <div className="height">height property</div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="10"
              value={`<style>
          .section-wrapper-7 .height {
          height: 50%;
          background-color: aquamarine;
          }
          </style>
          <div className="width"&gt;height property</div>
          `}
            ></textarea>
          </div>
        </div>
        <style></style>
      </div>
      <div className="section-wrapper section-wrapper-8">
        <p className="title">
          Outline property (outline-style, outline-width, outline-color, outline-offset, outline -
          Shorthand Property)
        </p>
        <div>
          <div className="output-wrapper">
            <div className="outline-top">outline property</div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="20"
              value={`<style>
              .section-wrapper-8 .outline-top {
              outline-style: dotted;
              outline-width: 5px;
              outline-color: rebeccapurple;
              outline-offset: 5px;
              border: 2px solid red;
            }
              </style>
            <div className="outline-top"&gt;outline property</div>`}
            ></textarea>
            <style></style>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-9">
        <p className="title">
          Text property (text-color) <br /> text-alignment property (text-align, text-align-last,
          direction, unicode-bidi, vertical-align) <br /> text-decoration property
          (text-decoration-line, text-decoration-color, text-decoration-style,
          text-decoration-thickness, text-decoration) <br /> text transformation (text-transform ){' '}
          <br /> Text Spacing (text-indent, letter-spacing, line-height, word-spacing, white-space){' '}
          <br />
          Text Shadow (text-shadow)
        </p>
        <div>
          <div className="output-wrapper">
            <div className="Text">Text property </div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="20"
              value={` <style>
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
          </style>
          <div className="Text"&gt;Text property </div>`}
            ></textarea>
          </div>
        </div>
        <style></style>
      </div>
      <div className="section-wrapper section-wrapper-10">
        <p className="title">
          Fonts property :- font-family, Font Style, Font Weight, Font Variant, Font Size, font
          shorthand property (font-style font-variant font-weight font-size/line-height font-family)
        </p>
        <div>
          <div className="output-wrapper">
            <div className="Fonts">Fonts property </div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="20"
              value={` <style>
          .section-wrapper-10 .Fonts {
          font-family: "Times New Roman", Times, serif;
          font-style: italic;
          font-weight: bold;
          font-variant: small-caps;
          font-size: 30px;
          }
          </style>
          <div className="Fonts"&gt;Fonts property </div>
          `}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-11">
        <p className="title">
          position property :- position: static; position: relative; position: fixed; position:
          absolute; position: sticky;
        </p>
        <div>
          <div className="output-wrapper">
            <div className="square">
              <div className="circle-1"></div>
              <div className="circle-2"></div>
              <div className="circle-3"></div>
              <div className="circle-4"></div>
            </div>
            <div className="fixedsquare">this is position fixed div</div>
            <div className="stickyMainDiv">
              <div className="stickyDiv">this is sticky square</div>
            </div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="40"
              value={` <style>
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
          </style>
          <div className="square"&gt;
          <div className="circle-1"&gt;</div>
          <div className="circle-2"&gt;</div>
          <div className="circle-3"&gt;</div>
          <div className="circle-4"&gt;</div>
          </div>
          <div className="fixedsquare"&gt;
          this is position fixed div
          </div>
          <div className="stickyMainDiv"&gt;
          <div className="stickyDiv"&gt;
          this is sticky square
          </div>
          </div>
          </div>`}
            ></textarea>
          </div>
          <style></style>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-12">
        <p className="title">
          overflow property :- overflow: visible, overflow: hidden, overflow: scroll, overflow:
          auto, overflow-x and overflow-y
        </p>
        <div>
          <div className="output-wrapper">
            <div className="overflow">
              This text is really long and the height of its container is only 100 pixels.
              Therefore, a scrollbar is added to help the reader to scroll the content. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
              molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
              accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
              duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend
              option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi
              non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.
            </div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="20"
              value={` <style>
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
            </style>
            <div className="overflow"&gt;This text is really long and the height of its container is only 100 pixels. Therefore, a scrollbar is added to help the reader to scroll the content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</div>
            </div>`}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-13">
        <p className="title">font-family</p>
        <div>
          <div className="output-wrapper">
            <div className="fontFamily">
              This text is really long and the height of its container is only 100 pixels.
              Therefore, a scrollbar is added to help the{' '}
            </div>
            <div className="customFont">
              this is custom font Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              dolores quia, facilis eligendi necessitatibus fugiat.
            </div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="20"
              value={` <style>
              .section-wrapper-13 .fontFamily {
              font-family: 'Tangerine', serif;
              font-size: 1.5vw;
              }
              .section-wrapper-13 .customFont {
              font-family: myfont;
              font-size: 1.5vw;
              }
              </style>
              <div className="fontFamily"&gt;This text is really long and the height of its container is only 100 pixels. Therefore, a scrollbar is added to help the </div>
              <div className="customFont"&gt;this is custom font Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque dolores quia, facilis eligendi necessitatibus fugiat.</div>
              </div>`}
            ></textarea>
          </div>
          <style></style>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-14">
        <p className="title">
          Pseudo classNamees(a:link, a:visited, a:hover, a:active ) <br /> Pseudo elements(::after,
          ::before, ::first-letter)
        </p>
        <div>
          <div className="output-wrapper-1">
            <div className="pseudoclassName">Pseudo classNamees on hover property</div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="10"
              value={` <style>
                .section-wrapper-14 .pseudoclassName {
                width: 100%;
                height: 100px;
                }
                .section-wrapper-14 .pseudoclassName:hover {
                width: 100%;
                height: 100px;
                background-color: purple;
                }
                </style>
                <div className="pseudoclassName"&gt;Pseudo classNamees on hover property</div>
                `}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-15">
        <p className="title">
          Flex property (flex-direction, flex-wrap, flex-flow, justify-content, align-items,
          align-content) <br /> flex itmes properties (order, flex-grow, flex-shrink, flex-basis,
          align-self)
        </p>
        <div>
          <div className="output-wrapper-1">
            <div className="flex-container">
              <div className="div1">1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
            </div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="40"
              value={` <style>
                .section-wrapper-15 .flex-container {
                display: flex;
                flex-wrap: wrap;
                background-color: DodgerBlue;
                justify-content: center;
                }
                .section-wrapper-15 .flex-container &gt; div {
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
                </style>
                <div className="flex-container"&gt;
                <div className="div1"&gt;1</div>
                <div&gt;2</div>
                <div&gt;3</div>  
                <div&gt;4</div>
                <div&gt;5</div>
                <div&gt;6</div>  
                <div&gt;7</div>
                <div&gt;8</div>
                <div&gt;9</div>  
                <div&gt;10</div>
                <div&gt;11</div>
                <div&gt;12</div>  
                </div>`}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-16">
        <p className="title">
          Grid property (column-gap, row-gap, gap, grid-template-columns, grid-template-rows) <br />{' '}
          Grid item property(grid-area, grid-column-start, grid-column-end, grid-row-start,
          grid-row-end)
        </p>
        <div>
          <div className="output-wrapper-1">
            <div className="grid-container">
              <div className="item1">1</div>
              <div className="item2">2</div>
              <div className="item3">3</div>
              <div className="item4">4</div>
              <div className="item5">5</div>
              <div className="item6">6</div>
              <div className="item7">7</div>
              <div className="item8">8</div>
            </div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="40"
              value={` <style>
                .section-wrapper-16 .grid-container {
                display: grid;
                grid-template-columns: auto auto auto;
                gap: 10px;
                background-color: #2196F3;
                padding: 10px;
                }
                .section-wrapper-16 .grid-container &gt; div {
                background-color: rgba(255, 255, 255, 0.8);
                text-align: center;
                padding: 20px 0;
                font-size: 30px;
                }
                .section-wrapper-16 .grid-container .item1 {
                grid-column-start: 1;
                grid-column-end: 3;
                }
                </style>
                <div className="grid-container"&gt;
                <div className="item1"&gt;1</div>
                <div className="item2"&gt;2</div>
                <div className="item3"&gt;3</div>  
                <div className="item4"&gt;4</div>
                <div className="item5"&gt;5</div>
                <div className="item6"&gt;6</div>
                <div className="item7"&gt;7</div>
                <div className="item8"&gt;8</div>  
                </div>`}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-17">
        <p className="title">
          Gradient property (linear-gradient, radial-gradient, conic-gradient)
        </p>
        <div>
          <div className="output-wrapper-1">
            <div className="gradient">Gradient property</div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="10"
              value={`            <style>
                .section-wrapper-1 .color{
                color: red;
                }
                </style>
                <div className="color"&gt;color property</div>`}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-18">
        <p className="title">
          Transform property (translate(), rotate(), scaleX(), scaleY(), scale(), skewX(), skewY(),
          skew(), matrix())
        </p>
        <div>
          <div className="output-wrapper-1">
            <div className="translate">translate property</div>
            <div className="rotate">rotate property</div>
            <div className="scale">scale property</div>
            <div className="skew">skew property</div>
            <div className="matrix">matrix property</div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="10"
              value={`          <style>
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
                </style>
                <div className="translate"&gt;translate property</div>
                <div className="rotate"&gt;rotate property</div>
                <div className="scale"&gt;scale property</div>
                <div className="skew"&gt;skew property</div>
                `}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-19">
        <p className="title">
          Transition property (transition, transition-delay, transition-duration,
          transition-property, transition-timing-function)
        </p>
        <div>
          <div className="output-wrapper-1">
            <div className="divClass" id="div1">
              linear
            </div>
            <br />
            <div className="divClass" id="div2">
              ease
            </div>
            <br />
            <div className="divClass" id="div3">
              ease-in
            </div>
            <br />
            <div className="divClass" id="div4">
              ease-out
            </div>
            <br />
            <div className="divClass" id="div5">
              ease-in-out
            </div>
            <br />
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="40"
              value={` <style>
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
                </style>
                <div className="divClass" id="div1"&gt;linear</div><br />
                <div className="divClass" id="div2"&gt;ease</div><br />
                <div className="divClass" id="div3"&gt;ease-in</div><br />
                <div className="divClass" id="div4"&gt;ease-out</div><br />
                <div className="divClass" id="div5"&gt;ease-in-out</div><br />`}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="section-wrapper section-wrapper-20">
        <p className="title">
          animation property (@keyframes, animation-name, animation-duration, animation-delay,
          animation-iteration-count, animation-direction, animation-timing-function,
          animation-fill-mode, animation)
        </p>
        <div>
          <div className="output-wrapper-1">
            <div className="animationdiv1"></div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="10"
              value={`            <style>
                .section-wrapper-1 .color{
                color: red;
                }
                </style>
                <div className="color"&gt;color property</div>`}
            ></textarea>
          </div>
        </div>
        <style></style>
      </div>
      <div className="section-wrapper section-wrapper-21">
        <p className="title">
          animation property (@keyframes, animation-name, animation-duration, animation-delay,
          animation-iteration-count, animation-direction, animation-timing-function,
          animation-fill-mode, animation)
        </p>
        <div>
          <div className="output-wrapper-1">
            <div className="animationdiv1">
              <img id="carImg" src={carImg} alt="" />
              <div className="wheel1"></div>
              <div className="wheel2"></div>
            </div>
          </div>
          <div className="code-wrapper">
            <textarea
              className="textarea"
              disabled=""
              cols="1"
              rows="10"
              value={` <style>
                .section-wrapper-1 .color{
                color: red;
                }
                </style>
                <div className="color"&gt;color property</div>`}
            ></textarea>
          </div>
        </div>
      </div>
    </StyledCssPractice>
  );
};

export default CssPractice;
