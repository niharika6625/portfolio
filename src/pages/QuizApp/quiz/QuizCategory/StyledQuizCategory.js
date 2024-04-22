import { styled } from '@mui/material/styles';

const StyledQuizCategory = styled('div')(
  () => `
  .quizPageWrapper {

    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    background-color: #f0f0f0;
    padding: 50px 0px;
    min-height: 70vh;

    .quizCategory {
        width: 20%;
        margin: auto;
        background-color: white;
        margin-bottom: 20px;
        border-radius: 15px;

        .quizCategoryHeading {
            text-align: center;
            background-color: #e0e0f2;
            color: #42446e;
            padding: 20px;
            border-top-right-radius: 15px;
            border-top-left-radius: 15px;
        }
    }
    .nav-buttons-wrap{
        display:flex;
        justify-content: center;
    }

    .error {
        text-align: center;
    }

    // .quizCategorybtn {
    //     width: 5%;
    //     margin: auto;
    //     padding: 7px 0px;
    //     margin-top: 0px;
    //     // background-color: #18721c;
    //     background-color: #6ba22d; // TODO needs to be updated
    //     border: 2px solid #809b82;

    //     color: white;
    //     border-radius: 3px;
    //     font-weight: 700;
    //     cursor: pointer;

    // }

    .activeCategory {
        background-color: #42446e;
        color: white;
    }
}
  `,
);

export default StyledQuizCategory;
