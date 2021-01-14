import React from 'react';
import './Pagination.css';

const Pagination = ({profilesPerPage, totalProfiles, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalProfiles/profilesPerPage); i++){
        pageNumbers.push(i);
    }

    return <ul className="pagination">
        {pageNumbers.map(number => [
            <li className="pg" key={number}
            onClick={() => {paginate(number)}}>{number}</li>
        ])}
    </ul>
}

export default Pagination;