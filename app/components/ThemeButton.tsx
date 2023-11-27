"use client"

import { useTheme } from "next-themes"
import { useState } from "react"



export function ThemeButton() {
    const [toggle, setToggle] = useState(false)

    const { setTheme } = useTheme()

    return (
        <>
            <div className="flex inline-flex mt-5">
                <button className="px-5 py-2 bg-gray-300 dark:bg-blue-300 text-black" onClick={() => setTheme("dark")}>
                    Dark
                </button>
                <button className="px-5 py-2 bg-blue-300 dark:bg-gray-300 text-black" onClick={() => setTheme("light")}>
                    Light
                </button>
            </div>
        </>
    )
};
