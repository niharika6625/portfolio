/* eslint-disable prettier/prettier */
import {styled} from '@mui/material/styles';
const StyledFetchDataWrapper = styled('div')(() => `
    margin: 1em;    
    margin-top: 100px;
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

.searchDiv {
    display: flex;
    justify-content: center;
    margin: 85px 0px;
}

#searchInput {
    width: 30%;
    height: 30px;
    font-size: 18px;
    padding: 0px 10px;
    margin: 0px 20px;
}

#searchbtn {
    width: 110px;
    font-size: 14px;
}

.apiList {
    display: flex;
    justify-content: center;
}

.apiList button {
    width: 120px;
    height: 30px;
    margin: 0px 15px;
}

#mainDiv {
    display: flex;
    justify-content: center;
    margin: 100px auto;
}

table {
    border-collapse: collapse;
}

td,
th {
    border: 1px solid black;
    padding: 13px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
`)

export default StyledFetchDataWrapper