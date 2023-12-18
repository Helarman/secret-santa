'use client'

import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FaUserCheck, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { FaAngleDown, FaComputerMouse, FaGift, FaClock, FaXmark} from "react-icons/fa6";
import getCurrentUser from "../actions/getCurrentUser";

export interface NotificationProps {
    id: string
    title: string
    type: 'invite' | 'gift' | 'join' | 'leave' | 'disabled' | 'system'
    date: string
    min?: boolean
    userId?: string
    roomId?: string
    createdAt?: string 
}

const Notification: React.FC<NotificationProps> = ({
    id,
    title,
    type,
    date,
    min,
    userId,
    roomId
}) => {
    
    const memberId = userId;

    const notificationId = id;

    const icons = {
        invite: <FaUserPlus className="h-6 w-6 text-white" />,
        gift: <FaGift className="h-6 w-6 text-white" />,
        system: <FaComputerMouse className="h-6 w-6 text-white" />,
        leave: <FaUserMinus className="h-6 w-6 text-white" />,
        join: <FaUserCheck className="h-6 w-6 text-white" />,
        disabled: <FaClock className="h-6 w-6 text-white" />,
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

    let invite = false;

    if (type === 'invite') {
        invite = true;
    }
    const onAccept = () => {
        axios.put(`/api/rooms/${roomId}/${memberId}`)
            .then(() => {
                toast((t) => (
                    <>
                        <div className="flex items-center">

                            <FaAngleDown size={18} />
                        </div>

                        <div className="flex-1 flex-row pl-3 py-3">
                            Invite accepted!
                        </div>
                    </>
                ));
                window.location.reload();
            })
            .catch(() => {
                toast.error('Error');
            })

        axios.put(`/api/notifications/${notificationId}`)
            .catch(() => {
                toast.error('Error');
            })
        return null;


    }

    const onDecline = () => {
        axios.put(`/api/notifications/${notificationId}`)
            .then(() => {

                toast((t) => (
                    <>
                        <div className="flex items-center">

                            <FaXmark size={18} />
                        </div>

                        <div className="flex-1 flex-row pl-3 py-3">
                            Invite declined!
                        </div>
                    </>
                ));
                window.location.reload();
            })
            .catch(() => {
                toast.error('Error');
            })
        return null;

    }

    return (
        <div className={`${disabled ? 'opacity-50' : ''}  mb-5 `}>
            <div className="flex">
                <div className={`${color} w-16 text-center p-2`}>
                    <div className="flex justify-center h-full items-center">
                        {icon}
                    </div>
                </div>
                <div className={`${border}   ${min ? 'dark:bg-[#181F39] bg-gray-100' : 'dark:bg-[#1E2746] bg-white'} border-r-4 w-full p-4 flex flex-row`}>
                    <div className="w-full">
                        <p className="text-gray-600 dark:text-white font-bold">{notificationId}.{title}</p>
                        <p className="text-gray-600 dark:text-white text-sm">{date}</p>
                    </div>
                    <div className={`${invite ? '' : 'hidden'} ${min ? 'hidden' : ''} w-2/12 flex flex-row gap-2`}  >
                        <button className="w-full bg-emerald-500 text-white p-2 hover:opacity-75" onClick={onAccept}>Accept</button>
                        <button className="w-full border-2 border-gray-500 dark:border-gray-100 dark:text-gray-100 text-gray-500 p-2 hover:opacity-75" onClick={onDecline}>Decline</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification;