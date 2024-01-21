import {styled} from '@mui/material/styles';

const StyledFooterWrapper = styled ('div')(
    ({ theme }) => `

    background-color: #030520;

.footer-wrapper {
    display: flex;
    align-items: center;

    .footer-content{
        color: white;
        width: 80%;
    
        .footer-section-1{
            display: flex;
            width: 100%;
            justify-content: end;
        }

        .footer-section-2{
            width: 80%;
        
            ul.links {
                width: 100%;
                list-style-type: none;
                display: flex;
                justify-content: space-between;
            }
        }
        ul a{
            color: white;
        }
    }
    .footer-image img { 
        width: 100%;
        height: 100px;
    }
}
`)

export default StyledFooterWrapper;