import React from 'react'

const Paginator = ({pages, currentPage,onNextClick,onPrevious,buttonDisabledPrev, buttonDisabledNext, currentPageActive,currentPageNumber}) => {
return (
    <nav aria-label="...">
    <ul className="pagination">
        <li className={`${buttonDisabledPrev} page-item`} >
            <a className="page-link" href="#" tabindex="-1" aria-disabled="true" onClick={()=>{onPrevious()}}>Previous</a>
        </li>        
        {
            pages.map(p => {
                return(
                    <li key={p} className={currentPageNumber===p ? `${currentPageActive} page-item` : `page-item`} onClick={()=>{currentPage(p)}}>
                        <a className="page-link" href="#">{p}</a>                    
                    </li>
                )
            })
        }        
        <li className={`${buttonDisabledNext} page-item`}>
            <a className="page-link" href="#" onClick={()=>{onNextClick()}}>Next</a>
        </li>
    </ul>
    </nav>
)
}

export default Paginator;