'use client'

import { useCallback, useState } from "react";
import Notification from "../Notification";

const Test = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className="w-full">
            <div className="text-gray-500 block"
                onClick={toggleOpen}>
                <div className="relative">
                    <button
                        className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-gray-800 bg-white border-white active:bg-gray-100 active:border-gray-100 text-sm px-6 py-2 shadow hover:shadow-lg rounded-md"

                    >
                        BUTTON
                    </button>
                    <div className="block  z-50">
                        <div className="origin-top-right bg-white text-base float-left p-2 border list-none text-left rounded-lg shadow-lg min-w-48 transition-all duration-100 ease-in transform opacity-0 scale-95 absolute "><a href="javascript:;" className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-gray-100 rounded transition-all duration-100">Edit Profile</a>
                            <a href="javascript:;" className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-gray-100 rounded transition-all duration-100">Settings</a>
                            <a href="javascript:;" className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-gray-100 rounded transition-all duration-100">Log out</a></div>
                    </div>
                </div>
            </div>

            <div
                className={` ${isOpen ? 'hidden' : 'block'} absolute bg-white text-base z-50 float-left p-2 border list-none text-left rounded shadow-lg min-w-48`}
                id="settings-dropdown"
            >
                <Notification title="Determination of Santa Clauses is completed! You give a gift to Name Lastname!" date="2023-12-07 02:00:00" link="" type='gift' />
                <Notification title="You are invited to the room Room Name from Alexander Ivanov!" date="2023-12-07 02:00:00" link="" type='invite' />
                <div
                    className="h-0 my-2 border border-solid border-blueGray-100"
                ></div>
                <a
                    href="#pablo"
                    className="text-sm font-normal px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                >
                    Seprated link
                </a>
            </div>
        </div>
    )
}

export default Test;