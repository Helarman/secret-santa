'use client'

const Search = () => {
    return (
        <input
            placeholder="Search room here.."
            type="text"
            className="
                        border-transparent 
                        px-3 
                        py-2
                        lg:mb-0
                        mb-3
                        text-md
                        w-full 
                        placeholder-gray-700
                        text-gray-700 
                        relative 
                        bg-gray-100 
                        dark:bg-[#181F39]
                        dark:placeholder-violet-50
                        dark:text-violet-50
                        rounded-md 
                        outline-none
                        border 
                        border-solid 
                        transition 
                        duration-200 
                        font-light
                    "
        />
    )
}

export default Search;