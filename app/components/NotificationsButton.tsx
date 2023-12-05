'use client'

import { FaBell } from 'react-icons/fa'

const NotificationButton = () => {
    return (
        <div className="mr-5 flex">
            <button className="p-5 rounded-full bg-gray-100 text-gray-900 dark:bg-[#181F39] dark:text-white" >
                <FaBell />
            </button>
        </div>
    )
}

export default NotificationButton;