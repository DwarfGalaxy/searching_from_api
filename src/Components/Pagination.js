import React from 'react'
import { useGlobalContext } from './ContextApi/Context'
function Pagination() {
  const {nextPage,page,nbPages,prevPage}=useGlobalContext()
  return (
    <>
      <div className="d-flex justify-content-center mb-2">
        <button type="button" className="btn btn-dark" onClick={()=>prevPage(page)}>PREV</button>
        <p className='my-auto mx-2'> {page+1} of {nbPages}</p>
        <button type="button" className="btn btn-dark" onClick={()=>nextPage(page)}>NEXT</button>
      </div>

    </>
  )
}

export default Pagination
