import React from 'react'
import { useGlobalContext } from './ContextApi/Context';
function Search() {
  const { query, searchItem } = useGlobalContext();
  return (
    <>
      <h1 className='text-center'>Tech News On The Go</h1>
      <form action="" onClick={(e) => e.preventDefault()}>
        <input type="text" className="form-control w-50 mx-auto my-4"  value={query}   onChange={(e) => searchItem(e.target.value)} placeholder='Search here'/>
      </form>
    </>
  )
}

export default Search
