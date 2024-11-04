import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form action="search" onClick={(e)=>e.preventDefault()}>
        <label htmlFor="Search">Search</label>
        <input type="text"
        placeholder='Search Items'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem
