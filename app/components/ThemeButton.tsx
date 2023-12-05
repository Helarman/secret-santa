"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FaMoon, FaSun } from 'react-icons/fa6'

export function ThemeButton() {
    const [toggle, setToggle] = useState(false)

    const toggleTheme = () => {
        setToggle(!toggle)
    }
    const { setTheme } = useTheme()


    return (
        <>
            <div className="mr-5 flex" onClick={toggleTheme}>
                {toggle ? <button className="p-5 rounded-full bg-gray-100  text-gray-900 dark:bg-[#181F39] dark:text-white" onClick={() => setTheme("dark")}>
                    <FaMoon />
                </button> :
                    <button className="p-5 rounded-full bg-gray-100  text-gray-900 dark:bg-[#181F39] dark:text-white" onClick={() => setTheme("light")}>
                        <FaSun />
                    </button>}
            </div>
        </>
    )
};
