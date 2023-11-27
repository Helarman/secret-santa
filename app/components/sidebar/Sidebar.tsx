'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/app/types";



import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

import MenuItem from "./MenuItem";



const NavLinks = [
    { label: 'Link', href: '/link' },
    { label: 'Link', href: '/link' },
    { label: 'Link', href: '/link' },
    { label: 'Link', href: '/link' },
    { label: 'Link', href: '/link' },
    { label: 'Link', href: '/link' },
]

const Sidebar = ({
    
}) => {

    const router = useRouter();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen)

    }


    return (
        <>
            <div
                className={`
                ${isSidebarOpen ? 'hidden' : ''} 
                md:hidden 
                bg-blue-600 
                rounded-full 
                fixed 
                z-[1000] 
                w-8 
                h-8 
                p-1 
                m-3
            `}
            >
                <button
                    onClick={toggleSidebar}
                    type="button"
                >
                    <span className="sr-only">
                        Open sidebar
                    </span>

                    <AiOutlineMenuUnfold className="w-6 h-6 text-white" />
                </button>
            </div>
            <nav
                className={`
                block 
                py-4 
                px-6 
                top-0 
                bottom-0 
                w-80     
                bg-white
                dark:bg-[#28253b]
                shadow-xl 
                left-0 
                fixed

                flex-row 
                flex-nowrap 
                md:z-10 
                z-[100] 
                transition-all 
                duration-300 
                ease-in-out
                transform
                ${isSidebarOpen ? `` : `md:translate-x-0 -translate-x-full`}
            `}
            >
                <div
                    className="
                    flex-col
                    min-h-full 
                    px-0 
                    flex 
                    flex-wrap 
                    items-center 
                    justify-between 
                    w-full 
                    mx-auto 
                    overflow-y-auto 
                    overflow-x-hidden
                "
                >
                    <div
                        className="
                        flex 
                        bg-white
                        dark:bg-[#28253b]
                        dark:text-white
                        flex-col 
                        items-stretch 
                        opacity-100  
                        relative mt-4 
                        overflow-y-auto 
                        overflow-x-hidden 
                        h-auto z-40 
                        items-center
                        flex-1 
                        rounded 
                        w-full
                    "
                    >
                        <div
                            className="
                            bg-[#ee5253]
                            md:flex 
                            items-end 
                            justify-between 
                            md:pb-2 
                            mr-0 
                            inline-flex 
                            whitespace-nowrap  
                            px-0
                        "
                        >
                            <button>
                                <span
                                    className="
                                    dark:text-white
                                    text-gray-700
                                    text-xl 
                                    font-semibold
                                "
                                >
                                    Hidden santa
                                </span>


                            </button>

                            <button
                                onClick={toggleSidebar}
                                type="button"
                                className="md:hidden justify-end"
                            >
                                <span className="sr-only">
                                    Open sidebar
                                </span>

                                <AiOutlineMenuFold className="w-6 h-6" />
                            </button>
                        </div>

                        <div
                            className="
                            md:flex-col
                            md:min-w-full 
                            flex 
                            flex-col 
                            list-none
                        "
                        >

                            <div className="my-4 md:min-w-full">
                                <ul >
                                    {NavLinks && NavLinks.map(({ label, href }) => (
                                        <MenuItem key={label} label={label} link={href} />
                                    ))}
                                    
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Sidebar;