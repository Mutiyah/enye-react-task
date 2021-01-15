import React from 'react';
import '../App.css';

const Pagination = ({profilesPerPage, totalProfiles, paginate}) => {
    const pageNumbers = [];

    for(var i = 1; i<= Math.ceil(totalProfiles / profilesPerPage); i++)
    pageNumbers.push(i);


return (
    <div id="pages">
    <ul id="pagination"> <b>Pages:</b>
        {pageNumbers.map(number => (
            <li key={number}>
                <a href="#" onClick={() => paginate(number)}> {number}</a>
            </li>
        ))}
    </ul>
    </div>
)
}
export default Pagination