import React from "react";

type PaginationProps = {
    currentPage:number;
    totalPages:number;
    onPageChange:(page:number)=>void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange })=>{
    const pages = [...Array(totalPages).keys()].map(n=>n+1);

    return(
        <>
            <div className="pagination">
                <button
                    onClick={()=>onPageChange(currentPage -1 )}
                    disabled={currentPage === 1}
                >Prev</button>

                {pages.map(page =>(
                    <button
                        key={page}
                        onClick={()=>onPageChange(page)}
                        style={{
                            fontWeight: page === currentPage ? 'bold' : 'normal',
                            backgroundColor: page === currentPage ? '#ddd' : 'transparent'
                        }}
                    >{page}</button>
                ))}

                <button
                    onClick={()=>onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >Next</button>
            </div>
        </>
    )
}

export default Pagination;