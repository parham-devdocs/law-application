
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { IconButton} from 'rsuite'

const SearchInput = () => {
  return (
    <div className='relative rounded-full bg-blue-100 xl:w-2xl lg:w-xl md:w-md h-12 flex items-center px-2 shadow-md '>
    <input
      placeholder='جست و جو کنید...'
      dir="rtl"
      className='bg-transparent w-full text-gray-700 placeholder-gray-500 focus:outline-none'
    />
    <IconButton
      icon={<FaSearch className="w-4 h-4" />}
      circle
      ripple
      className='absolute left-1 text-blue-600 hover:bg-blue-200'
    />
  </div>
  )
}

export default SearchInput