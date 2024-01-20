import {styled} from '@mui/material/styles';

const StyledHeaderWrapper = styled('div')(
    ({ theme }) => `

    background-color: #fff;
    position: sticky;
    top: 0;

    .header-content{
        display: flex;
        justify-content: space-between;
        box-shadow: gray;
        .header-link {
            font-size: 25px;
            width: 50%;
            ul.links {
                width: 100%;
                list-style-type: none;
                display: flex;
                justify-content: space-between;
                padding: 0px;
            }
        }
        img { 
            width: 100%;
            height: 100px;
        }
        .right-side-link{
            display: flex;
        }

        ul a {
        color: black;
        }
    }
`)

export default StyledHeaderWrapper;
