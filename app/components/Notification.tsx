'use client'

import { FaUserCheck, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { FaComputerMouse, FaGift, FaClock } from "react-icons/fa6";


interface NotificationProps {
    title: string
    type: 'invite' | 'gift' | 'join' | 'leave' | 'disabled' | 'system'
    link: string
    date: string
    min?: boolean
}

const Notification: React.FC<NotificationProps> = ({
    title,
    type,
    link,
    date,
    min
}) => {
    const icons = {
        invite: <FaUserPlus className="h-6 w-6 text-white"/>,
        gift: <FaGift className="h-6 w-6 text-white"/>,
        system: <FaComputerMouse className="h-6 w-6 text-white"/>,
        leave: <FaUserMinus className="h-6 w-6 text-white"/>,
        join: <FaUserCheck className="h-6 w-6 text-white"/>,
        disabled: <FaClock className="h-6 w-6 text-white"/>,
    };

    const icon = icons[type];

    const colors = {
        invite: "bg-blue-500",
        gift: "bg-fuchsia-500",
        system: "bg-rose-700",
        leave: "bg-red-500",
        join: "bg-emerald-500",
        disabled: "bg-gray-500",
    };

    const color = colors[type];

    const borders = {
        invite: "border-blue-500",
        gift: "border-fuchsia-500",
        system: "border-rose-700",
        leave: "border-red-500",
        join: "border-emerald-500",
        disabled: "border-gray-500",
    };

    const border = borders[type];

    let disabled = false;

    if (type === 'disabled') {
        disabled = true;
    }

    return (
        <div className={`${disabled ? 'opacity-50' : 'hover:opacity-75'}  mb-5 `}>
            <div className="flex">
                <div className={`${color} w-16 text-center p-2`}>
                    <div className="flex justify-center h-full items-center">
                        {icon}    
                    </div>
                </div>
                <div className={`${border}   ${min ? 'dark:bg-[#181F39] bg-gray-100' : 'dark:bg-[#1E2746] bg-white' } border-r-4 w-full p-4`}>
                    <div>
                        <p className="text-gray-600 dark:text-white font-bold">{title} ({type})</p>
                        <p className="text-gray-600 dark:text-white text-sm">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification;