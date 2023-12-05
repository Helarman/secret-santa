'use client'

import { useRouter } from 'next/navigation'
import { BsFacebook, BsTwitter, BsInstagram, BsArrowRight } from 'react-icons/bs'


interface LinkProps {
    label: string
    link: string
}

const Footer = ({ }) => {

    const year = new Date().getFullYear()

    const router = useRouter();


    return (

        <footer>
            <div className="">
                <div className="w-full flex flex-col">
                    <div className=" flex flex-row mb-2 justify-start ">
                        <div className="text-sm text-gray-500 font-semibold py-1 text-left">
                            <button className='text-gray-500 hover:opacity-75' onClick={() => router.push('/')}>Hidden Santa</button> © {year}
                            <span className='ml-3'>by <a target="_blank" href='https://helarman.pro' className='text-blue-500 hover:opacity-75'>helarman</a></span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;