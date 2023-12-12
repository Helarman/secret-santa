'use client'

import { MouseEvent } from "react";
import Button from "./Button";

interface UserCardProps {
    name: string | null
    image: string | null
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const UserCard: React.FC<UserCardProps> = ({
    name,
    image,
    onClick
}) => {
    ``
    return (
        <div className='mb-5'>
            <div className="flex">
                <div className=' text-center'>
                    <div className="flex justify-center h-full items-center">
                        <img src={image || '/images/placeholder.jpg'} alt="avatar" />

                    </div>
                </div>
                <div className='dark:bg-[#181F39] bg-gray-100 border-r-4 border-indigo-500 w-full p-4 flex items-center'>
                    <div className="w-full">
                        <p className="text-gray-600 dark:text-white font-bold">{name}</p>
                    </div>
                    <div className="w-2/12"  >
                        <button className="w-full bg-indigo-500 text-white p-3" onClick={onClick}>Add</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserCard;