'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mountains_of_Christmas } from 'next/font/google'

import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";

import MenuItem from "./MenuItem";
import Button from "../Button";
import useRentModal from "@/app/hooks/useRentModal";
import Footer from "../footer/Footer";

const logoFont = Mountains_of_Christmas({
    subsets: ['latin'],
    weight: '400'
});

const NavLinks = [
    { label: 'Invites', link: '/rooms/invites', icon: FaPlus },
    { label: 'Your rooms', link: '/rooms/your', icon: FaPlus },
    { label: 'Owned rooms', link: '/rooms/owned', icon: FaPlus },
]

const Sidebar = ({

}) => {

    const router = useRouter();
    const rentModal = useRentModal();

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
                
                
                top-0 
                bottom-0 
                w-80     
                bg-white
                dark:bg-[#1E2746]
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
                        dark:bg-[#1E2746]
                        dark:text-white
                        flex-col 
                        items-stretch 
                        opacity-100  
                        relative 
                        overflow-y-auto 
                        overflow-x-hidden 
                        h-auto z-40 
                        items-center
                        flex-1 
                        rounded 
                        w-full
                        mb-auto
                    "
                    >
                        <div
                            className="
                            px-10
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
                                    className={`${logoFont.className}
                                    'dark:text-white
                                    text-gray-700
                                    dark:text-white
                                    text-4xl 
                                    font-semibold'
                                `}
                                >
                                    Hidden santa
                                </span>


                            </button>

                            <button
                                onClick={toggleSidebar}
                                type="button"
                                className=" justify-end md:hidden"
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
                                <div className="block w-full px-10 ">
                                    <Button onClick={rentModal.onOpen} label='Add new room' type='primary' icon={FaPlus} />
                                </div>
                                <ul >

                                    {NavLinks && NavLinks.map(({ label, link, icon }) => (
                                        <MenuItem key={label} label={label} link={link} icon={icon} />
                                    ))}

                                </ul>
                            </div>

                        </div>
                    </div>
    
                    <div >
                        <Footer />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Sidebar;