import React from "react";

function Pagination({totalPost, postPerPage, setCurrentPage, currentPage}){

    let pages = [];
    for(let i=1; i<=Math.ceil(totalPost/postPerPage); i++)
    {
        pages.push(i);
    }

    return (
        <>
            <nav aria-label="..." className="d-flex justify-content-center">
                <ul className="pagination mt-5">
                {pages.map((page, index) => {
                    return (
                        <li key={index} className={page === currentPage ? "page-item active" : "page-item"}>
                            <button className="page-link shadow-none" onClick={()=>setCurrentPage(page)}>{page}</button>
                        </li>
                    );
                })}
                </ul>
            </nav>
        </>
    );
}

export default Pagination;