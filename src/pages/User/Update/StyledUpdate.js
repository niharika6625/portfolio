import { styled } from '@mui/material/styles';

const StyledUpdate = styled('div')(
  () => `
  .css-nje62a-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    // border-color: #1976d2;
    border-width: 0px !important;
}

.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
   // padding: 15px 1px !important;
}

.infoUpdatePageWrapper {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 30%;

    margin: 110px auto;
    background-color: #f0f0f0;
    padding: 30px 30px;
    border-radius: 10px;

    .user-header{ //TODO background color not getting applied
        text-align: center;
        margin-bottom: 10px;
        background-color:#42446e ;
        color: white;
    }

    .wrapperContent {
        margin: 25px 0px;
        // display: flex;
        // align-items: center;
        // justify-content: space-between;
    }

    .wrapperFooter {
        display: flex;
        justify-content: center;
        margin: 35px 0px 0px 0px;
    }
    .buttonSpacer {
        width: 15px;
      }
}
  `,
);

export default StyledUpdate;
