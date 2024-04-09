/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import StyledFetchDataWrapper from './StyledFetchData';

const FetchData = () => {
    const [fetchedDataArr, setFetchedDataArr] = useState([]);
    const [thirdKey, setThirdKey] = useState('');
    const [searchInputValue, setSearchInputValue] = useState('');

    const fetchData = async (value) => {
        const response = await fetch(value);
        const json = await response.json();
        setFetchedDataArr(json);
        createTable(json);
    };

    const searchData = () => {
        const tempArr = fetchedDataArr.filter(obj =>
            obj[thirdKey].includes(searchInputValue)
        );
        if (tempArr.length === 0) {
            setFetchedDataArr([]);
        } else {
            createTable(tempArr);
        }
        setSearchInputValue('');
    };

    const createTableHead = (arr) => {
        setThirdKey(arr[2]);
        const tableContent = document.getElementById('tContent');
        const trow = document.createElement('tr');
        arr.forEach(value => {
            const tkey = document.createElement('th');
            tkey.innerText = value;
            trow.appendChild(tkey);
        });
        const deletePost = document.createElement('th');
        deletePost.innerText = 'Delete Row';
        trow.appendChild(deletePost);
        tableContent.appendChild(trow);
    };

    const createTable = (arr) => {
        const tableContent = document.getElementById('tContent');
        tableContent.innerHTML = '';
        createTableHead(Object.keys(arr[0]));
        arr.forEach(obj => {
            const trow = document.createElement('tr');
            for (const x in obj) {
                const tdata = document.createElement('td');
                tdata.innerText = obj[x];
                trow.appendChild(tdata);
            }
            const deletePost = document.createElement('td');
            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'DELETE';
            deleteBtn.dataset.type = 'delete';
            deleteBtn.dataset.id = obj.id;
            deletePost.appendChild(deleteBtn);
            trow.appendChild(deletePost);

            tableContent.appendChild(trow);
        });
    };

    const tableClicked = (event) => {
        if (event.target.dataset.type === 'delete') {
            const updatedArr = fetchedDataArr.filter(
                obj => obj.id !== event.target.dataset.id
            );
            setFetchedDataArr(updatedArr);
            createTable(updatedArr);
        } else {
            event.preventDefault();
        }
    };

    return (
        <StyledFetchDataWrapper>
            <div className="section-wrapper">
                <div className="searchDiv">
                    <input
                        type="search"
                        id="searchInput"
                        placeholder="Search Title"
                        value={searchInputValue}
                        onChange={(e) => setSearchInputValue(e.target.value)}
                    />
                    <button id="searchbtn" onClick={searchData}>
                        FILTER
                    </button>
                </div>
                <div className="apiList">
                    <button
                        value="https://jsonplaceholder.typicode.com/posts"
                        onClick={(event) => fetchData(event.target.value)}
                    >
                       Get Posts
                    </button>
                    <button
                        value="https://jsonplaceholder.typicode.com/comments"
                        onClick={(event) => fetchData(event.target.value)}
                    >
                        Get Comments
                    </button>
                    <button
                        value="https://jsonplaceholder.typicode.com/todos"
                        onClick={(event) => fetchData(event.target.value)}
                    >
                        Get Todos
                    </button>
                </div>
                <div id="mainDiv">
                    <table>
                        <tbody id="tContent" onClick={tableClicked}></tbody>
                    </table>
                </div>
            </div>
        </StyledFetchDataWrapper>
    );
};

export default FetchData;
