import { styled } from '@mui/material/styles';

const StyledQuizScore = styled('div')(
  () => `
  .quizScorePageWrapper {
    text-align: center;
    padding-top: 120px;
    margin: auto;

    .quizScoreHeading {
        margin-bottom: 22px;
    }
}
  `,
);

export default StyledQuizScore;
