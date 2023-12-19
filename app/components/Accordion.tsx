'use client'

import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({
    title,
    children
}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="overflow-hidden relative flex flex-col min-w-0 bg-white w-full mb-5       
        bg-white
        text-gray-700 
        dark:bg-[#1E2746] 
        dark:text-white">
            <div onClick={toggleAccordion} className="px-4 py-3 cursor-pointer flex flex-row items-center justify-between">
                <h5 className="hover:opacity-75 font-semibold">
                    {title}
                </h5>
                <FaAngleDown/>
            </div>
            <div className={`${isOpen ? '' : 'hidden'} block px-4 py-5`}>
                {children}
            </div>
        </div>
    )
}

export default Accordion;