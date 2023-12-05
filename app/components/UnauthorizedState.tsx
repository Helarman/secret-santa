'use client'

import { Mountains_of_Christmas } from "next/font/google";
import useLoginModal from "../hooks/useLoginModal";
import useRegisterModal from "../hooks/useRegisterModal";
import Button from "./Button";
import Snowfall from "react-snowfall";


const logoFont = Mountains_of_Christmas({
    subsets: ['latin'],
    weight: '700'
});

const UnauthorizedSate = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    return (
        <>


            <div className="bg-gray-900 bg-[url(https://res.cloudinary.com/dg5t3yck5/image/upload/v1701219678/bs23qdnaf1q1fxod577d.png)] bg-cover bg-center bg-no-repeat text-white">
                <Snowfall snowflakeCount={200}/>
                <div className="w-full h-full bg-black/40 backdrop-opacity-20">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-32 lg:flex h-screen z-100"
                    >
                        <div className="mx-auto max-w-3xl text-center">
                            <h1
                                className={`${logoFont.className}
                                 ' bg-gradient-to-r from-green-300 via-indigo-500 to-purple-600 bg-clip-text text-5xl text-transparent sm:text-5xl'`}
                            >
                                Hidden Santa


                            </h1>

                            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed ">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                                tenetur fuga ducimus numquam ea!
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <div className="block w-full md:w-2/5">
                                    <Button onClick={loginModal.onOpen} label='Login' type='primary' />
                                </div>
                                <div className="block w-full md:w-2/5">
                                    <Button onClick={registerModal.onOpen} label='Register' type='primary' outline />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnauthorizedSate;